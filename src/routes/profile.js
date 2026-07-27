const express = require('express');
const profileRouter = express.Router();
const {isAuth , userAuth } = require("../middlewares/auth");

//API's

profileRouter.get("/profile" , userAuth, async (req,res) => {

   try{

    const user = req.User;
    //  // for cookies from server uses res.cookie()

    // const cookies = req.cookies;

    // const {token} = cookies;
    // if(!token) {
    //     throw new Error("Invalid token ");
    // }

    // const decodedMsg = await jwt.verify(token , "Nav@Tinder9353");
    
    // const {_id} = decodedMsg;
    // console.log("Loging In  User is:" + _id);


    // const user = await User.findById(_id);
    // //console.log(cookies);
    res.send(user);

    // const decodedMsg = await jwt.verify(token , "Nav@Tinder9353");
    // console.log(decodedMsg);

   }catch{
    res.status(401).send("Error" + err.message)

   }
     
    


 })





module.exports = profileRouter;