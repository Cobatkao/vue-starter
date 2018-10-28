//本例中按钮是子组件，按钮+余款展示是父组件
//子组件触发show-balance事件，父组件接收并修改了show_balance的值，来判断是否显示余款
//使用参数
//若要在触发事件时传输数据，vue内部会自动调用事件处理函数，同时会把数据加进去
Vue.component('balance', {
  template: `
    <div>
      <show @show-balance="show_balance"></show>
      <div v-if="show">
        您的余款：{{msg}}
      </div>
    </div>
  `,
  data: function() {
    return {
      show: false,
      msg: '98 元'
    }
  },
  methods: {
    show_balance(data) {
      this.show = true
      console.log(data) //{a: 1, b: 2}
    }
  },
})

Vue.component('show', {
  template: '<button @click="on_click()">显示余款</button>',
  methods: {
    on_click() {
      this.$emit('show-balance', {a: 1, b: 2}) // 子组件触发自定义事件show-balance
    }
  }
})

new Vue({
  el: "#app",
})