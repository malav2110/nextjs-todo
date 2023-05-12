import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);

export async function connectToDatabase() {
  await client.connect();
  const db = client.db(process.env.MONGODB_DB);
  return { db, client };
}
