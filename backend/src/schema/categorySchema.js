const mongoose = require('mongoose');
const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Category name is required'],
        unique: true,
        trim: true,
        lowercase: true
    },
    admin: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
})

const Category=mongoose.model('Category', categorySchema)
module.exports = Category