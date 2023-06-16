const jwt = require('jsonwebtoken');

module.exports = () => (req, res, next) => {
    const token = req.headers.authorization;

    if (!token || !token.startsWith('Bearer ')) {
        res.status(400).json({ message: 'Missing token', success: false });
    }
};
