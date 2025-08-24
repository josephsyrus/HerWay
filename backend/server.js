import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import homeRoutes from './routes/homeRoutes.js';
import userRoutes from './routes/userRoutes.js';
import mapRoutes from './routes/mapRoutes.js';

dotenv.config();

const app=express();
const PORT=process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/auth", authRoutes);
app.use("/home", homeRoutes);
app.use("/users", userRoutes);
app.use("/map", mapRoutes);

app.listen(PORT,()=>{
    console.log(`server started on localhost:${PORT}`);
})