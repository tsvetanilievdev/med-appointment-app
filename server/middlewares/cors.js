const cors = () => {

    return (req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); //client
        res.setHeader('Access-Control-Allow-Methods', 'HEAD, OPTIONS, GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        next();
    }
}

module.exports = cors;