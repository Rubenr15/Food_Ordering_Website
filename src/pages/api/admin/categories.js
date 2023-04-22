import {getSession} from 'next-auth/react';
import clientPromise from '../../../util/mongodb';

export default async (req,res) => {
    try{
        const session = await getSession({req});
        if(session && session.admin){
            const client = await clientPromise;
            const db = client.db("sample_data");
            let categories = await db.collection("categories").find({}).toArray();
            categories = JSON.parse(JSON.stringify(categories));
            return res.status(200).json(categories);
        }
        else{
            return res.status(401).json({message:"Unauthorized"});
        }
    }catch(err){
        console.log(err);
        return res.status(500).json({message:"Internal Server Error"});
    }
}