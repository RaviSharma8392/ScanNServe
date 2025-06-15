const mongoose = require("mongoose");
const itemSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true,'Item name is required'],
        trim: true,
        lowecase: true,
        minLength: 2,
        maxLength: 50
    },
    category: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    admin: {
        type: [Mongoose.Schema.Types.ObjectId]
    },
    options: {
        type: [Object]
    }
});

module.exports = mongoose.model("item", itemSchema);
