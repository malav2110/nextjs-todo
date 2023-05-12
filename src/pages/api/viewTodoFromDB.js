import { connectToDatabase } from "@/utils/mongodb";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const { db, client } = await connectToDatabase();

      const result = await db.collection("todos").find({}).toArray();

      client.close();

      return res.status(200).json({ success: true, result: result });
    } catch (error) {
      return res.status(400).json({ success: false });
    }
  } else {
    return res.status(400).json({ success: false });
  }
}
