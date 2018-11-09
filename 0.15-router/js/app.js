
const Index = {template: '<h1>首页</h1>'}
const Login = {template: '<h1>登陆</h1>'}
const Post = {template: `
<div><h1>帖子管理</h1><router-link to="rain" append>后座</router-link><router-view></router-view></div>
`}
const Rain = {template: ' <h2>雨天请坐我的后座</h2>'}
const a = {template: '<h1>a</h1>'}


const router = new VueRouter({
  routes: [
    {path: '/', component: Index},
    {path: '/login', component: Login},
    {path: '/post', meta: {login_required: true}, component: Post, 
      children: [
        {
          path: 'rain',
          component: Rain
        }
      ]
    },
    {path: '/a', component: a, meta: {login_required: false}},
  ]
})

router.beforeEach(function(to, from, next) {
  var logged_in = false
  if(!logged_in && to.matched.some(function(i) {
    return i.meta.login_required
  })) {
    next('/login')
  } else {
    next()
  }
})

router.afterEach(function(to, from) {
  // console.log('to:', to)
  // console.log('from:', from)
  // console.log('to.matched:', to.matched)
})

const app = new Vue({
  el: "#app",
  router: router
})