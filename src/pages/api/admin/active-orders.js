import { getSession } from "next-auth/react";
import clientPromise from "../../../util/mongodb";

export default async (req, res) => {
    try {
        const session = await getSession({ req });
        if (session && session.admin) {
            const client = await clientPromise;
            const db = await client.db("sample_data");
            let orders = await db
                .collection("orders")
                .find({
                    payment_status: "paid",
                    "order_status.current.status": {
                        $in: ["shipping soon", "shipped", "out for delivery"],
                    },
                })
                .sort({ timestamp: -1 })
                .toArray();
            orders = JSON.parse(JSON.stringify(orders));
            return res.status(200).json(orders);
        } else {
            return res.status(401).json({ message: "Unauthorized" });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};
