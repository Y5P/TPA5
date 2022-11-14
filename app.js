const express = require("express");
const app = express();
const port = 8000;
const verifyToken = require("./verify/token");
const mongoose = require("mongoose");
// const auth = require("./userRoute/auth");
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

mongoose.connect(process.env.URL_DB,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
}).then((res) =>{
    console.log("terhubung ke databse");
}).catch((err)=>{
    console.log(err);
});

app.get("/", async(req,res)=>{
    res.send("hello");
});

app.use("/auth",require("./userRoute/auth"))
app.use("/todo",require("./userRoute/todo"))


app.listen(port,()=>{
    console.log(`program berjalan di https://localhost:${port}`);
});