import { getSession } from "next-auth/react";
import clientPromise from "../../../util/mongodb";

export default async (req, res) => {
    try {
        const session = await getSession({ req });
        if (session && session.admin) {
            const client = await clientPromise;
            const db = client.db("test");
            let users = await db.collection("users").find({}).toArray();
            users = JSON.parse(JSON.stringify(users));
            return res.status(200).json(users);
        } else {
            return res.status(401).json({ message: "Unauthorized" });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};
