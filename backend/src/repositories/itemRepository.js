const crudRepository = require("./crudRepository");
const Item = require('../schema/itemSchema');
const itemRepository = {
...crudRepository(Item),
toggleItem: async (data) => {

},
updatePrice: async(data) => {

}
}
module.exports = itemRepository;