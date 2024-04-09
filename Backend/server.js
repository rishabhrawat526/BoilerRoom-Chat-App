const express = require("express");
const { app, server } = require("./socket/socket.js");
const dotenv = require('dotenv')
const path  = require("path")
const authRoutes = require('./routes/auth.routes')
const userRoutes = require('./routes/user.routes')
const connectToMongoDB = require('./database/db')
const messageRoutes = require('./routes/message.routes')
const cookieParser =require("cookie-parser");
dotenv.config();

const PORT = process.env.PORT || 5000;

 __dirname = path.resolve();
app.use(express.json());
app.use(cookieParser());
app.use('/api/auth',authRoutes);
app.use('/api/messages',messageRoutes)
app.use('/api/users',userRoutes)
app.use(express.static(path.join(__dirname,"/frontend/dist")))

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "Frontend", "dist", "index.html"));
});
server.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`server is running on port ${PORT}`);
})