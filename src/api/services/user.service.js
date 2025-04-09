const UserModel = require('../models/users.model');

// get user by email
const getUserByEmail = async (email) => {
    const user = await UserModel.findOne({ email });
    return user;
}

// get user by id
const getUserById = async (id) => {
    const user = await UserModel.findById(id);
    return user;
}

// get user by name
const getUserByName = async (name) => {
    const user = await UserModel.findOne({ name });
    return user;
}

// create user
const createUser = async (data) => {
    const userExists = await getUserByEmail(data.email);
    if (userExists) {
        throw new Error('User already exists');
    }
    const user = await UserModel.create(data);
    return user;
}

// update user
const updateUser = async (id, data) => {
    const userExists = await getUserById(id);
    if (!userExists) {
        throw new Error('User not found');
    }
    const userUpdated = await UserModel.findByIdAndUpdate(id, data, { new: true });
    return userUpdated;
}

// delete user
const deleteUser = async (id) => {
    const userExists = await getUserById(id);
    if (!userExists) {
        throw new Error('User not found');
    }
    const userDeleted = await UserModel.findByIdAndDelete(id);
    return "User successfully deleted";
}

module.exports = {
    getUserByEmail,
    getUserById,
    getUserByName,
    createUser,
    updateUser,
    deleteUser
}
