const express = require('express');
const app = express();
const dotenv = require('dotenv')
const authRoutes = require('./routes/auth.routes')
const userRoutes = require('./routes/user.routes')
const connectToMongoDB = require('./database/db')
const messageRoutes = require('./routes/message.routes')
const cookieParser =require("cookie-parser");
dotenv.config();

const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cookieParser());
app.use('/api/auth',authRoutes);
app.use('/api/messages',messageRoutes)
app.use('/api/users',userRoutes)
app.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`server is running on port ${PORT}`);
})