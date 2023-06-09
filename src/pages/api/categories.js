import clientPromise from "../../util/mongodb";

export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = await client.db("sample_data");
        let categories = await db.collection("categories").find({}).toArray();
        categories = JSON.parse(JSON.stringify(categories));
        return res.status(200).json(categories);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};
