//需求：👍按一下：点赞；再按一下：取消点赞

Vue.component('like', {
  template: "#like-component-tpl",
  data: function() {
    return {
      like_count: 0,
      liked: false,
    }
  },
  methods: {
    toogle_like: function() {
      if(!this.liked) {
        this.like_count++
      } else {
        this.like_count--
      }
      this.liked = !this.liked //点击后变为true
    }
  }
})

var app = new Vue({
  el: '#app'
})