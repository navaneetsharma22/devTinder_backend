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

const userModel = mongoose.model('User', UserSchema);

module.exports = userModel;
