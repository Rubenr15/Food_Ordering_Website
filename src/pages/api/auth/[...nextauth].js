import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../util/mongodb";

export default NextAuth({
  // Configure one or more authentication providers
  adapter:MongoDBAdapter(clientPromise),
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    // ...add more providers here
  ],

  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async session(session) {
      session.admin = false;
      const client = await clientPromise;
      const db = client.db("sample_data");
      const result = await db.collection("admins").findOne({ email: session.user.email });
      if (result) {
        session.admin = true;
      }
      return session;
    },
  },
  theme:"dark",
})