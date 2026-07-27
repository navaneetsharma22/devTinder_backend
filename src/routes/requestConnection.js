const express = require('express');

const connectionRouter = express.Router();
const {isAuth , userAuth } = require("../middlewares/auth");

connectionRouter.post("/sendconnection", userAuth,async (req, res) => {

    //find who is sending the connection request
    const user = req.User;
    console.log("Connection Request Sent");
    res.send( user.firstName + "Sendin the Connection Request ");
}); 



module.exports = connectionRouter;