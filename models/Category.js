const mongoose = require("mongoose")

const CatgorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },

},{timestamps:true}
);
module.exports = mongoose.model("Category",CatgorySchema)