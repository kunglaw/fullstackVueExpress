const express = require("express")
const router = express.Router();
const PostController = require("../../controllers/PostController")
//get Posts 
router.get("/",PostController.findAll)
router.post("/",PostController.insert)

module.exports = router 