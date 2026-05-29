const isAuth = (req,res, next) => {
    const token = "navaneet";
    const isAuth = token === "navaneet";
    if (!isAuth){
        return res.status(401).send("Unauthorized Access request");


    }else{
        next();
    }
};

module.exports = {
    isAuth,
}