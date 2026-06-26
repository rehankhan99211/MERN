//In Express.js, a controller is a JavaScript function (or collection of functions) that contains the business logic for handling incoming HTTP requests and returning responses. While Express does not have a native "Controller" object, developers separate request-handling code from route definitions to implement the Model-View-Controller (MVC) architectural pattern. This separation of concerns keeps your codebase clean, modular, and easy to scale.

const home = async (req,res)=>{
try { res.status(200).send("welcome to home page");
    
} catch (error) {
    console.log(error);
    
}
};

//********************* Registration logic ************* */
const register = async (req, res) => {
    try {res.status(200).send("welcome to registration page")

        
    } catch (error) {
        res.status(400).send({msg:"page not found"})
    }
};     
//********************* Registration logic ************* */

module.exports= {home, register};