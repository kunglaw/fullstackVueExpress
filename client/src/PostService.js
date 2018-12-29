import axios from "axios"
// import { resolve } from "path";

const url = "http://localhost:5500/api/posts/"

class PostService {
    // get posts 
    static getPosts() {
        // return new Promise(async (resolve, reject) => {
        //     try{
        //         const res = await axios.get(url)
        //         const data = res.data
        //         resolve(data.map( post => ({
        //             ...post,
        //             createdAt : new Date(post.createdAt)
        //         })))
        //     }catch(err){
        //         reject( err )
        //     }
        // })

        return new Promise(function(resolve, reject){
            axios.get(url)
            .then(data => {

                //console.log( data.data ,"<== postservice")
                //const data = data.data
                const posts = []
                data.data.map( row => {

                     var item = {
                        title:row.title,
                        description:row .description,
                        author:row.author,
                        createdAt:new Date( row.createdAt )
                    }

                    posts.push( item )
                })
 
                resolve( posts )
            })
            .catch(err => {
                reject( err )
            }) 
        })
    }

    // create posts
    static insertPost(data) {
        return axios.post(url, { 
            title:data.title,
            description: data.description,
            author : data.description
        })
    }

    // delete posts 
    static deletePost(id) {
        return axios.delete(`${url}${id}`)
    }
}

export default PostService
