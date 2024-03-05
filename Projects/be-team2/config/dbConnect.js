import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DB_CONNECT = process.env.DB_CONNECT;

const dbConnect = async () => {
    try {
        const connect = await mongoose.connect(DB_CONNECT);
        console.log("DB connected");
    } catch (err) {
        console.error(err);
    }
};

export default dbConnect;
