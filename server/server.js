const express = require("express");
const app = express();

 const router = require("./router/auth-router")
 const connectDb = require("./utils/db")

  app.use(express.json());     //app.use(express.json()) is a built-in middleware function in Express that parses incoming HTTP requests with JSON payloads. It extracts the raw JSON text from the request body, converts it into a standard JavaScript object, and attaches it directly to the req.body property.

  
 app.use("/", router);             //The code app.use("/", router); is used in Express.js to mount a modular route handler (the router object) onto the root path ("/") of your application. It serves as a structural foundation for clean and scalable web servers.


// app.get("/",(req,res)=>{ 
// res.status(200).send("welcome to the url")
// });        // app.get this is http method

// app.get("/register",(req,res)=>{
// res.status(200).send("welcome to registration page")
// }); 

const PORT= 5000

connectDb().then(()=>{ 
    app.listen(PORT,()=>{
        console.log(`server is running at port:${PORT}`);
        
    })   // app.listen method to show the server to user running on whiich port
})
    