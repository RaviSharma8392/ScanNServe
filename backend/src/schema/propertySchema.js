const mongoose = require('mongoose');
const propertySchema = mongoose.Schema({
name: {
    type: String,
    required: [true,'Property name is required'],
    unique: [true, 'Property name must be unique—add a prefix or suffix if needed'],
    minLength: 2,
    maxLength: 50
},
admin:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
address: {
    type: String,
    required: [true,'Property name is required'],
    minLength:2,
    maxLength: 100
},
colorTheme: {
    type: [String],
    default: ['Orange', 'Yellow']
},
callingNumber: {
    type: Number,
    required: [true, 'Calling Number is required'],
    maxLength: 10
},
whatsappNumber: {
    type: Number,
    maxLength: 10
},
isBilled: {
    type: Boolean,
    default: false
}

})

module.exports = mongoose.model('Property',propertySchema);