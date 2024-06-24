import mongoose from "mongoose";

const passwordManagerSchema = new mongoose.Schema({
    wesbiteURL: {
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

const PasswordManager = mongoose.model("PasswordManager", passwordManagerSchema);

export default PasswordManager;