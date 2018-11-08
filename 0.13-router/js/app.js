// 笔记：动态路径参数的两种写法
// 写法1
// <router-link :to="'/user/' + $route.params.name + '/more'">更多信息</router-link>

// 写法2:推荐
// <router-link to="more" append>更多信息</router-link>

var routes = [
  {
    path: '/',
    component: {
      template: `
        <div>
          <h1>首页</h1>
        </div>
      `
    }
  },
  {
    path: '/about',
    component: {
      template: `
        <div>
          <h1>关于页面</h1>
        </div>
      `
    }
  },
  {
    //注意：动态获取参数，name
    path: '/user/:name',
    //指定该路由名字
    name: 'user',
    component: {
      template: `
        <div>
          <h1>我叫{{$route.params.name}}</h1>
          <router-link to="more" append>更多信息</router-link>
          <router-view></router-view>
        </div>
      `
    },
    children: [
      {
        path: 'more',
        component: {
          template: `
            <div>
              用户{{$route.params.name}}的详细信息
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio consequuntur consequatur aperiam aliquam nemo reiciendis commodi odit, alias quod rem vel cum, veritatis ipsam sit iusto perspiciatis iste harum? Tenetur!</p>
            </div>
          `
        }
      }
    ]
  },
]

var router = new VueRouter({
  routes: routes
})

new Vue({
  el: '#app',
  router: router,
  methods: {
    surf () {
      setTimeout(function() {
        this.router.push({name: 'user', params: {name: '李欢欢'}})
      }, 2000)
    }
  }
})