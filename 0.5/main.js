//定义全局组件
// Vue.component('alert', {
//   template: '<button @click="onClick">弹弹弹</button>',
//   methods: {
//     onClick: function() {
//       alert('Yo!')
//     }
//   }
// })

//封装组件，提取出函数
var alert_component = {
  alert: {
    template: '<button @click="onClick">弹弹弹</button>',
    methods: {
      onClick: function() {
        alert('Yo!')
      }
    }
  }
}

//定义局部组件，仅作用于seg1里头
var app = new Vue({
  el: "#seg1",
  components: alert_component
})

//这里的域此时访问不到组件
var app = new Vue({
  el: "#seg2"
})