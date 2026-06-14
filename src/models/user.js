const mongoose  = require('mongoose');
const validator = require('validator');

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
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error("Invalid email address" + value);
            }

        }

    },
    password : {
        type : String,
        required : true,
        minlength : 8,
        validate(value) {
    if(!/^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(value)) {
        throw new Error(
          "Password must be at least 8 characters long and contain at least one letter and one number"
        );
    }
 }},

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
        default : "https://cdn.vectorstock.com/i/500p/46/76/gray-male-head-placeholder-vector-23804676.jpg",
        validate(value) {
            if(!validator.isURL(value)) {
                throw new Error("Invalid photo URL");
            }
        }

    },
    about : {
        type : String,
        default : "This is my about description.",
    },
    skills : {
        type : [String],
        validate(value) {
            if(value.length > 10) {
                throw new Error("Skills should be less than 10");
            }
        }

    }

}, {
    timestamps : true, // it will add createdAt and updatedAt fields in the document
});

//attach jwt token to user model
userSchema.methods.getJWT = async function() {
    const user = this;
    const token = jwt.sign({ _id: user._id}, "Nav@Tinder9353" ,
        {expiresIn : "1d",}
    );
    return token;
};

//campare password add in user Schema 
userSchema.methods.validatePassword = async function (passwordInputByUser ) {
    const user = this ;
    const passwordHash = user.password;


    const ispasswordValid = await  bcrypt.compare(passwordInputByUser, passwordHash);
    return ispasswordValid;
     
}

// const User = mongoose.model('User', userSchema);

// module.exports = User;

// also you right both model and expoet function in one line
module.exports = mongoose.model('User', userSchema);
    