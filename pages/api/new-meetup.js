import { MongoClient } from "mongodb";

//连接数据库
async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const { title, image, address, description } = data;

    const client = await MongoClient.connect(
      "mongodb+srv://hzz1996:OOPSl9OrTV4LW91d@cluster0.rwynkdw.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne({ data });

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
