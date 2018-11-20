import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import News from '@/components/News'
import Player from '@/components/player'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/player/:uid',
      name: 'Player',
      component: Player
    }
  ]
})
