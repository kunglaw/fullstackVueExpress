<template>

    <div class="post-form">
        <h2> Post Form </h2>
        <form action="" method="post">
           
            <div class="form-group">
                <label> Title </label>
                <input type="text" name="title" class="form-control" v-model="title">
            </div>
            <div class="form-group">
                <label> Author </label>
                <input type="text" name="author" class='form-control' v-model="author">
            </div>
            <div class="form-group">
                <label> Description </label>
                <textarea name="description" class="form-control" v-model='description'></textarea>
            </div>
            <input type="button" v-on:click="createPost" value="create Post">
        </form>
    </div>
</template>
<script>
    import PostService from "./../PostService";

    export default {
        name:"PostForm",
        data(){
            return{
                title:"",
                description:"",
                author:''
            }
        },
        methods: {
            createPost() {
                return PostService.insertPost({
                    title:this.title, author:this.author, description:this.description
                })
                .then( res => {
                    // bagaimana caranya trigger function yang ada di parent ? 
                     this.$emit('created');
                })
                .catch(err => {
                    alert(err)
                })
            } , 
            deletePost() {
                return PostService.deletePost()
            }
        },
    }

</script>
<style scope>
    .post-form {
        width: 40%;
    }

    .post-form form .form-group {
        margin:10px 0
    }

    .post-form form label{
        display: block;
    }

    .post-form form .form-control {
        width: 100%;
        padding:5px;
        font-size: 16px;
    }

</style>
