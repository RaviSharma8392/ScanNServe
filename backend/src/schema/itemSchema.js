const mongoose = require("mongoose");

const propertySpecificInfoSchema = mongoose.Schema({
  property: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Property'
  },
  categories: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Category'
  },
  pricing: [
    {
      label: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
  availability: { type: Boolean ,
    required: true,
    default: true
  }
});
const itemSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Item name is required"],
    trim: true,
    lowecase: true,
    minLength: 2,
    maxLength: 50,
  },
  propertySpecificInfo: [propertySpecificInfoSchema]
});

module.exports = mongoose.model("item", itemSchema);
