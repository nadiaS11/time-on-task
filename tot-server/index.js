const express = require("express");
require("dotenv").config();
const cors = require("cors");
const jwt = require("jsonwebtoken");
// const stripe = require("stripe")(process.env.PAYMENT_KEY);

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const cookieParser = require("cookie-parser");
const app = express();
const port = process.env.PORT || 5000;

// middleware
const corsOptions = {
  origin: ["http://localhost:3000", "http://localhost:3001"],
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

//mongodb connection
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ly9jdk7.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const taskCollection = client.db("timeOnTaskDB").collection("tasks");

    app.get("/tasks", async (req, res) => {
      const message = "hello";
      res.send({ message });
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", async (req, res) => {
  res.send("Welcome to  TimeOnTask server");
});

app.listen(port, () => {
  console.log(` TimeOnTask server running on port ${port}`);
});
