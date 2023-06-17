const mongoose = require('mongoose');
const { Schema, model } = mongoose 
//required: true, min: 4,
const PostSchema = new Schema({
    title: String,  
    summary:String,
    content:String,
    image: String,
    cover:String,
},{
    timestamps:true
});

const PostModel = model('Post', PostSchema)

module.exports = PostModel;