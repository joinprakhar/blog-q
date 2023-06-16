const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const User = require('./models/user');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const salt = bcrypt.genSaltSync(10);
const secret = "76b7u76u7u6bfxnghnchg7yjyujjjy";

dotenv.config();
app.use(cors({ 
    credentials: true, 
    origin:'http://localhost:3000'
}))
app.use(express.json())
app.use(cookieParser());

mongoose.connect(process.env.MONGO_URL)

app.post('/register',async (req, res) => {
    const {username, password} = req.body
    try{
    const userDoc = await User.create({
        username, 
        password:bcrypt.hashSync(password,salt),
    })
    res.json(userDoc)
    } catch(err){
        res.status(400).json(err);
    }
})

app.post('/login', async(req, res) => {
    const {username, password} = req.body;
    const userDoc = await User.find({username})
    const userDocs = userDoc[0]
    const passOk = bcrypt.compareSync(password, userDocs.password);
    if (passOk) {
        //logedIn
        jwt.sign({ username, id: userDocs._id} , secret, {}, (err, token) => {
            if (err) throw err;
            res.cookie('token', token).json({
                id: userDocs._id,
                username,
            });
        });
        //res.json()
    }  else {
        res.status(400).json('wrong Credentials')
    }
})

app.get('/profile', (req, res) => {
    const { token } = req.cookies;
    jwt.verify(token, secret, {}, (err, info) => {
         if (err) throw err;
         res.json(info);
     });
});

app.post('/logout', (req, res) => {
    res.cookie('token', '').json('ok');
})



app.listen(4000);