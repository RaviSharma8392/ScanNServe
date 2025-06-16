const crudRepository = require('./crudRepository');
const User = require('../schema/userSchema');
const userRepository = {
    ...crudRepository(User),
    signUpUser: async function(data){
        const newUser = new User(data);
        await newUser.save();
        return newUser
    },
    getByEmail: async function(email){
        const user = await User.findOne(email);
        return user;
    },
    getByUserName: async function(name){
        const user = await User.find({name}).select('-password');
        return user
    }

}
module.exports = userRepository;