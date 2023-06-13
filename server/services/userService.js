const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

async function register(data) {
    const existingUser = await User.findOne({ email: data.email }).exec();
    if (existingUser) {
        throw new Error('User with the same email already exists!');
    }

    const password = data.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);

    const user = await User.create({
        name: data.name,
        email: data.email,
        password: hashedPass,
    });
    return {
        data: { user: { email: user.email, name: user.name, id: user._id } },
        token: createToken(user),
    };
}
async function login(data) {
    const existingUser = await User.findOne({ email: data.email }).exec();
    if (!existingUser) {
        throw new Error('Incorrect credentials - email');
    }

    const matchPasswords = await bcrypt.compare(
        data.password,
        existingUser.password
    );
    if (matchPasswords) {
        return {
            data: {
                user: {
                    email: existingUser.email,
                    name: existingUser.name,
                    id: existingUser._id,
                },
            },
            token: createToken(existingUser),
        };
    } else {
        throw new Error('Incorrect credentials - wrong pass');
    }
}

module.exports = { register, login };

function createToken(user) {
    const payload = {
        id: user.id,
        email: user.email,
    };
    return jwt.sign(payload, process.env.JWT_SECRET);
}
