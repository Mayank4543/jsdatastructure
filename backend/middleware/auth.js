import { verifyToken } from "../utils/jwt.js";
import User from "../models/User.js";
export const protect=async(req,res,next )=>{
  let token;
  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
    token=req.headers.authorization.split(' ')[1];
  }
  if(!token){
    return res.status(401).json({
      success:false,
      message:"Not authorized  to access this route"
    })
  }
  try{
     const decoded=  verifyToken(token);
     if(!decoded){
      return res.status(401).json({
        success:false,
        message:'Token Invalid or Expired '
      })
     }
     req.user = await User.findById(decoded.id).select('-password');
      if(!req.user){
         return res.status(404).json({
          success:false,
          message:"User Not Found"
         })
      }
    next();
  }catch(error){
    return res.status(401).json({
      success: false,
      message: 'Not authorized to access this route'
    });
  }

}
export const admin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    return next();
  }

  return res.status(403).json({
    success: false,
    message: "Admin not authorized to access this route",
  });
};