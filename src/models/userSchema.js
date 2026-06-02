const mongoose  = rquire('mongoose');

const UserSchema =  mongoose.Schema({
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

module.exports = mongoose.model('User', UserSchema);