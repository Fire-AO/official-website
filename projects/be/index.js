import express from "express";
import dbConnect from "./config/dbConnect.js";
import cors from "cors";

//서버
const server = express();

server.use(cors());

//db연결
dbConnect();

server.use(express.json());
server.use(express.urlencoded({extended: true}));

//apply 
import applyRoutes from "./routes/applyRoutes.js";
server.use("/api/apply", applyRoutes);

server.listen(3000, ()=>{
    console.log('서버 실행 중');
});