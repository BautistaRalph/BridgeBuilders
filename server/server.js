import express from "express";
import mongoose from "mongoose";
import path from "path";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { MongoClient } from 'mongodb';
import { fileURLToPath } from 'url';
import cors from 'cors';

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

//const mongoURI = "mongodb://127.0.0.1:27017/BBDB";
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

//sign up endpoint
app.post('/api/signup', async (req, res) => {
  try {
    const { username, password, userType } = req.body;
    if (!username || !password || !userType) {
      return res.status(400).json({ error: 'Please provide username, password, and userType' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      username,
      password: hashedPassword,
      userType,
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


apiRouter.get('/children', (req, res) => {
  console.log('called');
  const dbo = mongoClient.db('bridgebuilders');
  const col = dbo.collection("child");
  const cursor = col.find();
  cursor.toArray().then(function(vals){
    res.status(200).json(vals);
  }).catch(err => res.status(500).send('Error fetching children data'));
  
});

app.use("/api", apiRouter);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});