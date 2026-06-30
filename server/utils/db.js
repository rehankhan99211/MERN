const mongoose = require("mongoose");


const URI= Process.env.REACT_APP_URL;

// mongoose.connect(URI);     //The code mongoose.connect(URI); is the standard command used in Node.js applications to establish a connection to a MongoDB database using the ⁠Mongoose ODM (Object Data Modeling) library.

const connectDb = async()=>{
try {
    await mongoose.connect(URI);
    console.log("connection sucsessful to DB");
    
} catch (error) {
    console.error("database connection failed ...");
    process.exit(0);git 
}
};
module.exports = connectDb;
