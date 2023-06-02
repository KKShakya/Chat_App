const catchAsyncError = require("../middlewares/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");

const Signup = catchAsyncError(async (req,res,next)=>{

   const {name,email,password,avatar} = req.body;

   if(!name || !email || !password){
   //using our errorhandler class
    return next(new ErrorHandler("Please Fill All the fields"),400);
   }

    const user = await userModel.findOne({email});

    if(user){
      return next(new ErrorHandler("User Already Exist!"),409);
    }


     user.create({name,email,password,avatar});

     res.status(200).send({
      success: true,
      message: "User created successfully"
     })

})



const Login = catchAsyncError(async (req,res,next)=>{

  //  const {email,password} = req.body;

  //  if(!email || !password){
  //  //using our errorhandler class
  //   return next(new ErrorHandler("Please Fill All the fields"),400);
  //  }

  //   const user = await userModel.findOne({email});

  //   if(user){
  //     return next(new ErrorHandler("User does not Exist!"),409);
  //   }
    


     res.status(200).send({
      success: true,
      message: "user Logged in successfully"
     })

})

module.exports = {Signup,Login}