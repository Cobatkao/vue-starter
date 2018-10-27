var app = new Vue({
  el: "#app",
  data: {
    math: 30,
    english: 60,
    chinese: 110
  },
  computed: {
    sum: function() {
      return parseFloat(this.math) + parseFloat(this.english) + parseFloat(this.chinese)
    },
    average: function() {
      return Math.round(this.sum / 3)
    }
  } 
})