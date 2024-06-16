const userModel = require("../models/userModel");
const bycrypt = require("bcrypt");

const Register = async(req, res) => {
    try {
        const {fullName, email, password} = req.body;

        if(!fullName || !email || !password){
            return res.status(401).json({
                success : false,
                message : "please provid all the Data !"
            })
        }

        // Validaion for user if aready Registered in DB
        const user = await userModel.findOne({email});
        if(user){
            return res.status(401).json({
                success : false,
                message : "Email is already registered !",
            })
        }

        // Hashed Password
        const hashedPassword = await bycrypt.hash(password, 16)

        // Create new User and save in DB
        await userModel.create({
            fullName,
            email,
            password : hashedPassword,
        })

        return res.status(201).json({
            success : true,
            message : "Account Created Successfully."
        })
    } 
    catch (error) {
        console.log(error);
    }
}

module.exports = Register;