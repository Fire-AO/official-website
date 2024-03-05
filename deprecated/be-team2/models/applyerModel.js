import mongoose from "mongoose";

// 스키마
const applyerSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phoneNum: {
        type: String,
        required: true
    },
    aWord: {
        type: String,
        required: true
    }
});

const Applyer = mongoose.model("Applyer", applyerSchema);
export default Applyer;
