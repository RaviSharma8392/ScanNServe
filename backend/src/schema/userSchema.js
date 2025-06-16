const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
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
        unique: [true, 'Email already exists'],
        match: [ // eslint-disable-next-line no-useless-escape
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please fill a valid email address']
    },
    password: {
      type: String,
      required: [true, 'Password is required']
    },
    mobileNo: {
        type: Number,
        required: [true, 'Mobile Number is required'],
        match: [
    /^[6-9]\d{9}$/,
    'Please enter a valid 10-digit Indian mobile number'
  ]
}
})

userSchema.pre('save', function(){
  if(this.isNew){
    const user = this;
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
const hashedPassword = bcrypt.hashSync(user.password, salt);
user.password = hashedPassword;
  }
})

module.exports = mongoose.model('User',userSchema);
