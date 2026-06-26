const express = require("express");
const app = express();

 const router = require("./router/auth-router")

 app.use("/", router);

// app.get("/",(req,res)=>{ 
// res.status(200).send("welcome to the url")
// });        // app.get this is http method

// app.get("/register",(req,res)=>{
// res.status(200).send("welcome to registration page")
// }); 

const PORT= 5000
app.listen(PORT,()=>{
    console.log(`server is running at port:${PORT}`);
    
})   // app.listen method to show the server to user running on whiich port
