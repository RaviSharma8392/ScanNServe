const crudRepository = require("./crudRepository");

const Category = require("../schema/categorySchema");

const propertyRepository = {
  ...crudRepository(Category),
};
module.exports = propertyRepository;
