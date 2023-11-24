const validateUserAuth=(req,res,next)=>{
    if(!req.body.email || !req.body.password){
        res.status(500).json({
            data:{},
            err:"Email or password is missing in signup process",
            success:false,
            message:"something went wrong"
        })
       
    }
    next();
}
module.exports={
    validateUserAuth
}