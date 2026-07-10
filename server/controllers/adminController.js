const User=require("../models/User");

exports.totalUsers=async(req,res)=>{

const total=await User.countDocuments();

res.json({

total

});

}