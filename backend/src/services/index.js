const signUpService = require("./signUpService");
const { signInService, signOutService } = require("./auth");
const { addPropertyService } = require("./propertyControl");
const {
  addMenuItemService,
  deleteMenuItemService,
  updateMenuItemService,
  toggleMenuItemService,
} = require("./menuControl");

module.exports = {
  signUpService,
  signInService,
  signOutService,
  addPropertyService,
  addMenuItemService,
  deleteMenuItemService,
  updateMenuItemService,
  toggleMenuItemService,
};
