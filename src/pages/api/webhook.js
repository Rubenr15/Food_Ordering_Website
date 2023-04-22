import { ObjectId } from "bson";
import { buffer } from "micro";
import clientPromise from "../../util/mongodb";

//Establish connection to Stripe
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const endpointSecret = "whsec_c078441cf8ff6244447f05d19b8387ad6f93bf04d546dd004e2302f28a8e1a1b";

const fulfillOrder = async (session) => {
  try {
    const client = await clientPromise;
    const db = await client.db("sample_data");
    let result = await db
      .collection("temp")
      .findOne({ _id: ObjectId(JSON.parse(session.metadata.id)) });
    console.log(result);
    delete result._id;
    const ord_status = { status: "shipping soon", timestamp: new Date() };
    await db.collection("orders").insertOne({
      order_status: {
        current: ord_status,
        info: [ord_status],
      },
      ...result,
      ...session,
      timestamp: new Date(),
    });
    console.log(`SUCCESS: Order ${session.id} has been added to the DB`);
  } catch (err) {
    console.error(err);
  }
};

export default async (req, res) => {
  console.log(req.method);
  if (req.method === "POST") {
    const requestBuffer = await buffer(req);
    const payload = requestBuffer.toString();
    const sig = req.headers["stripe-signature"];

    console.log(requestBuffer);
    console.log(payload);
    console.log(sig);

    let event;

    //Verify that the EVENT posted came from stripe
    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
      console.log(event);
    } catch (err) {
      console.error(err.message);
      return res.status(400).json({ message: err.message });
    }

    //Handle the checkout.session.completed event
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      //Fulfill the order
      return fulfillOrder(session)
        .then(() => res.status(200).json({ message: "success" }))
        .catch((err) => {
          console.error(err);
          return res.status(400).json({ message: err.message });
        });
    }
  }
};

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
