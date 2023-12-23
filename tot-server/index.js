const express = require("express");
require("dotenv").config();
const cors = require("cors");
const jwt = require("jsonwebtoken");

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const cookieParser = require("cookie-parser");
const app = express();
const port = process.env.PORT || 5000;

// middleware
const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:5174",
    "https://time-on-task-project.web.app",
  ],
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
    const userCollection = client.db("timeOnTaskDB").collection("users");

    //jwt access token
    app.post("/jwt", async (req, res) => {
      const userInfo = req.body;
      const token = jwt.sign(userInfo, process.env.ACCESS_TOKEN, {
        expiresIn: "365d",
      });

      console.log(token);
      res
        .cookie("access-token", token, {
          httpOnly: true,
          // secure: process.env.NODE_ENV === "production",
          // sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",

          //deploy
          secure: true,
          sameSite: "none",
        })
        .send({ success: true });
    });

    //logout with clear cookie
    app.get("/logout", async (req, res) => {
      try {
        res
          .clearCookie("access-token", {
            maxAge: 0,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
          })
          .send({ success: true });
        console.log("Logout successful");
      } catch (err) {
        res.status(500).send(err);
      }
    });

    //verify token
    const verifyToken = (req, res, next) => {
      const token = req?.cookies?.["access-token"];
      console.log("token from verify token", token);

      if (!token) {
        return res.status(401).send({ message: "unauthorized" });
      }
      jwt.verify(token, process.env.ACCESS_TOKEN, function (err, decoded) {
        if (err) {
          return res.status(401).send({ message: "You are not authorized" });
        }
        req.user = decoded;
        next();
      });
    };

    //post a user to db
    app.post("/user", async (req, res) => {
      const user = req.body;
      const query = { email: req.body.email };
      const findUser = await userCollection.findOne(query);
      if (findUser) {
        return res.send({ message: "Already exists." });
      }
      const result = await userCollection.insertOne(user);
      res.send({ message: "New user joined.", result });
    });

    //get all task
    app.get("/tasks", verifyToken, async (req, res) => {
      const query = { email: req.query.email };
      const result = await taskCollection.find(query).toArray();
      res.send(result);
    });

    //single task
    app.get("/task/:id", verifyToken, async (req, res) => {
      const id = req.params.id;
      const email = req.query.email;

      const query = { _id: new ObjectId(id), email: email };
      const result = await taskCollection.findOne(query);
      res.send(result);
    });

    //post a task to db
    app.post("/add-task", async (req, res) => {
      const task = req.body;
      const result = await taskCollection.insertOne(task);
      res.send(result);
    });

    //patch a task status
    app.patch("/task/:id", verifyToken, async (req, res) => {
      const status = req.body;
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          ...status,
        },
      };
      const result = await taskCollection.updateOne(filter, updateDoc);
      res.send(result);
    });

    app.patch("/update-task/:id", verifyToken, async (req, res) => {
      const updatedTask = req.body;
      const id = req.params.id;
      const filter = { _id: new ObjectId(id), email: req.query.email };
      const updateDoc = {
        $set: {
          ...updatedTask,
        },
      };
      const result = await taskCollection.updateOne(filter, updateDoc);
      res.send(result);
    });

    app.delete(`/delete-task/:id`, async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await taskCollection.deleteOne(query);
      res.send(result);
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
