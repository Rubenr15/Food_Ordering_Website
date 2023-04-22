import { ObjectId } from "bson";
import { getSession } from "next-auth/react";
import clientPromise from "../../../util/mongodb";

export default async (req, res) => {
    try {
        if (req.method === "POST") {
            const session = await getSession({ req });
            if (session) {
                const client = await clientPromise;
                const db = client.db("sample_data");
                const admin = await db
                    .collection("admins")
                    .findOne({ user: session.user.email });
                if (admin == false) {
                    return res.status(401).json({ message: "Unauthorized" });
                } else {
                    const { _id, title, category, description, price, image } = req.body;
                    await db
                        .collection("dishes")
                        .replaceOne(
                            { _id: ObjectId(_id) },
                            { title, category, description, price: parseInt(price), image }
                        );
                    return res
                        .status(200)
                        .json({ message: "Dish updated successfully" });
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
