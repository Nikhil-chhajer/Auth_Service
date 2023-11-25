const validateUserAuth=(req,res,next)=>{
    if(!req.body.email || !req.body.password){
        res.status(400).json({
            data:{},
            err:"Email or password is missing in signup process",
            success:false,
            message:"something went wrong"
        })
       
    }
    next();
}
const validateisAdmin=(req,res,next)=>{
    if(!req.body.id){
        res.status(400).json({
            data:{},
            err:"Email or password is missing in signup process",
            success:false,
            message:"something went wrong"
        })
       
    }
    next();
}
module.exports={
    validateUserAuth,
    validateisAdmin
}