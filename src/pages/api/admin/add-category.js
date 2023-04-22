import { getSession } from "next-auth/react";
import clientPromise from "../../../util/mongodb";

export default async (req, res) => {
    console.log(req.method);
    console.log(req.body);
    try {
        if (req.method === "POST") {
            const session = await getSession({ req });
            if (session) {
                const client = await clientPromise;
                const db = await client.db("sample_data");
                const admin = await db
                    .collection("admins")
                    .findOne({ user: session.user.email });
                if (admin == false) {
                    return res.status(401).json({ message: "Unauthorized" });
                } else {
                    await db.collection('categories').insertOne(req.body);
                    return res
                        .status(200)
                        .json({ message: "Category added successfully" });
                }
            } else {
                return res.status(401).json({ message: "Unauthorized" });
            }
        } else {
            return res.status(400).json({ message: "Bad Request" });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};
