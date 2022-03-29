import express from "express";
import 'dotenv/config';

const app = express();
const port = process.env.PORT;


import './db/conn.js';



app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`);
})