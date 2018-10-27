Vue.component('user', {
  template: "<a :href='\"/user/\" + username'>@{{username}}</a>",
  props: ['username']
})

var app = new Vue({
  el: "#app"
})