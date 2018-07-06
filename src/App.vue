<template>
  <div id="app">
    <header>
      <router-link to = '/login' class="text">登录</router-link>
      <router-link to = '/register' class="text">注册</router-link>
      <!-- <router-link to = '/page'>列表</router-link> -->
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
 #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0a0a0af8;
  /* margin-top: 60px; */
   /* background-image: url(../static/tim.jpg);  */
  background-size: contain;
   /* width: 700px;  */
  height: 700px; 
  
} 
ul, li, a, h2 {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
</style>
