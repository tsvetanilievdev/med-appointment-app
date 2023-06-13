const router = require('express').Router();

const register = require('../services/userService');

router.post('/register', async (req, res) => {
    try {
        const data = await register(req.body);
        res.status(200).json({
            message: 'User is created successfully!',
            success: true,
            ...data,
        });
    } catch (error) {
        console.log('error', error);
        res.status(500).json({
            message: 'Error in creating user!',
            success: false,
            error,
        });
    }
});

router.post('/login', async (req, res) => {
    try {
    } catch (error) {}
});

module.exports = router;
