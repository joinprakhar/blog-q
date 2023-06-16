const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const User = require('./models/user');
const app = express();

dotenv.config();
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URL)

app.post('/register',async (req, res) => {
    const {username, password} = req.body
    try{
    const userDoc = await User.create({username, password})
    res.json(userDoc)
    } catch(err){
        res.status(400).json(err);
    }
})


app.listen(4000);