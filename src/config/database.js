const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect(
        "mongodb://localhost:27017/devconnector"
    );


};

connectDB()
    .then(() =>{
         console.log("MongoDB Connected...")
    }
   
     )

     .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
     })


