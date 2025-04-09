const UserModel = require('../models/users.model');
const { getUserByEmail, getUserById, getUserByName } = require('./user.service');
const {decryptPassword} = require('../utils/password.helper');

// login user
const login = async (data) => {
    const user = await getUserByEmail(data.email);
    if (!user) {
        throw new Error('Invalid email or password');
    }

    if (!decryptPassword(user.password, data.password)) {
        throw new Error('Invalid email or password');
    }
    
    return user;
}

// register user
const register = async (data) => {
    console.log(data);
    const userEmail = await getUserByEmail(data.email);
    const userName = await getUserByName(data.name);
    if (userEmail) {
        throw new Error('Email already exists');
    }
    if (userName) {
        throw new Error('Username already exists');
    }
    const newUser = await UserModel.create(data);
    return newUser;
}

module.exports = {
    login,
    register
}
