require("dotenv").config();
const jwt = require("jsonwebtoken");
module.exports = function(req,res,next){
    const token = req.header("x-auth-token");
    if(!token){
        return res.status(401).json({msg:"No token,authorization denied"});
    }
    try {
        const decoded = jwt.verify(token,process.env.SECRET);// if the token is verified then it will return the payload which gets assigned to the const decoded orelse there will be an error which will be catched by the try catch block
        // after successful authentication we can assign the user object of the req to the payload
        // console.log(decoded);
        req.user = decoded.user;
        next();
    } catch (error) {
        console.error(error.message);
        res.status(401).json({msg:"Invalid Token"});
        
    }  
}