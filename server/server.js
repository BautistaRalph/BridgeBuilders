import express from "express";
import mongoose from "mongoose";
import path from "path";
import { MongoClient } from 'mongodb';
import { fileURLToPath } from 'url';
import cors from 'cors';

const app = express();
const port = 3002;
const apiRouter = express.Router();

const currentFileUrl = new URL(import.meta.url);
const currentDir = path.dirname(fileURLToPath(currentFileUrl));
const __dirname = path.resolve(currentDir, '..');

const mongoURI = "mongodb+srv://joemarlapasaran:2ShWKJtCIxRWo965@bbdb.t2tlkkr.mongodb.net/BBDB";

const mongoClient = new MongoClient(mongoURI);
mongoClient.connect();

mongoose.connect(mongoURI);

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.error(`Failed to connect to MongoDB: ${err.message}`);
});

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

const userAccess = 'superUser'; //temp

app.get("/", (req, res) => {
  //res.send("Hello world");
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

apiRouter.get('/overview', (req, res) => {
  console.log('Getting children data...');
  const dbo = mongoClient.db('bridgebuilders');
  const col = dbo.collection("child");
  var cursor;

  if(userAccess == 'superUser')
    cursor = col.find();
  else if(userAccess == 'homeCare')
    cursor = col.find({ program: "Home Care" });
  else if(userAccess == 'community')
    cursor = col.find({ program: "Community Based Program" });

  cursor.toArray().then(function(vals){
    res.status(200).json(vals);
  }).catch(err => res.status(500).send('Error fetching children data'));
}); 

apiRouter.get('/profile/:caseNo', async (req, res) => {
  console.log('Viewing case data...');
  const dbo = mongoClient.db('bridgebuilders');
  const col = dbo.collection("child");
  const cursor = await col.find({ caseNo: parseInt(req.params.caseNo) });

  cursor.toArray().then(function(vals){
    res.status(200).json(vals);
  }).catch(err => res.status(500).send('Error fetching case data'));
});

apiRouter.post('/editProfile/:caseNo', async (req, res) => {
  console.log('Editing case data...');
  const dbo = mongoClient.db('bridgebuilders');
  const col = dbo.collection("child");

  const caseNo = parseInt(req.params.caseNo)
  const { _id, ...profileData } = req.body['profileData'];

  const result = await col.replaceOne({ caseNo: caseNo }, profileData);
});

app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});