<template>
  <div id="app">
    <div class="container">
      <Header/>
      <router-view/>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Header from "./components/header/index.vue"
import Footer from "./components/footer/index.vue"
export default {
  components:{
    Header,
    Footer
  },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #fff;
  margin: auto;
  width: 100%;
  background: #fff;
}
body,html,ul,li,p,div,span,h1,h2,h3,h4,h5,h6 {
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: #fff;
}
.container {
  /* width: 90%; */
  /* margin: 0 auto; */
}
</style>

