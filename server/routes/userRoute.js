const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const router = express.Router();

router.post('/register', async (req, res) => {

    try {
        const existingUser = User.findOne('email', req.body.email)
        if(existingUser){
            return res.status(400).send({message: "User with the same email already exists!", success: false})
        }

        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(password, salt);


        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPass
        })
        res.status(200).send({message: "User is created successfully!", success: true});
    } catch (error) {
        res.status(500).send({message: "Error in creating user!", success: false, error})
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