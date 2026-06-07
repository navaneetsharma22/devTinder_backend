const mongoose  = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
    },
    lastName : {
        type : String,
    },

    emailid :{

    },

    age : {
        type: Number,
    },

    gender: {
        type: String,
    }

});

// const User = mongoose.model('User', userSchema);

// module.exports = User;

// also you right both model and expoet function in one line
module.exports = mongoose.model('User', userSchema);
