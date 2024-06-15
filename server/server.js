import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 3002;
const apiRouter = express.Router();

const mongoURI = "mongodb://127.0.0.1:27017/BBDB";

mongoose.connect(mongoURI);

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.error(`Failed to connect to MongoDB: ${err.message}`);
});

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});