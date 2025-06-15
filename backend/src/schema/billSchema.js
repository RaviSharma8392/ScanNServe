const mongoose = require('mongoose');
const billSchema = mongoose.Schema({
    propertyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Property'
    },
    billingDate: {
        type: Date
    },
    billingExpiry: {
        type: Date
    },    
},{ timestamps: true })

module.exports = mongoose.model('billModal',billSchema);