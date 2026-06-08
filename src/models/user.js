const mongoose  = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true,
        minlength : 3,
        maxlength : 30,
        trim : true, // it will remove the extra space from the string
    },
    lastName : {
        type : String,
        //required : true,
        minlength : 3,
        maxlength : 30,
        trim : true, // it will remove the extra space from the string
    },

    emailid :{
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true, 

    },

    age : {
        type: Number,
        min:18,
       
        } ,
     

    gender: {
        type: String,
         validate (value) {
            if(!["male", "female", "other"].includes(value)){
                throw new Error("Gender must be male , female or other");
            }
        }
    },
    photoUrl : {
        type : String,
        default : "https://cdn.vectorstock.com/i/500p/46/76/gray-male-head-placeholder-vector-23804676.jpg"

    },
    about : {
        type : String,
        default : "This is my about description.",
    },
    skills : {
        type : [String],

    }

});

// const User = mongoose.model('User', userSchema);

// module.exports = User;

// also you right both model and expoet function in one line
module.exports = mongoose.model('User', userSchema);
