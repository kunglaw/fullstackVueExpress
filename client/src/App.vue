<template>
  <div id="app">
   
    <h1> Yudhistira Blog </h1>
    <Menu />
    <PostComponent />
    <!-- <HelloWorld msg="welcome to your vue.js app" /> -->
  </div>
</template>

<script>
import PostComponent from './components/PostComponent.vue'
import Menu from "./components/Menu.vue"
// import HelloWorld from "./components/HelloWorld.vue"

export default {
  name: 'app',
  components: {
    Menu,
    PostComponent
    //HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
  color: #2c3e50;
  margin-top: 60px;
}
</style>
