//两个人要互相显示对方的话，能显示就是通信成功，绑定i_said和hh_said
var Event = new Vue()

Vue.component('huanhuan', {
  template: `
    <div>
      欢欢说：<input @keyup="text_change" type="text" v-model="i_said" />
    </div>
  `,
  methods: {
    text_change: function() {
      Event.$emit('hh_said_something', this.i_said)
    }
  },
  data: function() {
    return {
      'i_said': ''
    }
  }
})

Vue.component('gaogao', {
  template: `
    <div>
      欢欢说过：{{hh_said}}
    </div>
  `,
  data: function() {
    return {
      'hh_said': ''
    }
  },
  mounted: function() {
    var me = this
    Event.$on('hh_said_something', function(data) {
      me.hh_said = data
    })
  }
})

new Vue({
  el: "#app"
})