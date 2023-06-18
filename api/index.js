const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const User = require('./models/user');
const Post = require('./models/Post');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const multer = require('multer');
//const uploadMiddleware = multer({ dest: 'uploads/' });
const fs = require('fs');

const salt = bcrypt.genSaltSync(10);
const secret = "76b7u76u7u6bfxnghnchg7yjyujjjy";

const storage = multer.diskStorage({
    destination: './uploads',
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});
const upload = multer({ storage: storage });

dotenv.config();
app.use(cors({ 
    credentials: true, 
    origin:'http://localhost:3000'
}))
app.use(express.json())
app.use(cookieParser());
app.use('/api/uploads', express.static(__dirname + '/api/uploads'));

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

app.post('/post', upload.single('document'), async (req, res) => {
    const { originalname, path } = req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    const newPath = path + '.' + ext;
    fs.renameSync(path, newPath);

    const { token } = req.cookies;
    jwt.verify(token, secret, {}, async (err, info) => {
        if (err) throw err;
        const { title, summary, content } = req.body;
        const postDoc = await Post.create({
            title,
            summary,
            content,
            cover: originalname,
            filepath: path,
            author: info.id,
        });
        res.json(postDoc);
    });

});

// app.put('/post', uploadMiddleware.single('file'), async (req, res) => {
//     //res.json({test:4,filesIs:req.file});
    
//     let newPath = null;
//     if (req.file) {
//         const { originalname, path } = req.file;
//         const parts = originalname.split('.');
//         const ext = parts[parts.length - 1];
//         newPath = path + '.' + ext;
//         fs.renameSync(path, newPath);
//     }

//      const { token } = req.cookies;
//      jwt.verify(token, secret, {}, async (err, info) =>{ 
//          if (err) throw err;
//          const { id, title, summary, content } = req.body;
//          const postDoc = await Post.findById(id);
//          const isAuthor = JSON.stringify(postDoc.author) === JSON.stringify(info.id);
//          if (!isAuthor) {
//             return res.status(400).json('you are not the author');
//         }
//          await postDoc.update({
//             title,
//             summary,
//             content,
//             cover: newPath ? newPath : postDoc.cover,
//          });

//          res.json(postDoc);
//     });

// });

app.get('/post', async (req, res) => {
    res.json(
        await Post.find()
            .populate('author', ['username'])
            .sort({ createdAt: -1 })
            .limit(20)
    );
});

app.get('/post/:id', async (req, res) => {
    const { id } = req.params;
    const postDoc = await Post.findById(id).populate('author', ['username']);
    res.json(postDoc);
})

app.listen(4000);