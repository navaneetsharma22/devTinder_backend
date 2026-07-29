-create a repo
-Initialize the repo 
-node_modules,package.json, package-lock.json
-Install express
-create a  server
-Listen to Port 5000
-Write request handler for /test,/hello
-Install nodemone and update script inside package.json
-what are dependencies 
- what is the use  of "-g" while npm install
-Difference between caret and tilde (^ vs ~)


lec -- 17 (ROuting and request Handling )
-Initialize git 
-.gitignore
-Create a remote repo on github 
-push all code to remote origin 
-play with and route extension ex. /hello ,/, hello/2 ,/xyz
-----Order Of route matter a lot
Write a logic to hamdle GET ,POST,PUT ,PATCH,DELETE API CALLS  AND TEST IN POSTMAN

explore routing and use of ? ,+,(),* in the routes
Use of regex in routes /a/,/*fly&/

reading the query params routes 
adding the dynamic routes 

// Middlewares and Error Handling 18
-Multipal  Route Handler - play With the code 
-next();
-next function and errors along with res.send()
app.use("/routes" ,rh ,( rh2, rh3)  ,rH4 ,rh5)
what is middleware 
how express js basically handles requests behind the scenes 

-diffrence B/w app.use and app.all 


19 --- Database ,Schema and Models Mongoose  29 May 
create a free on MongoDB official website (mongo Atlas )
Install Mongoose Library 
connect your application to Database 

call connect DB function and connect to database before starting application on 7777

cresate user schema & user Model


20. DIVING INTO THE APIs

jS Object Vs JSON(Diffrence );
Add the Express.json Middleware to recive data from the end user 
Make your signup API dynamic to recive data from the end user 
User.findOne with duplicate email ids. which object return
API  i - GET /feed - get all the users from the database 
-API GET user by ID 
-create a delete user APi 
dif  frence beetwen patch and Put 
API - Update a user 
Explore the mongoose Documentation for model methods 
what are options in a Model.findOneAndUpdate


21 Data  Sanitization and Schema validation
explore schematype options from the document '
add require ,unique lowercase , min minLenght , trim 
add default 
Create a custom validate function for gender 
improve the DB Schema - put all apropiate validation on each field in schema 
Add Timestamp in the userSchema  
Add API level  validation On Patch request & Signup  post api
DATA Sanutaiztion Add APi validation for Each fields 

22 Encrypting Password 
validatedata in signup Api 
Install bcrypt I package 
Create PassWoerdHash Using Bcrypt.hash And Save the User Is excrupted password 
create login api and validate the data own


23 Authentication , JWT 

install cookie-parrse
just send a dummy cookie to user 
create GET /profile API and Check  if You get the cookie back 
Install jsonwebtoken
In login API , after email and password verification create a JWT token 
read the cookies inside your profile Api and FInd the logged your api 

write thi use auth middleware 
add the userAuth middle ware in Profile API and a new sendConnection 

set the expiry of Jwt and cookies 

 Explore tinder APIs 
 create a list alll APi you can think of in DEv TInder 
 Group multiple routes  under respective routers 
Read documentation  for express.Router 
create router folder for managing auth , profilee , request  routing 
import these roters in app.js 

and add all the api and work fine 