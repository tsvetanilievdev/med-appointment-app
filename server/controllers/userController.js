const router = require('express').Router();

const { register, login } = require('../services/userService');

router.post('/register', async (req, res) => {
    try {
        const data = await register(req.body);
        res.status(200).json({
            message: 'User is created successfully!',
            success: true,
            ...data,
        });
    } catch (error) {
        res.status(400).json({
            message: error.message,
            success: false,
        });
    }
});

router.post('/login', async (req, res) => {
    try {
        const data = await login(req.body);
        res.status(200).json({
            message: 'User is logged in successfully!',
            success: true,
            ...data,
        });
    } catch (error) {
        res.status(error.code).json({
            message: error.message,
            success: false,
        });
    }
});

module.exports = router;
