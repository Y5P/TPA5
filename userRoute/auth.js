const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const userSchema = require("../schema/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post("/signup", async (req,res)=>{
    const {username, password} = req.body;
    const hashPassword = await bcrypt.hash(password,10);
    try{
        const data = await userSchema.create({
            username:username,
            password:hashPassword,
        });

        if(data){
            res.send(data);
        }else{
            res.send("error");
        }
    }catch (err){
        res.send("terjadi error!");
    }
});


router.post("/signin", async (req,res)=>{
    const {username, password} = req.body;
    const hashPassword = await bcrypt.hash(password,10);
    try{
        const data = await userSchema.findOne({
            username:username,
        });

        if(data){
            const checkPassword = await bcrypt.compare(password,data.password);
            if(checkPassword){
                const token = jwt.sign({
                        username:data.username,
                    },
                    process.env.JWT_KEY
                )
                res.send(token);
            }else{
                res.send("password salah");
            }
        }else{
            res.send("username belum terdaftar");
        }
    }catch (err){
        res.send("terjadi error!");
    }
});

module.exports = router;