import express from "express";
import dbConnect from "./config/dbConnect.js";
import cors from "cors";

//서버
const server = express();

server.use(cors());

//db연결
dbConnect();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

//apply 
import applicationRoutes from "./routes/applicationRoutes.js";
import applicationsRoutes from "./routes/applicationsRoutes.js";
import authRoutes from "./routes/authRoutes.js";
server.use("/api/application", applicationRoutes);
server.use("/api/applications", applicationsRoutes);
server.use("/api/auth", authRoutes);

server.listen(3000, () => {
    console.log('서버 실행 중');
});