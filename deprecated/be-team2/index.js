import express from "express";
import path from 'path';
import dbConnect from "./config/dbConnect.js";
import cors from "cors";

//서버
const server = express();

server.use(cors());

const __dirname = path.resolve();

server.use(express.static(path.join(__dirname, '..','fe','dist')));

//db연결
dbConnect();

server.use(express.json());
server.use(express.urlencoded({extended: true}));

server.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'fe', 'dist', 'index.html'));
});

//apply 
import applyRoutes from "./routes/applyRoutes.js";
server.use("/api/apply", applyRoutes);


server.listen(3000, ()=>{
    console.log('서버 실행 중');
});