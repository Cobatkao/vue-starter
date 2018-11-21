import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import News from '@/components/News'
import Player from '@/components/player'
import Profile from '@/components/profile'
import Stat from '@/components/stat'
import Detail from '@/components/Detail'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import User from '@/components/User'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    // {
    //   path: '/about',
    //   name: 'About',
    //   component: About
    // },
    // {
    //   path: '/news',
    //   name: 'News',
    //   component: News
    // },
    // {
    //   path: '/player/:uid',
    //   name: 'Player',
    //   component: Player,

    //   children: [
    //   	{
    //   		path: 'profile',
    //   		component: Profile
    //   	},
    //   	{
    //   		path: 'stat',
    //   		component: Stat
    //   	}
    //   ]
    // },

    //多路由命名视图
    // {
    // 	path: '/',
    // 	name: 'Home',
    // 	components: {
    // 		myHeader: Header,
    // 		mySidebar: Sidebar,
    // 		myDetail: Detail
    // 	}
    // }

    // {
    // 	path: '/about',
    // 	name: 'About',
    // 	component: 'About',
    // 	alias: 'aboutme'
    // },
    // {
    // 	path: '/curry',
    // 	redirect: '/player'
    // }

    {
    	path: '/',
    	name: 'HelloWorld',
    	component: HelloWorld
    },
    {
    	path: '/user/:uid/:nationality',
    	name: 'User',
    	component: User,
    	props: true
    }
  ]
})
