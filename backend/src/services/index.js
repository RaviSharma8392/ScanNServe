const signUpService = require('./signUpService');
const {signInService,signOutService} = require('./auth');
const {addPropertyService} = require('./propertyControl');
module.exports = {signUpService,signInService,signOutService,addPropertyService};