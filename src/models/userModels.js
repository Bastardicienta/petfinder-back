const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        firstName: {type:String, required: true},
        lastName: {type:String, required: true},
        email: {type:String, required: true, unique: true},
        phone: {type:String, required: true},
        password: {type:String, required: true},
        isAdmin: {type:Boolean, default: false, required: true},
    },
    {
        timestamps: true,
    }
)

const User = mongoose.model('User', userSchema);
module.exports = userSchema;
