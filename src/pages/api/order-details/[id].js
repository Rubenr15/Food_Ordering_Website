import { ObjectId } from "bson";
import { getSession } from "next-auth/react";
import clientPromise from "../../../util/mongodb";

export default async (req, res) => {
    try {
        const session = await getSession({ req });
        if (session) {
            const client = await clientPromise;
            const db = client.db("sample_data");
            let order;
            try {
                if (session.admin) {
                    order = await db
                        .collection("orders")
                        .findOne({ _id: ObjectId(req.query.id) });
                } else {
                    order = await db
                        .collection("orders")
                        .findOne({ user: session.user.email, _id: ObjectId(req.query.id) });
                }
            } catch (err) {
                console.error(err);
                return res.status(400).json({ message: "Bad Request" });
            }
            if (!order) {
                return res.status(404).json({ message: "Not Found" });
            }
            order = JSON.parse(JSON.stringify(order));
            return res.status(200).json(order);
        } else {
            return res.status(401).json({ message: "Unauthorized" });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};
