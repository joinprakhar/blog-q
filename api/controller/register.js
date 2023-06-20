const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);
const User = require('../models/user');

const register = async (req, res) => {
    const { fName,email, password } = req.body
    try {
        const userDoc = await User.create({
            name: fName,
            email,
            password: bcrypt.hashSync(password, salt),
        })
        res.json(userDoc)
    } catch (err) {
        res.status(400).json(err);
    }
}
module.exports = register;