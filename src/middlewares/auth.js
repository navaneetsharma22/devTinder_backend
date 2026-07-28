
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const userAuth = async (req,res, next) => {

    try{

        const {token} = req.cookies;
        if(!token){
            throw new Error("No token provided");
        }

        const decodedObj = await jwt.verify(token, "Nav@Tinder9353");
        
        const {_id} = decodedObj;
        const user = await User.findById(_id);
        if(!user){
            throw new Error("User not found");
        }

        req.user = user;

        next();

    }catch(err){
        res.status(401).send("Error" + err.message)
    }
    



    
};

module.exports = {
    
    userAuth
}