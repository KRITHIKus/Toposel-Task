const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User"); 

const JWT_SECRET = process.env.JWT_SECRET; 

const registerUser = async (req, res) => {
    try {
        const { username, email, password, fullName, gender, dob, country } = req.body;

        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            return res.status(400).json({ message: "Username or Email already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            fullName,
            gender,
            dob,
            country,
        });

        await newUser.save();

        res.status(201).json({ message: "User registered successfully!" });
    } catch (error) {
        console.error(" Registration Error:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1h" });

        res.json({ message: "Login successful", token });
    } catch (error) {
        console.error(" Login Error:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};



const searchUser = async (req, res) => {
    try {
        const { query } = req.query;

        if (!query) {
            return res.status(400).json({ message: "Provide a username or email to search" });
        }

        const user = await User.findOne({
            $or: [{ username: query }, { email: query }],
        });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json({
            message: "User found",
            user: {
                username: user.username,
                email: user.email,
                fullName: user.fullName,
                gender: user.gender,
                dob: user.dob,
                country: user.country,
            },
        });
    } catch (error) {
        console.error("Error searching user:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = { registerUser, loginUser, searchUser };

