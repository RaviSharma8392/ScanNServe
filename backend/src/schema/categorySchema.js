const mongoose = require('mongoose');
const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Category name is required'],
        unique: true,
        trim: true,
        lowercase: true
    },
    admin: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'User'
    },
    image: {
        type: String
    }
})
//before importing, convert everything to lowercase
module.exports = mongoose.Model('Category', categorySchema);