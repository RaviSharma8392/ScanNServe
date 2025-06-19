const mongoose = require("mongoose");

const adminSpecificInfoSchema = mongoose.Schema({
  admin: mongoose.Schema.Types.ObjectId,
  categories: [mongoose.Schema.Types.ObjectId],
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
  category: {
    type: Mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  adminSpecificInfo: [adminSpecificInfoSchema],
  availability: { type: Boolean ,
    required: true,
    default: true
  },
});

module.exports = mongoose.model("item", itemSchema);
