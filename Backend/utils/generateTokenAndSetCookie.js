const jwt = require('jsonwebtoken');
const generateTokenAndSetCookie = (userId,res)=>{
    const token =  jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:'15d'
    });
    res.cookie("jwt",token,{
        maxAge : 15 * 24 *60*60*1000, //ms
        httpOnly : true, //prevent access as attack esp cross side scripting attack,
        sameSite:"strict",
        secure: process.env.NODE_ENV !== "development"
    });
}
module.exports = generateTokenAndSetCookie;