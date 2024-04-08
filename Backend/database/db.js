const mongoose = require('mongoose');

const connectToMongoDB = async ()=>{
try {
        await mongoose.connect(process.env.DATABASE_URI);
        console.log('connected to mongodb');
} catch (error) {
    console.log("error connecting to mongodb",error.message);
}
};

module.exports = connectToMongoDB;