const isAuth = (req,res, next) => {
    const token = "navaneet";
    const isAuth = token === "navaneet";
    if (!isAuth){
        return res.status(401).send("Unauthorized Access request");


    }else{
        next();
    }
};


const userAuth =(req,res, next) => {
    const token = "neet";
    const isAuth = token === "neet";
    if (!isAuth){
        return res.status(401).send("Unauthorized Access request");


    }else{
        next();
    }
};

module.exports = {
    isAuth,
    userAuth
}