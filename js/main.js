var app = new Vue({
  el: "#app",
  data: {
    message: "hello world",
    name: "高航"
  },
  methods: {
    sayMyName: function() {
      return this.name;
    }
  }
})