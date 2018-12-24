const Model = require("./Model")

class Post {

    static findAll(callback) {
        Model.findAll("posts",{},function(err, data){
            if(err) {
                callback(err, null)
            } else {
                callback(null,data)
            }
        })
    }

    static findOne(callback) {
        Model.findOne("posts",{},function(err, data){
            if(err) {
                callback(err, null)
            } else {
                callback(null, data)
            }
        })
    }

    static insert(newData,callback) {
        Model.insert("posts",newData,function(err, data){
            if(err) {
                callback(err, null)
            } else {
                callback(null, data)
            }
        })
    }
   

}

module.exports = Post