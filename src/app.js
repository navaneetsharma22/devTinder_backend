const express = require("express");

const app = express();



// app.use("/", (req, res) => {
//     res.send("Overwrite the default route");
// });

// app.use("/hello", (req, res) => {
//     res.send("hello the default route");
// });// not print /hello/2 because the first route is matched and it will not check for the second route

// app.use("/hello/2", (req, res) => {
//     res.send("abra ka dabra the route");
// });

// app.use("/hello", (req, res) => {
//     res.send("hello the default route");
// });

// app.get("/user", (req,res) =>{
//     //console.log(req.query);
//     console.log(req.query);
//     res.send({
//         name: "John Doe",
//         lastname: "Doe",
//     })
// })

// app.post("/user",(req,res) => {
//     console.log("User created");
//     console.log(req.body);
//     res.send("data successsfully saved to the database ");

// })

// app.delete("/user",(req,res) =>{
//     console.log("User deleted");
//     res.send("data successsfully deleted from the database ");
// })

// //Update user data 
// app.put("/user",(req,res) => {
//     console.log("User updated");
//     res.send("data successsfully updated in the database ");
// })

// app.use("/test", (req, res) => {
//     res.send("Hello World");
// });

// app.use("/dashboard", (req, res) => {
//     res.send("Namste from dashboard")
// });

// app.use("/", (req, res) => {
// //     res.send("Overwrite the default route");
// });//


//18 Middleware and route Handler 
app.use ("/User" ,
    (req,res , next)  => {
    // res.send("Route Handler 1");
    //what happend we did not send any response 
    console.log("Route Handler 1");
    //res.send("Route Handler !!");
    next(); // it will call the next route handler
    response.send("Route Handler 1");// it will not execute because we have already 
    // sent a response in the first route handler.
    e

},
(req,res) => {
    console.log("2nd ROute Handler"); 
    res.send("2nd response ");

}
);





app.listen(5000, () =>{
    console.log("Server is running on port 5000");
});
