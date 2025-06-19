const crudRepository = require('./crudRepository');
const jwt = require('jsonwebtoken');
const User = require('../schema/userSchema');
require('dotenv').config();

// const { JsonWebTokenError } = require('jsonwebtoken');
const userRepository = {
    ...crudRepository(User),
    
    signUpUser: async function(data){
        const newUser = new User(data);
        await newUser.save();
        return newUser
    },
    getByEmail: async function(email){
        const user = await User.findOne({email});
        return user;
    },
    getByUserName: async function(name){
        const user = await User.find({name}).select('-password');
        return user
    },
    getByToken: async function(token){
    
const tokenSecret = process.env.JWT_SECRET;


  try {
    const decodedToken = jwt.verify(token, tokenSecret);
    const { id } = decodedToken;
    console.log("Decoded admin ID:", id);
    return id;
  } catch (err) {
    console.error("JWT verification failed:", err.message);
    throw err;
  }
}

    

}
module.exports = userRepository;