// //An Express Router is a mini-application within ⁠Express.js that acts as a complete middleware and routing system. It is used to split a large backend codebase into smaller, isolated, and highly manageable files.

// const express = require("express");
// const router = express.Router();
// const {home,register} = require("../controllers/auth-controller")




// // router.get("/", (req, res) => {
// //     res.status(200).send("welcome Here")
// // });        // router.get this is http method second method insteaf of app.get 

// // router.route("/").get((req, res) => {
// //     res.status(200).send("welcome Here") // another way to write it we will use this
// // });     

// // another way when define , most simple
// // router.route("/").get(home);     

// // router.route("/register").get(register);
// // app.get("/",(req,res)=>{
// // res.status(200).send("welcome to the url")
// // }) ;        // app.get this is http method

// module.exports = router;



// test

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Auth Router Working");
});

module.exports = router;