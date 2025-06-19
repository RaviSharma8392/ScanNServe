const crudRepository = require("./crudRepository");

const Property = require("../schema/propertySchema");

const propertyRepository = {
  ...crudRepository(Property),
};
module.exports = propertyRepository;
