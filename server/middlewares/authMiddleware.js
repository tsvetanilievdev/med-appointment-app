const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
    const rawToken = req.headers.authorization;
    if (!rawToken || !rawToken.startsWith('Bearer ')) {
        return res
            .status(401)
            .json({ message: 'Auth token is expired!!!', success: false });
    }
    const token = rawToken.split('Bearer ')[1];
    try {
        const decoded = await verifyToken(token);
        req.body.userId = decoded.id;
        next();
    } catch (error) {
        res.status(error.code).json({ message: error.message });
    }
};

async function verifyToken(token) {
    return new Promise((res, rej) => {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                rej({
                    message: 'Auth token is expired',
                    code: 401,
                    error: err,
                });
            }
            res(decoded);
        });
    });
}
