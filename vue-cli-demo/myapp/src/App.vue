<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>
      <router-link to="/">Home</router-link>
      <router-link to="/player/1">库里</router-link>
      <router-link to="/player/2">加内特</router-link>
      <router-link to="/player/3">哈登</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
import './assets/my.css'
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
  color: #2c3e50;
  margin-top: 60px;
  background: #fff8da;
}
</style>
