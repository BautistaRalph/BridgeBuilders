import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 3002;
const apiRouter = express.Router();

const mongoURI = "mongodb+srv://bridge-builders:Izq3puXdBqbAfD86@bbdb.i5uydnl.mongodb.net/?retryWrites=true&w=majority&appName=BBDB";

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