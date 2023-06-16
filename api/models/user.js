const mongoose = require('mongoose');
const {Schema, model} = mongoose 

const UsereSchema = new Schema({
    username:{ type: String, required: true, min: 4, unique: true},
    password:{ type: String, required: true}
})

const UserModel = model('User', UsereSchema)

module.exports = UserModel;