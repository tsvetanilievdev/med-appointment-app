const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

async function register(data) {
    const existingUser = await checkUserExists();
    if (existingUser) {
        throw new Error('User with the same email already exists!');
    }

    const hashedPass = await hashPassword(data.password);

    const user = await User.create({
        name: data.name,
        email: data.email,
        password: hashedPass,
    });
    return dataToReturn(user);
}
async function login(data) {
    const existingUser = await checkUserExists();
    if (!existingUser) {
        throw new Error('Incorrect credentials - email');
    }

    const matchPasswords = await comparePassword(
        data.password,
        existingUser.password
    );

    if (matchPasswords) {
        return dataToReturn(existingUser);
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

async function checkUserExists(email) {
    return User.findOne({ email }).exec();
}

async function hashPassword(password) {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
}

async function comparePassword(password, userHashedPassword) {
    return bcrypt.compare(password, userHashedPassword);
}

function dataToReturn(user) {
    return {
        data: {
            user: {
                email: user.email,
                name: user.name,
                id: user._id,
            },
        },
        token: createToken(user),
    };
}
