const express = require("express");
const connectDB = require("./config/database");
const validator = require("validator");
 const { userAuth } = require("./middlewares/auth");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cookieParser());

const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const connectionRouter = require("./routes/requestConnection");
const user = require("./models/user");
app.use(express.json());


app.use("/" , authRouter);
app.use("/" , profileRouter);
app.use("/" , connectionRouter);







 

app.get("/user", userAuth, async (req, res) => {
    const userEmail = req.body.emailid;
    try{
        const users = await User.find({ emailid: userEmail });
        if(users.length === 0) {
             res.status(404).send("User not found");
        }
        else{
             res.send(users);
        }
        
      
        
    }
    catch(err){
        res.status(400).send("Something went wrong");
    }
    

});


//find all User 

app.get("/feed" , async(req,res) => {
    try{
        const users = await User.find({});
        res.send(users);
    
    }
        catch(err){ 
            res.status(400).send("Something went wrong");
        }

})

//Delete API findbyidanddelet
 

app.delete("/user", async (req,res) => {
    const userId = req.body.userId;
    try{
        const user = await  User.findByIdAndDelete(userId);
        if(!user) {
            res.status(404).send("User not found");
        }else{
            res.send("User deleted successfully");
        }

    }catch(err){
        res.status(400).send("Something went wrong ");

    }
})


app.patch("/user/:userId" , async (req,res) => {
    const userId = req.params?.userId;
    const data = req.body;

   


    try{

    const ALLOWED_UPDATES = ["userId" , "photoUrl", "about" , "gender" , "age", "skills"];


    const isUpdateAllowed  = Object.keys(data).every((k) => 
    ALLOWED_UPDATES.includes(k)
   );

   if(!isUpdateAllowed) {
    throw new Error  ("Updated not allowed")
   }

   if(data?.skills.lenght >10) {
    throw new Error("Skills should be less than 10");
   }

        await User.findByIdAndUpdate({_id : userId},data, { runValidators: true });
        //runValidators : true; // it will run the validators defined in the schema while updating the data
        
        res.send("User updated successfully");

    }catch(err) {
        res.status(400).send("Something went wrong"  + " " + err.message);
    }


})

connectDB()
    .then(() => {
        console.log("Database Connected");
        app.listen(4000 , () => {
            console.log("Server is running on port 4000");
        });
    })
    .catch((err) => {
        console.error("Database Connection Failed");
    });
    




