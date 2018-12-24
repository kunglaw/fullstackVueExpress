const mongo = require("mongodb").MongoClient
const dialect = require("../config/database")
const url = dialect.mongodb.databases[0].url
const database = dialect.mongodb.databases[0].database 

class Model {

    static connect() {

    }

    static findAll(collection, attributes={}, callback) {
        mongo.connect(url,function(err, client){
            if(err) {
                callback(err, null)
            } else {
                const db = client.db(database)
                db.collection(collection).find(attributes).toArray(function(err, data){
                    callback(null, data)
                })
            }
        })
    }

    static findOne(collection, attributes={}, callback) {
        mongo.connect(url, function(err, client){
            if(err) {
                callback(err, null)
            } else {
                const db = client.db(database)
                db.collection(collection).findOne(attributes)
                .then(data => {
                    callback(null, data)
                })
                .catch(err => {
                    callback(err, null)
                })
            }
        })
    }

    static insert(collection,newData={},callback) {
        mongo.connect(url, function(err, client){
            if(err) { 
                callback(err, null)
            } else {
                const db = client.db(database)
                //console.log(database,"<=== ")
                db.collection(collection).insert(newData)
                .then( result => {
                    callback(null, data)
                })
                .catch(err => {
                    callback(err, null)
                })
            }
        })
    }

}

module.exports = Model