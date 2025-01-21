const express = require("express")
const router = express.Router();
const {createpost,getallpost} = require("../controllers/Postcontroller");
const{likeonpost,unlikeOnPost} = require("../controllers/Likecontroller")
const{commentonpost} = require("../controllers/commentcontroller")

router.post("/createpost",createpost);
router.get("/getallpost",getallpost);
router.post("/likepost" , likeonpost);
router.post("/commentonpost",commentonpost);
router.post("/unlikeOnPost",unlikeOnPost);


module.exports = router;