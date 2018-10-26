var app = new Vue({
  el: "#app",
  data: {
    message: undefined,
    name: undefined,
    age: undefined
  },
  methods: {
    sayMyName: function() {
      return this.name;
    }
  }
})