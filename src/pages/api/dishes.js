import clientPromise from "../../util/mongodb";
//import dis from  "../../../dishes.json"

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = await client.db("sample_data");
    let dishes = await db.collection("dishes").find({}).toArray();
    dishes = JSON.parse(JSON.stringify(dishes));
    return res.status(200).json(dishes);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};


/*dis.forEach(async(itm)=>{
        await db.collection("dishes").insertOne(itm)
    })*/

//await db.collection("dishes").deleteMany({})
