import bcrypt from "bcryptjs";
import passwordManagerSchema from "../models/passwordManager.model.js";
import isUrl from 'is-url';

export const passwordManager = async (req, res) => {
    try {
        const {clientID, wesbiteURL, websiteName, username, password } = req.body;

		if (!isUrl(wesbiteURL)) {
			return res.status(400).json({ error: 'Invalid website URL.' });
		}

		if (!username || !websiteName || !password) {
			return res.status(400).json({ error: 'One for more field is missing data.' });
		}

        // HASH PASSWORD HERE
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newPassword = new passwordManagerSchema({
			clientID,
			wesbiteURL,
			websiteName,
			username,
			password: hashedPassword
		});

        if (newPassword) {
			await newPassword.save();

			res.status(201).json({
				_id: newPassword._id,
				clientID: newPassword.clientID,
				wesbiteURL: newPassword.wesbiteURL,
				websiteName: newPassword.websiteName,
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

export const getPassword = async (req, res) => {
    try {
        const incomes = await passwordManagerSchema.find().sort({createdAt: -1});
        res.status(200).json(incomes);
    } catch (error) {
		res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const deletePassword = async (req, res) => {
    const {clientID} = req.params;

    passwordManagerSchema.findByIdAndDelete(clientID)
		.then(() => {
			res.status(200).json({ message: "Password deleted successfully" });
		})
		.catch((error) => {
			res.status(500).json({ error: "Internal Server Error" }); 
		})
}