import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
    // createdAt, updatedAt => message.createdAt: 15:30
}, {timestamps: true});

const User = mongoose.model("User", userSchema);

export default User;