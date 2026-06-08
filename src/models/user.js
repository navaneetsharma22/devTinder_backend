const mongoose  = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true,
    },
    lastName : {
        type : String,
        
    },

    emailid :{
        type : String,
        required : true,
        unique : true,

    },

    age : {
        type: Number,
    },

    gender: {
        type: String,
    },
    photoUrl : {
        type : String,

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
