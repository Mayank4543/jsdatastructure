import User from "../models/User.js";
import { generateToken } from "../utils/jwt.js";

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please provide all required details"
            })
        }
        const userExist = await User.findOne({ email })
        if (userExist) {
            return res.status(400).json({
                success: false,
                message: "User Exist already"
            })
        }
        const user = await User.create({
            name,
            email,
            password
        })
        const token = generateToken(user._id)
        return res.status(201).json({
            success: true,
            data: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                token
            },
            message: "User Registered  Successfully "
        })
    } catch (error) {
        console.error('Register error:', error);
       return res.status(500).json({
            success: false,
            message: "Server errron during registration",
            error: error.message
        })
    }
}
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please Provide all required  details"
            })
        }
        const user = await User.findOne({ email }).select('+password')
        if (!user) {
           return res.status(401).json({
                success: false,
                message: "Invalid credentials"
            })
        }
        const isPasswordMatch = await user.comparePassword(password);
        if (!isPasswordMatch) {
          return  res.status(401).json({
                success: false,
                message: "Incorrect Password "
            })
        }
        const token = generateToken(user._id);
        return res.status(200).json({
            success: true,
            message: "Login Successfully",
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            token
        })
    } catch (error) {
        console.error("Login error", error);
        return res.status(500).json({
            success: false,
            message: "Server  error durring Login",
            error: error.message
        })
    }
}
export const getme = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select('-password');

        return res.status(200).json({
            success: true,
            data: user
        });
    } catch (error) {
        console.error('Get Me Error:', error);
        return res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    }
}
export const logout = async (req, res) => {
    try {
        return res.status(200).json({
            success: true,
            message: "Logout SuccessFully",
            data: {}
        })

    } catch (err) {
        console.log("logout Error", err)
        return res.status(500).json({
            success: false,
            message: 'server error '
        })
    }
}          