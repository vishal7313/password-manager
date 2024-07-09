import mongoose from "mongoose";

const passwordManagerModel = new mongoose.Schema({
    clientID: {
        type: String,
        required: true
    },
    wesbiteURL: {
        type: String,
        required: true
    },
    websiteName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    // createdAt, updatedAt => message.createdAt: 15:30
}, {timestamps: true});

const passwordManagerSchema = mongoose.model("PasswordManager", passwordManagerModel);

export default passwordManagerSchema;