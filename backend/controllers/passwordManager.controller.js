import bcrypt from "bcryptjs";
import PasswordManager from "../models/passwordManager.model.js";

export const passwordManager = async (req, res) => {
    try {
        const {wesbiteURL, username, password } = req.body;

        // HASH PASSWORD HERE
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newPassword = new PasswordManager({
			wesbiteURL,
			username,
			password: hashedPassword
		});

        if (newPassword) {
			await newPassword.save();

			res.status(201).json({
				_id: newPassword._id,
				wesbiteURL: newPassword.wesbiteURL,
				username: newPassword.username
			});
		} else {
			res.status(400).json({ error: 'Invalid password data' });
		}
    } catch (error) {
        console.log('Error in adding new password controller', error.message);
		res.status(500).json({ error: 'Internal Server Error' });
    }
}