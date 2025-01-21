const post = require('../models/postmodel');
exports.createpost = async (req,res) =>{
  try{
    // two method to create something 
    // 1-> using create method
    // 2-> using save method
    const{title,body} = req.body;
    const objectofpost =new post({
        title,
        body
    })
    const madepost = await objectofpost.save();
    res.status(200).json({
        postIsHere : madepost
    })
  }catch(e){
    res.status(500).json({
        message : "something wrong in createpost"
    })
  }
}

exports.getallpost = async (req,res) => {
    try{
       const allpost = await post.find();
       res.status(200).json({
        allIsHere : allpost
    })
    }catch(e){
        res.status(500).json({
            message : "something wrong in getallpost"
        })
    }
}