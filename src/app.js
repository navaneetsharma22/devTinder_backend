const express = require("express");

const app = express();



// app.use("/", (req, res) => {
//     res.send("Overwrite the default route");
// });

app.use("/hello", (req, res) => {
    res.send("hello the default route");
});// not print /hello/2 because the first route is matched and it will not check for the second route

app.use("/hello/2", (req, res) => {
    res.send("abra ka dabra the route");
});

// app.use("/hello", (req, res) => {
//     res.send("hello the default route");
// });

app.use("/test", (req, res) => {
    res.send("Hello World");
});

app.use("/dashboard", (req, res) => {
    res.send("Namste from dashboard")
});

app.use("/", (req, res) => {
    res.send("Overwrite the default route");
});//


app.listen(5000, () =>{
    console.log("Server is running on port 5000");
});
