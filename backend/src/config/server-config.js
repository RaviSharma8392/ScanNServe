const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.port;
const JWTSecret = process.env.JWT_SECRET;
const JWT_EXPIRY = process.env.JWT_EXPIRY
module.exports = {PORT,JWTSecret,JWT_EXPIRY}