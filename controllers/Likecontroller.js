const post = require("../models/postmodel")
const like = require("../models/Likemodel");

exports.likeonpost = async(req,res) =>{
try{
    const{post_id,user} = req.body;

    const likeobj = new like({
        post_id,user
    })

    const liked = await likeobj.save();

    const likedpost = await post.findByIdAndUpdate(post_id , {$push : {likes : liked._id}} , {new : true}).
    populate("likes").exec();
    
    res.status(500).json({
        data : likedpost
    })

}catch(e){
 res.status(500).json({
            message : "something wrong in likeOnPost"
        })
}
}

exports.unlikeOnPost = async (req,res) =>{
    try{
        const{post_id, like_id} = req.body;
        const deletedLike = await like.findOneAndDelete({_id:like_id});

        const udpatedPost = await post.findByIdAndUpdate(post_id,
                                                        {$pull: {likes: deletedLike._id} }, 
                                                        {new: true});

        res.json({
            post:udpatedPost,
        });

    }
    catch(error) {
        return res.status(400).json({
            error: "something wrong in unlikeOnPost"
        });
    }
}