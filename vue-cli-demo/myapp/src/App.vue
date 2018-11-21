<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <p>
      <router-link to="/">Home</router-link>
      <router-link to="/player/1">库里1</router-link>
      <router-link to="/player/2">加内特1</router-link>
      <router-link to="/player/3">哈登1</router-link>
    </p>
    <p> -->
      <!-- 编程式导航 -->
      <!-- <button @click="btnClick(1)">库里2</button>
      <button @click="btnClick(2)">加内特2</button>
      <button @click="btnClick(3)">哈登2</button>
      <hr> -->
      <!-- 上下两种写法都可以，参数和router push一样 -->
      <!-- <router-link :to="{ name: 'Player', params: { uid: 1 }}">库里3</router-link>
      <router-link :to="{ name: 'Player', params: { uid: 2 }}">加内特3</router-link>
      <router-link :to="{ path: '/player/2/stat' }">哈登3</router-link>
    </p>
    <router-view></router-view> -->

   <!--  <table width="100%">
            <tr>
                <td colspan="2" style="background-color:darkgoldenrod">
                    <router-view name="myHeader"></router-view>
                </td>
            </tr>
            <tr>
                <td width="20%" style="background-color:thistle">
                    <router-view name="mySidebar"></router-view>
                </td>
                <td width="80%" style="background-color:aquamarine">
                    <router-view name="myDetail"></router-view>
                </td>
            </tr>
        </table> -->

    <router-link to="/">Home</router-link>
    <router-link to="/user/1/usa">User1</router-link>
    <router-link to="/user/2/china">User2</router-link>
    <router-link to="/user/3/korea">User3</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
import './assets/my.css'
export default {
  name: 'App',
  methods: {
    btnClick(uid) {
      // this.$router.push({ path: `/player/${uid}` })
      // this.$router.push({ path: `/player/${uid}/stat` })

      // 重定向到Player组件，并且传递参数uid
      this.$router.push({ name: 'Player', params: {uid: uid} })
      // this.$router.push({ path: '/player', query: { uid: uid } })
      // this.$router.go(-1)
    }
  }
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
