const validator = require("validator");

const validateSingUpData = (req) => {
    const {firstName, lastName, emailid, password} = req.body;
    if(!firstName || !lastName ) {
        throw new Error("First name and last name are required");
    }else if (!validator.isEmail(emailid)){
        throw new Error("Invalid email address");

    }else if (!validator.isStrongPassword(password)) {
        throw new Error("Password is not strong enough");
    }
}

const validateEditProfileData = (req) => {
    const allowesEditFields = ["firstName", "lastName", "photoUrl" ,"age" , "gender" , "skills" , "about" ];

    const isEditAllowed = Object.keys(req.body).every((field) =>
        allowesEditFields.includes(field)
);

return isEditAllowed ; 
}



module.exports = {
    validateSingUpData,
    validateEditProfileData

}