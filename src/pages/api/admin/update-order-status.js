import { ObjectId } from "bson";
import { getSession } from "next-auth/react";
import clientPromise from "../../../util/mongodb";

export default async (req, res) => {
    try {
        const session = await getSession({ req });
        if (session && session.admin) {
            if (req.method === "POST") {
                const { status, _id } = req.body;
                const client = await clientPromise;
                const db = client.db("sample_data");
                const result = await db
                    .collection("orders")
                    .findOne({ _id: ObjectId(_id) });
                if (result) {
                    const ord_status = { status, timestamp: new Date() };
                    const order_status = {
                        current: ord_status,
                        info: [...result.order_status.info, ord_status],
                    };
                    await db
                        .collection("orders")
                        .updateOne({ _id: ObjectId(_id) }, { $set: { order_status } });
                    return res
                        .status(200)
                        .json({ message: "Order status updated successfully" });
                } else {
                    return res.status(400).json({ message: "Bad Request" });
                }
            } else {
                return res.status(400).json({ message: "Bad Request" });
            }
        } else {
            return res.status(401).json({ message: "Unauthorized" });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};
