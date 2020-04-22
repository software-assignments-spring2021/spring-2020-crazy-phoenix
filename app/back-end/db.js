const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
//    username: String,
    email: String,
    firstName: String,
    lastName: String
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);