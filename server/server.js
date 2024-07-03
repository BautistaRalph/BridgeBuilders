import express from "express";
import mongoose from "mongoose";
import path from "path";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { MongoClient } from 'mongodb';
import { fileURLToPath } from 'url';
import cors from 'cors';
import { Stats } from "../models/stats.js";

const app = express();
const port = 3002;
const apiRouter = express.Router();

const currentFileUrl = new URL(import.meta.url);
const currentDir = path.dirname(fileURLToPath(currentFileUrl));
const __dirname = path.resolve(currentDir, '..');

function errorFn(err){
  console.log('Error found. Please trace!');
  console.error(err);
}
function successFn(res){
  console.log('Database query successful!');
} 

const mongoURI = "mongodb+srv://joemarlapasaran:2ShWKJtCIxRWo965@bbdb.t2tlkkr.mongodb.net/BBDB"
const mongoClient = new MongoClient(mongoURI);

mongoClient.connect().then(function(con){
  console.log("Attempt to create!");
  const dbo = mongoClient.db('bridgebuilders');
  dbo.createCollection("account")
    .then(successFn).catch(errorFn);
  dbo.createCollection("child")
    .then(successFn).catch(errorFn);
  dbo.createCollection("family")
    .then(successFn).catch(errorFn);
  dbo.createCollection("parent")
    .then(successFn).catch(errorFn);
  dbo.createCollection("sibling")
    .then(successFn).catch(errorFn);
}).catch(errorFn); 

mongoose.connect(mongoURI);

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userType: { type: String, required: true },
  accountType: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);



/*
const accountSchema = new mongoose.Schema({
  username: { type: String },
  password: { type: String },
  userType: { type: String } //superUser, homeCare, community
},{ versionKey: false }); 
const accountModel = mongoose.model('account', accountSchema);

const childSchema = new mongoose.Schema({
  program: { type: String }, //HC or CBP
  date: { type: Date },
  caseNo: { type: Number }, //unique id
  pangalan: { type: String },
  edad: { type: Number },
  kaarawan: { type: Date }, //petsa ng kapanganakan
  relihiyon: { type: String },
  edukasyon: { type: String }, //Kasalukuyan/Naabot na Antas ng Paaralan + list
  palayaw: { type: String},
  kasarian: { type: String }, //male or female
  birthplace: { type: String }, //lugar ng kapanganakan
  paaralan: { type: String }, //huling paaralang pinasukan
  tirahan: { type: String }, //area
  allergy: { type: String },
  vaccine: [{
      name: { type: String }
    }],
  itsura: [{
      madumiPunit: { type: Boolean },
      payat: { type: Boolean },
      maguloBuhok: { type: Boolean },
      siraNgipin: { type: Boolean },
      amoy: { type: Boolean },
      sugat: { type: Boolean },
      madumiKuko: { type: Boolean },
      yapak: { type: Boolean },
      iba: { type: Boolean }
    }],
  kk: { type: String }, //kategoryang kinapapalooban
  magulang: [{
      nanay: { type: String },
      tatay: { type: String }
    }],
  kapatid: [{
      id: { type: String }
    }],
},{ versionKey: false });
const childModel = mongoose.model('child', childSchema);

const parentSchema = new mongoose.Schema({
  id: { type: Number },
  pangalan: { type: String },
  palayaw: { type: String },
  kasarian: { type: String }, //male or female
  edad: { type: Number },
  kaarawan: { type: Date }, //petsa ng kapanganakan
  birthplace: { type: String }, //lugar ng kapanganakan
  relihiyon: { type: String },
  edukasyon: { type: String }, //Kasalukuyan/Naabot na Antas ng Paaralan + list
  paaralan: { type: String }, //huling paaralang pinasukan
  tirahan: { type: String }, //kasalukuyang tirahan (current address)
  probinsya: { type: String},
  trabaho: { type: String },
  kita: { type: Number },
  skillTraining: { type: String }, //skill training attended
  skills: { type: String }
  //documents
},{ versionKey: false});
const parentModel = mongoose.model('parent', parentSchema);

const siblingSchema = new mongoose.Schema ({
  id: { type: String },
  pangalan: { type: String },
  kasarian: { type: String }, //male or female
  edad: { type: Number },
  kagayangSibil: { type: String }, //list e.g. married, single, divorced, widowed
  edukasyon: { type: String }, //antas ng edukasyon + list
  trabaho: { type: String },
  kita: { type: Number }
  //with birth certificate, boolean or file upload
},{ versionKey: false });
const siblingModel = mongoose.model('sibling', siblingSchema);

const familySchema = new mongoose.Schema ({
  bata: [{ // relevant children case numbers
      caeNo: { type: Number }
    }],
  //education
  ilanNagaaral: { type: Number },
  ilanBaon: { type: Number },
  saanGastosBaon: { type: String },
  schoolActivity: { type: String },
  kainPasok: { type: Boolean }, //kumakain bago pumasok ng school
  alsAttend: { type: Boolean },
  //health
  checkup: { type: Boolean },
  familyPlanningMethod: { type: Boolean },
  saanTubig: { type: String },
  saanLaba: { type: String },
  saanCR: { type: String },
  sakit: [{ //kadalasang sakit ng pamilya, multiple input bar
      name: { type: String }
    }], 
  ilanKain: { type: Number }, //ilang beses kumakain sa isang araw
  ilanLigo: { type: Number }, //ilang beses naliligo sa isang araw
  //socio-economic
  ipon: { type: Boolean },
  utang: { type: Boolean },
  dswd: { type: Boolean },
  gastosKita: [{ //multiple input
      name: { type: String }
    }],
  tirahan: { type: String }, //list of options
  reason: { type: String }
},{ versionKey: false });
const familyModel = mongoose.model('family', familySchema);
*/
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

