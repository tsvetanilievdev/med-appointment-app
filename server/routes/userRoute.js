const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const existingUser = await User.findOne({'email': req.body.email}).exec()
        if(existingUser){
            return res.status(400).json({message: "User with the same email already exists!", success: false})
        }

        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(password, salt);


        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPass
        });

        res.status(200).json({message: "User is created successfully!", success: true, data: {user: {email: user.email, name: user.name}}});
    } catch (error) {
        console.log('error', error)
        res.status(500).json({message: "Error in creating user!", success: false, error})
    }
})

router.post('/login', async (req, res) => {

    try {
        const password = req.body.password;
        bcrypt.compare()
        
    } catch (error) {
        
    }
})

module.exports = router;