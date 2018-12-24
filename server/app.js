const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const posts = require("./routes/api/posts")
const app = express()

//middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:true }))

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.use("/api/posts", posts)

const port = process.env.PORT || 5500

app.get("/",function(req, res,){
    res.send("<h1> Hello World </h1><br>")
})

app.listen(port,function(){
    console.log("Application running on port ",port)
})