import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import homeRoutes from './routes/homeRoutes.js';

dotenv.config();

const app=express();
const PORT=process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/auth", authRoutes);
app.use("/home", homeRoutes);

app.listen(PORT,()=>{
    console.log(`server started on localhost:${PORT}`);
})