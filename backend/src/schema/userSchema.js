const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
     name: {
        type: String,
        required: [true, 'Name is required'],
        minLength: 2,
        maxLength: 50,
        match: [
             // eslint-disable-next-line no-useless-escape
            /^[a-zA-Z\s]+$/,
    'Name can only contain letters and spaces']
     },
    email: {
        type: String,
        required: [true,'Email is required'],
        unique: true,
        match: [ // eslint-disable-next-line no-useless-escape
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please fill a valid email address']
    }
   
})

module.exports = mongoose.model('User',userSchema);