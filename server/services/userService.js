const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

async function register(data) {
    const existingUser = await User.findOne({ email: data.email }).exec();
    if (existingUser) {
        return res.status(400).json({
            message: 'User with the same email already exists!',
            success: false,
        });
    }

    const password = data.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);

    const user = await User.create({
        name: data.name,
        email: data.email,
        password: hashedPass,
    });
    const token = createToken(user);
    return {
        data: { user: { email: user.email, name: user.name, id: user._id } },
        token,
    };
}

module.exports = register;

function createToken(user) {
    const payload = {
        id: user.id,
        email: user.email,
    };
    return jwt.sign(payload, process.env.JWT_SECRET);
}
