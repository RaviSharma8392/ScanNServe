const {userRepository} = require('../repositories');
const signUpService = async (data) => {
try{
    
const newUser = await userRepository.signUpUser(data);
return newUser;
}
catch(error){
console.log("User service error", error);
res.json({error});
}
}
module.exports = signUpService;