const express = require("express");

const app = express();

app.use("/test", (req, res) => {
    res.send("Hello World");
});

app.use("/dashboard", (req, res) => {
    res.send("Namste from dashboard")
});


app.listen(5000, () =>{
    console.log("Server is running on port 5000");
});
