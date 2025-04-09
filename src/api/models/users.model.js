const mongoose = require('mongoose');
const hashPassword = require('../utils/password.helper');

const { Schema } = mongoose;

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        avatar: {
            type: String,
            required: false
        },
        rule: {
            type: String,
            //required: true,
            default: 'reader'
        },
        bio: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    });

    userSchema.pre('save', function (next) {
        const user = this;
        if (!user.isModified('password')){ 
            return next();
        };
        const hash = hashPassword.hashPassword(user.password);
        user.password = hash;
        next();
    });

module.exports = mongoose.model('User', userSchema);
