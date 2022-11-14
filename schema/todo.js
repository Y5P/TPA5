const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
        judul: String,
        deskripsi: String,
    },{
        collection:"todo"
    }
);

module.exports = mongoose.model("todo",todoSchema);