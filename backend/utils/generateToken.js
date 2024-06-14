import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "15d" // 15 days
    })

    res.cookie("jwt", token, {
        maxAge: 1000 * 60 * 60 * 24 * 15, // 15 days in mill seconds
        httpOnly: true, // prevent XSS attacks cross-site scripting attacks
        sameSite: "strict", // prevent CSRF attacks cross-site request forgery attacks
        secure: process.env.NODE_ENV != "development",
    })
};

export default generateTokenAndSetCookie;