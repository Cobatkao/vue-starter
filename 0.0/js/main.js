// var app = new Vue({
//   el: "#app",
//   data: {
//     message: undefined,
//     name: undefined,
//     age: undefined
//   },
//   methods: {
//     sayMyName: function() {
//       return this.name;
//     }
//   }
// })

Vue.component('my-component', {
  template: `
    <div>
      <p>第一段</p>
      <p>第二段</p>
    </div>
  `,
})

new Vue({
  el: '#example'
})