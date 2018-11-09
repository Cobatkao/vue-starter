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
    path: '/user',
    components: {
      sidebar: {
        template: `
          <div>
            <ul>
              <li>用户管理</li>
              <li>权限列表</li>
            </ul>
          </div>
        `
      },
      content: {
        template: `
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fugiat sit repudiandae nulla cumque non repellat quibusdam ullam, nobis pariatur! In rerum quia laudantium voluptatem impedit quo commodi! Blanditiis, qui?</p>
          </div>
        `
      }
    }
  },
  {
    path: '/post',
    components: {
      sidebar: {
        template: `
          <div>
            <ul>
              <li>帖子列表</li>
              <li>标签管理</li>
            </ul>
          </div>
        `
      },
      content: {
        template: `
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fugiat sit repudiandae nulla cumque non repellat quibusdam ullam, nobis pariatur! In rerum quia laudantium voluptatem impedit quo commodi! Blanditiis, qui?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fugiat sit repudiandae nulla cumque non repellat quibusdam ullam, nobis pariatur! In rerum quia laudantium voluptatem impedit quo commodi! Blanditiis, qui?</p>
          </div>
        `
      }
    }
  }
]

var router = new VueRouter({
  routes: routes
})

var app = new Vue({
  el: "#app",
  router: router
})