//first open
app.get("/", (req, res) => {
  //res.send("Hello world");
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

//sign up endpoint
app.post('/api/signup', async (req, res) => {
  try {
    const { username, password, userType, accountType } = req.body;  
    if (!username || !password || !userType || !accountType) {  
      return res.status(400).json({ error: 'Please provide username, password, userType, and accountType' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      username,
      password: hashedPassword,
      userType,
      accountType, 
    });

    await user.save();
    console.log(`User created: ${username}`);
    res.status(201).json({ message: 'User created successfully' });
  } catch (e) {
    console.error('Error creating user:', e);
    if (e.code === 11000) { 
      res.status(400).json({ error: 'Username already exists' });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
});

//login endpoint 
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    console.log('Login attempt for user:', username);
    if (!user) {
      console.log('User not found');
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.log('Invalid password');
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id, username: user.username }, "your_jwt_secret", {
      expiresIn: "1h",
    });

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

//overview page
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

//profile page
apiRouter.get('/profile/:caseNo', async (req, res) => {
  console.log('Viewing case data...');
  const dbo = mongoClient.db('bridgebuilders');
  const col = dbo.collection("child");
  const cursor = await col.find({ caseNo: parseInt(req.params.caseNo) });

  cursor.toArray().then(function(vals){
    res.status(200).json(vals);
  }).catch(err => res.status(500).send('Error fetching case data'));
});

//save edited profile changes
apiRouter.post('/editProfile/:caseNo', async (req, res) => {
  console.log('Editing case data...');
  const dbo = mongoClient.db('bridgebuilders');
  const col = dbo.collection("child");

  const caseNo = parseInt(req.params.caseNo)
  const { _id, ...profileData } = req.body['profileData'];

  const result = await col.replaceOne({ caseNo: caseNo }, profileData);
});

// Route to get distinct years
apiRouter.get('/years', async (req, res) => {
  try {
    console.log('Fetching distinct years...');
    const years = await Stats.distinct('year');
    console.log('Years fetched:', years);
    res.json(years);
  } catch (error) {
    console.error('Error fetching years:', error);
    res.status(500).json({ error: 'Failed to fetch years' });
  }
});

// Route to delete a specific year
apiRouter.delete('/years/:year', async (req, res) => {
  try {
    const { year } = req.params;

    const existingStats = await Stats.findOne({ year });
    if (!existingStats) {
      return res.status(404).json({ error: 'Year not found' });
    }

    await Stats.deleteOne({ year });
    res.status(200).json({ message: 'Year deleted successfully' });
  } catch (error) {
    console.error('Error deleting year:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get statistics for a specific year
apiRouter.get('/stats/:year', async (req, res) => {
  try {
    const { year } = req.params;
    const stats = await Stats.findOne({ year });
    if (!stats) {
      return res.status(404).json({ error: 'Statistics for the year not found' });
    }
    res.status(200).json(stats);
  } catch (error) {
    console.error('Error fetching statistics:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update label name and value key for a specific label
apiRouter.put('/stats/:year/goals/:category/label/:label', async (req, res) => {
  try {
    const { year, category, label } = req.params;
    const { newLabel, newValue } = req.body;

    const stats = await Stats.findOne({ year });
    if (!stats) {
      return res.status(404).json({ error: 'Statistics for the year not found' });
    }

    const goalCategory = stats.goals[category];
    if (!goalCategory) {
      return res.status(404).json({ error: 'Category not found' });
    }

    const labelToUpdate = goalCategory.find(item => item.label === label);
    if (!labelToUpdate) {
      return res.status(404).json({ error: 'Label not found' });
    }

    labelToUpdate.label = newLabel; 
    labelToUpdate.valueKey = newValue; 

    await stats.save();
    res.status(200).json({ message: 'Label updated successfully' });
  } catch (error) {
    console.error('Error updating label:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create a new statistic entry
apiRouter.post('/stats', async (req, res) => {
  try {
    const { year, goals } = req.body;

    if (!year || !goals) {
      return res.status(400).json({ error: 'Year and goals are required' });
    }

    let existingStats = await Stats.findOne({ year });
    if (existingStats) {
      return res.status(400).json({ error: 'Statistic entry for the year already exists' });
    }

    const newStats = new Stats({
      year,
      goals
    });

    await newStats.save();
    res.status(201).json({ message: 'Statistic entry created successfully', stats: newStats });
  } catch (error) {
    console.error('Error creating statistic entry:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Add a label to a specific goal and year
apiRouter.post('/stats/:year/goals/:category/label', async (req, res) => {
  try {
    const { year, category } = req.params;
    const { label, valueKey } = req.body;

    if (!label || valueKey === undefined) {
      return res.status(400).json({ error: 'Label and valueKey are required' });
    }

    const stats = await Stats.findOne({ year });
    if (!stats) {
      return res.status(404).json({ error: 'Statistics for the year not found' });
    }

    const goalCategory = stats.goals[category];
    if (!goalCategory) {
      return res.status(404).json({ error: 'Category not found' });
    }

    goalCategory.push({ label, valueKey });

    await stats.save();
    res.status(200).json({ message: 'Label added successfully' });
  } catch (error) {
    console.error('Error adding label:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete a label from a specific goal and year
apiRouter.delete('/stats/:year/goals/:category/label/:label', async (req, res) => {
  try {
    const { year, category, label } = req.params;

    const stats = await Stats.findOne({ year });
    if (!stats) {
      return res.status(404).json({ error: 'Statistics for the year not found' });
    }

    const goalCategory = stats.goals[category];
    if (!goalCategory) {
      return res.status(404).json({ error: 'Category not found' });
    }

    const labelToDeleteIndex = goalCategory.findIndex(item => item.label === label);
    if (labelToDeleteIndex === -1) {
      return res.status(404).json({ error: 'Label not found' });
    }

    goalCategory.splice(labelToDeleteIndex, 1);

    await stats.save();
    res.status(200).json({ message: 'Label deleted successfully' });
  } catch (error) {
    console.error('Error deleting label:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
