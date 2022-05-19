import { MongoClient } from "mongodb";
const uri = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster_name}.u3ote.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    // store in db
    const newMessage = {
      email,
      name,
      message,
    };
    console.log(newMessage);

    let client;

    try {
      client = await MongoClient.connect(uri);
    } catch (error) {
      res.status(500).json({ message: "Could not connect to DB." });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing msg failed." });
    }

    client.close();

    res
      .status(201)
      .json({ message: "OK, new message stored.", data: newMessage });
  }
}

export default handler;
