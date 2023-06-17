const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

async function register(data) {
    const existingUser = await checkUserExists(data.email);
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
    const existingUser = await checkUserExists(data.email);
    if (!existingUser) {
        const error = new Error('Incorrect credentials - user does not exist');
        error.code = 401;
        throw error;
    }

    const matchPasswords = await comparePassword(
        data.password,
        existingUser.password
    );

    if (!matchPasswords) {
        const error = new Error('Incorrect credentials - wrong password');
        error.code = 401;
        throw error;
    }

    return dataToReturn(existingUser);
}

async function getLeanUserById(id) {
    return User.findById(id).select('-password -createdAt -updatedAt').exec();
}

function createToken(user) {
    const payload = {
        id: user.id,
    };
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '12h' });
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
        user: {
            email: user.email,
            name: user.name,
            id: user._id,
        },
        token: createToken(user),
    };
}

module.exports = { register, login, getLeanUserById };
