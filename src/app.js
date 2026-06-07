const express = require("express");
 const connectDB = require("./config/database");
 const User = require("./models/userSchema");

const app = express();

const {isAuth , userAuth } = require("./middlewares/auth");




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
// app.use ("/User" ,
//     (req,res , next)  => {
//     // res.send("Route Handler 1");
//     //what happend we did not send any response 
//     console.log("Route Handler 1");
//     //res.send("Route Handler !!");
//     next(); // it will call the next route handler
//     response.send("Route Handler 1");// it will not execute because we have already 
//     // sent a response in the first route handler.
//     e

// },
// (req,res) => {
//     console.log("2nd ROute Handler"); 
//     res.send("2nd response ");

// }
// );


//now we add four route handler in one route
// app.use("/User" , (req,res , next ) => {
//     console.log("Route Handler 1");
//     next();

//     //res.send("Route Handler 1");
// },
// (req,res , next) => {
//     console.log("Route Handler 2");
//    // res.send("Route Handler 2");
//    next();
// },

// (req,res , next) => {
//     console.log("Route Handler 3");
//    // res.send("Route Handler 3");
//     next();

// },
// (req,res , next ) => {
//     console.log("Route Handler 4");
//     //res.send("Route Handler 4");
//     next();


// },
// (req,res ) => {
//     console.log("Route Handler 5");
//     res.send("Route Handler 5");
// }
// );

// // Another Method of define multiple route handler 
// app.use("/" , (req,res,next ) =>{
//     console.log("Middleware 1");
//    // res.send("Middleware 1");
//     // next() is used to call the next middleware or route handler in the stack
//     next();
// });
// app.get ("/Users" ,(req,res, next) => {
//     console.log("Route Handler 1");
//     //res.send("Route Handler 1");
//     next();

// });

// app.get("/Users" , (req,res,next ) => {
//     console.log("Route Handler 2");
//     res.send("Route Handler 2");
// })

// creating both individual and multiple route handler in the same route



// app.get("/admin/getAllData" , (req,res) => {
//     //logic of cheaking if the request is auth 
//     const token = "navaneet";

//     const isAuth  = token === "navaneejjt";
//     if (isAuth){
         
//     console.log("All Dta ")
//     res.send("All Data sent ")
//     }else{
//         res.status(401).send("Unauthorized");
        
//     }
   
// });

// app.get("/admin/deleteUser" , (req,res) => {

//     //logic for checking AUth user 
//     console.log("USer deleted ")
//     res.send("All Data Delete ")

// })


//add middleware on /admin whem adin route hit or call or 
// sub route of admin then this middleware will execute
// app.use("/admin", (req,res,next) => {
//     console.log("Admin Middleware");
//     const token = "xyz55";
//     const isAuth = token === "xyz";
//     if (!isAuth) {
//         res.status(401).send("Unauthorized");
//     }else{
//         next();
//     };
// });

// app.use("/admin", isAuth);
// app.use("/user", userAuth);


// app.get("/admin/getAllData" ,(req,res ,next) => {
//     console.log("All Data");
//     res.send("All Data sent");
//     next();
// })

// app.get("/admin/deleteUser", (req,res) => {
//     console.log("User Deleted");
//     res.send("User Deleted");
// });

// app.get("/user" , (req,res) =>{
//     console.log("User Data");
//     res.send("User Data sent");
// })



// app.get("/user/Login", (req,res) =>{
//     console.log("User Login");
//     res.send("User Login Successfull");
// })


// app.use("/user", userAuth)

// //Error Handling Middleware
// app.get("/user/getUserData" , (req,res) => {
//     try{
//           throw new Error("Something went wrong");
//           res.send("User Data sent");


//     }
//     catch(err){
//         res.status(500).send("Something wentttt wrong");
//     }
   

  

// })

// app.use( "/"  ,(err,req,res, next) => {
//     if(err) {
//          res.status(500).send("Something went wrong");
//     }

   
// }) ;

app.use(express.json()); // it will parse the incoming request body in json format and make it available in req.body

//api to insert in data base using post method
app.post("/singup" ,  async (req,res) => {

    //console.log(req.body);
   // now insert data in database also creating a new instance of User Model 
    const user=  new User(req.body);


    try{
        await user.save();
    res.send("User created successfully");
    }catch(err){
        res.status(400).send("Error saving the User" + err.message);
    }
    
})
 


connectDB()
    .then(() => {
        console.log("Database Connected");
        app.listen(4000 , () => {
            console.log("Server is running on port 4000");
        });
    })
    .catch((err) => {
        console.error("Database Connection Failed");
    });
    




