const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const todoSchema = require("../schema/todo");
const verifikasiToken = require("../verify/token");

router.post("/add", verifikasiToken, async (req,res)=>{
    const {judul, deskripsi} = req.body;
    try{
        const data = await todoSchema.create({
            judul:judul,
            deskripsi:deskripsi,
        });

        if(data){
            res.send(data);
        }else{
            res.send("error");
        }
    }catch (err){
        res.send(err);
    }
});

router.get("/show/all", verifikasiToken, async (req,res)=>{
    try{
        const data = await todoSchema.find({});

        if(data){
            res.send(data);
        }else{
            res.send("error");
        }
    }catch (err){
        res.send(err);
    }
});

router.post("/show", verifikasiToken, async (req,res)=>{
    const {judul} = req.body;
    try{
        const data = await todoSchema.find({judul:judul});

        if(data){
            res.send(data);
        }else{
            res.send("error");
        }
    }catch (err){
        res.send(err);
    }
});

router.post("/update/deskripsi", verifikasiToken, async (req,res)=>{
    const {judul, deskripsi} = req.body;

    try{
        const data = await todoSchema.findOneAndUpdate(judul,{deskripsi:deskripsi});

        if(data){
            res.send(data);
        }else{
            res.send("error");
        }
    }catch (err){
        res.send(err);
    }
});

router.post("/update/", verifikasiToken, async (req,res)=>{
    const {judul, judulBaru} = req.body;

    try{
        const data = await todoSchema.findOneAndUpdate(judul,{judul:judulBaru});

        if(data){
            res.send(data);
        }else{
            res.send("error");
        }
    }catch (err){
        res.send(err);
    }
});

router.post("/delete", verifikasiToken, async (req,res)=>{
    const {judul} = req.body;

    try{
        const data = await todoSchema.findOneAndDelete(judul);

        if(data){
            res.send(data);
        }else{
            res.send("error");
        }
    }catch (err){
        res.send(err);
    }
});

router.get("/delete/all", verifikasiToken, async (req,res)=>{
    try{
        const data = await todoSchema.deleteMany({});

        if(data){
            res.send(data);
        }else{
            res.send("error");
        }
    }catch (err){
        res.send(err);
    }
});

module.exports = router;