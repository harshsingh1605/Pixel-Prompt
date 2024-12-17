import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: "Please fill in all fields" });
        }

        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: "Email already in use" });
        }

        const salt = await bcrypt.genSalt(5);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await userModel.create({
            name,
            email,
            password: hashedPassword,
            creditBalance: 5, // Default credit for a new user
        });

        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

        res.json({
            success: true,
            token,
            user: { name: newUser.name, credits: newUser.creditBalance },
        });
    } catch (error) {
        console.error("Error in registerUser:", error.message);
        res.json({ success: false, message: "Server error" });
    }
};


const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.json({ success: false, message: "Please provide both email and password" });
        }

        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({ success: false, message: "Invalid password" });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

        res.json({
            success: true,
            token,
            user: { name: user.name, credits: user.creditBalance },
        });
    } catch (error) {
        console.error("Error in loginUser:", error.message);
        res.json({ success: false, message: "Server error" });
    }
};
const userCredits = async (req, res) => {
    try {
        const { userId } = req.body;

        const user = await userModel.findById(userId);

        res.json({ success: true, credits: user.creditBalance, user: { name: user.name } });


    } catch (error) {

        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
};



export { registerUser, loginUser, userCredits };
