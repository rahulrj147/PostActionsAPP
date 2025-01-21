const post = require("../models/postmodel")
const comment = require("../models/Commentmodel");

exports.commentonpost = async(req,res) =>{
try{
    const{post_id,user,body} = req.body;

    const commentobj = new comment({
        post_id,user,body
    })

    const newcomment = await commentobj.save();

    const commentedpost = await post.findByIdAndUpdate(post_id , {$push : {comments : newcomment._id}} , {new : true}).
    populate("comments").exec();
    
    res.status(500).json({
        data : commentedpost
    })

}catch(e){
 res.status(500).json({
            message : "something wrong in commentonpost"
        })
}
}