import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import homeRoutes from './routes/homeRoutes.js';
import userRoutes from './routes/userRoutes.js';
import mapRoutes from './routes/mapRoutes.js';
import connectMongoDB from './db/connectMongoDB.js';
import path from 'path';
import { fileURLToPath } from 'url'; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app=express();
const PORT=process.env.PORT;

app.use(express.static(path.join(__dirname, '../frontend')));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/auth", authRoutes);
app.use("/home", homeRoutes);
app.use("/users", userRoutes);
app.use("/map", mapRoutes);

app.listen(PORT,()=>{
    console.log(`server started on localhost:${PORT}`);
    connectMongoDB();
})