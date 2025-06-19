const {ServerConfig} = require('../config');
const jwt = require('jsonwebtoken');
const createJWT = async (payload) => {

    const token = await jwt.sign(payload,ServerConfig.JWTSecret,{expiresIn: ServerConfig.JWT_EXPIRY});
    
    return token;
}
module.exports = createJWT;