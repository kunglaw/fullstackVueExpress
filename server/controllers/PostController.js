const Post = require("../models/Post")

class PostController {
    static findAll(req, res) {
        Post.findAll(function(err, data){
            if(err) {
                res.send(err)
            } else {
                res.send( data )
            }
        })
    }

    static insert(req, res) {
         Post.insert({
             title:req.body.title,
             description:req.body.description,
             author:req.body.author,
             createdAt:new Date(),
             updatedAt:new Date()
         },function(err, data){
            if(err) {
                res.send(err)
            } else {
                res.send(data)
            }
         })
    }
}

module.exports = PostController