import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import connectDB from './dbConnect.js';
import loginRoutes from './api/LoginRoutes.js';
import childRoutes from './api/ChildRoutes.js';
import statsRoutes from './api/StatRoutes.js';
import parentRoutes from './api/ParentRoutes.js';
import kapatidRoutes from './api/SiblingRoutes.js';
import familyRoutes from './api/FamilyRoutes.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

const currentFileUrl = new URL(import.meta.url);
const currentDir = path.dirname(fileURLToPath(currentFileUrl));
const __dirname = path.resolve(currentDir, '..');

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', loginRoutes);
app.use('/api', childRoutes);
app.use('/api', parentRoutes);
app.use('/api', kapatidRoutes);
app.use('/api', familyRoutes);
app.use('/api', statsRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

if (!process.env.VERCEL) {
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}

export default app;
