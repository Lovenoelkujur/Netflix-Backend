const userModel = require("../models/userModel");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");


// Login
const Login = async(req, res) => {
    try {
        const {email, password} = req.body;

        // Validation of fields
        if(!email || !password){
            return res.status(401).json({
                success : false,
                message : "Invalid Data !",
            });
        }

        // Validation of user is registered throught email
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(401).json({
                success : false,
                message : "Invalid Email or Password !"
            });
        }

        // Validation of password ( Bcrypt Password to check the password )
        const isMatch = await bcryptjs.compare(password, user.password);
        if(!isMatch){
            return res.status(401).json({
                success : false,
                message : "Invalid Email or Password !"
            });
        }

        // Fetch user ID from DB
        const tokenData = {
            id : user._id
        }

        // Generate Token
        const token = await jwt.sign(tokenData, "mysecretkey", {expiresIn : "1h"});
        
        return res.status(200).cookie("token", token, {httpOnly : true}).json({
            success : true,
            message : `Welcome back ${user.fullName}.`,
            user,
        });
    } 
    catch (error) {
        console.log(error);
    }
}

// Logout
const Logout = async(req, res) => {
    return res.status(200).cookie("token", "", {expiresIn : new Date(Date.now()), httpOnly : true}).json({
        success : true,
        message : "User Logout Successfully."
    });
}

// Register (Signup)
const Register = async(req, res) => {
    try {
        const {fullName, email, password} = req.body;

        if(!fullName || !email || !password){
            return res.status(401).json({
                success : false,
                message : "please provid all the Data !"
            });
        }

        // Validaion for user if aready Registered in DB
        const user = await userModel.findOne({email});
        if(user){
            return res.status(401).json({
                success : false,
                message : "Email is already registered !",
            });
        }

        // Hashed Password
        const hashedPassword = await bcryptjs.hash(password, 16)

        // Create new User and save in DB
        await userModel.create({
            fullName,
            email,
            password : hashedPassword,
        });

        return res.status(201).json({
            success : true,
            message : "Account Created Successfully."
        });
    } 
    catch (error) {
        console.log(error);
    }
}

const userContainer = {
    Register,
    Login,
    Logout,
}

module.exports = userContainer;