const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const uploadMiddleware = multer({ dest: 'uploads/' });

const login = require('./controller/login');
const profile = require('./controller/profile');
const logout = require('./controller/logout');
const register = require('./controller/register');
const create = require('./routes/create')
const update = require('./routes/update')
const readPost = require('./routes/read')
const postId = require('./routes/postId')
const deletePost = require('./routes/deletePost')




dotenv.config();
app.use(cors({ 
    credentials: true, 
    origin:'http://localhost:3000'
}))
app.use(express.json())
app.use(cookieParser());
app.use('/api/uploads', express.static(__dirname + '/api/uploads'));

mongoose.connect(process.env.MONGO_URL)

app.post('/register', register)
app.post('/login', login)
app.get('/profile', profile )
app.post('/logout', logout)

app.post('/post', uploadMiddleware.single('file'), create );
app.put('/post/', uploadMiddleware.single('file'), update );
app.delete('/post', uploadMiddleware.single('file'), deletePost );
app.get('/post', readPost);
app.get('/post/:id', postId )

app.listen(4000);