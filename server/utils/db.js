const mongoose = require("mongoose");


const URI= "mongodb+srv://rajapardesi10041_db_user:1UIQwzhdJ2ewDHNr@cluster0.mur49cs.mongodb.net/?appName=Cluster0"

// mongoose.connect(URI);     //The code mongoose.connect(URI); is the standard command used in Node.js applications to establish a connection to a MongoDB database using the ⁠Mongoose ODM (Object Data Modeling) library.

const connectDb = async()=>{
try {
    await mongoose.connect(URI);
    console.log("connection sucsessful to DB");
    
} catch (error) {
    console.error("database connection failed reh");
    process.exit(0);
}
};
module.exports = connectDb;
