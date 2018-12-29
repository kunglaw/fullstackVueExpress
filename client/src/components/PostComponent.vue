<template>
  <div class="PostComponent">
    <div class="container">
         

        <div class="post-container">
            <h3> Lates Posts </h3>
            <p class="error" v-if="error"> {{ error }}</p>
            
            <div class="post"
                v-for="(post, index) in posts"
                v-bind:item="post"
                v-bind:index="index"
                v-bind:key="post._id"
            >
                <p class="title"> {{ post.title }}</p>
                <div class="small">{{ `${post.createdAt.getDate()} / ${post.createdAt.getMonth()} / ${post.createdAt.getFullYear()}` }} </div>
                
                <div class="text"> {{ post.description }}</div>
            </div>

        </div>
        <PostForm />
        <div class="clear"></div>
    </div>

  </div>
</template>

<script>
import PostService from "../PostService";
import PostForm from "./PostForm";

export default {
  name: 'PostComponent',
  components:{
      PostForm
  },
  props: {
    title: String
  },
  data(){
      return {
          posts:[],
          error:'',
        
      }
  },
//   async created() {
//       try {
//         this.posts = await PostService.getPosts()
//       } catch(err) {
//         this.error = err.message 
//       }
//   }
  created() {
      return PostService.getPosts()
      .then(data => {
         data.map(row => {
             this.posts.push( row )
         })
        //console.log( data )
      })
      .catch(err => {
          this.error = err.message
      }) 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .container{
        width: 80%;
        margin-left:auto;
        margin-right:auto;
    }

    .post {
        margin-bottom: 10px;
        border:1px solid gray;
        padding:10px;
        border-radius: 10px;
    }

    .post .title{
        font-size: 15px;
        font-weight: bold
    }

    .post .small {
        font-size: 10px;
        color:grey;
    }

    .post .text {
        font-size: 12px;
    }

    .post-container {
        float: left
    }

    .post-form {
        float: right;
    }


</style>
