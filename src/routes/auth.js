const express = require("express");
const authRouter = express.Router();
const {validateSingUpData} = require("../utils/validation")
const bcrypt = require("bcrypt");
const User = require("../models/user");
//const auth = require("../middlewares/auth");

//API
authRouter.post("/singup" ,  async (req,res) => {

    try{
        //validate the data 
    validateSingUpData(req);

    const { firstName, lastName, emailid, password } = req.body;
    //Encrypt the password
    const passwordHash = await bcrypt.hash(password, 10);
    console.log(passwordHash);

    //console.log(req.body);

   // now insert data in database also creating a new instance of User Model 
    const user=  new User({
        firstName,
        lastName,
        emailid,
        password : passwordHash,
    });
    await user.save();
    res.send("User created successfully");
   
    }catch(err){
        res.status(400).send("Error " + err.message);
    }
    
})


authRouter.post("/Login" , async (req,res) => { 
    try{
        const {emailid , password} = req.body;
        //validation if email is valide or not 
        if(!validator.isEmail(emailid)){
            throw new Error("Invalid email address");
        }

        //find emailid in database
        const user = await User.findOne({ emailid : emailid });
        if(!user){
            throw new Error("User not found in DB ");
        }

        // now using bcrypt to compare the password
        const isPasswordValid = await user. validatePassword(password);
        if(isPasswordValid) { 
            //Create jwt token and send to client
            const token = await user.getJWT();

            //Addthe token to cookies and send the response back the user 
            res.cookie("token" , token,{
                expires : new Date(Date.now() + 8 * 3600000), // 8 hours
                httpOnly : true, // it will prevent the client from accessing the cookie
                //secure : false, // it will prevent the cookie from being sent over http
            });


            res.send("Login successful");
        } else {
            throw new Error("Invalid password");
        }

    }catch(err) {
        res.status(400).send("Error" + err.message);

    }

});



module.exports = authRouter;