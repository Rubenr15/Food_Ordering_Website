import clientPromise from "../../util/mongodb";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  const { items, email } = req.body;

  try {
    const client = await clientPromise;
    const db = client.db("sample_data");
    //await db.collection("temp").deleteMany({ user: email });
    //to delete temp doc in 56 days automatically. run only one time
    //await db.collection("temp").createIndex({ "createdAt": 1 }, { expireAfterSeconds:4838400 })
    const result = await db.collection("temp").insertOne({
      user: email,
      items,
      createdAt: new Date(),
    });
    const transformedItems = items.map((item) => ({
      // description: item.description,
      // quantity: item.qty,
      // price_data: {
      //   price: "INR",
      //   //unit_amount_decimal  insted to unit_amount for decimal
      //   unit_amount: item.price * 100,
      //   product_data: {
      //     name: item.title,
      //    // images: [item.image],
      //   },
      // },
      quantity: item.qty,
      price_data: {
        currency : "INR",
        unit_amount: item.price * 100,
        product_data : {
          name : item.title,
          description: item.description,
        }
      }

    }));
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        shipping_options: [
          {
            shipping_rate_data: {
              type: 'fixed_amount',
              fixed_amount: {amount: 0, currency: 'INR'},
              display_name: 'Free shipping',
              delivery_estimate: {
                minimum: {unit: 'hour', value: 1},
                maximum: {unit: 'hour', value: 2},
              },
            },
          },
        ],
        shipping_address_collection: {
          allowed_countries: ["GB", "US", "CA", "IN"],
        },
        line_items: transformedItems,
        mode: "payment",
        success_url: `${process.env.HOST}/success`,
        cancel_url: `${process.env.HOST}/cart`,
        metadata: {
          id: JSON.stringify(result.insertedId),
        },
      });
      return res.status(200).json({ id: session.id });
    } catch (err) {
      console.error(err);
      return res.status(400).json({ message: "Bad Request" });
    }
  } catch (err) {
    console.error(err);
    return res.status(400).json({ message: "Bad Request" });
  }
};
