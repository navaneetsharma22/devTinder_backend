const express = require('express');
const profileRouter = express.Router();
const {isAuth , userAuth } = require("../middlewares/auth");
const {validateEditProfileData} = require("../utils/validation");

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


 profileRouter.patch("/profile/edit", userAuth, async (req,res) =>{
    try{

      if(!validateEditProfileData(req)) {
        throw new Error("Invalid fields for edit profile");
      }
      const loggedInUser  = req.user;

     // console.log(loggedInUser);  

      Object.keys(req.body).forEach((key) => (loggedInUser[key] = req.body[key]));

      //res.send(`${loggedInUser.firstName} Profile updated successfully`);
     // another way to send data back
      res.json({
        message: `${loggedInUser.firstName} Profile updated successfully`,
        data: loggedInUser,
      })

         
       //save the dat in data base 
      await loggedInUser.save();


    }catch(err){
      res.status(400).send("ERROR" + err.message);


    };


   })





module.exports = profileRouter;