import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/metube");

const db = mongoose.connection;

const handleOpen = () => console.log("✔  DB에 연결되었습니다.");
const handleError = (error) => console.log("❌  DB Error", error);

//on --> 계속 실행될수있음
//once --> 한번만
db.on("error", handleError);
db.once("open", handleOpen);
