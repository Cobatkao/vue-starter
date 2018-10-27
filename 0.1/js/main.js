 var app = new Vue({
   el: "#app",
   data: {
      img: "https://dummyimage.com/100x100/#000/#fff",
      url: "https://www.baidu.com/",
      link: "https://www.taobao.com/",
      klass: "btn btn-primary",
      isActive: true,
      message: "Hello Vue.js!",
      animalList: [
        {
          name: '熊',
          amount: 5,
          foot: 2
        },
        {
          name: '猴',
          amount: 10,
          foot: 2
        },
        {
          name: '豹',
          amount: 15,
          foot: 4
        },
        {
          name: '狮',
          amount: 25,
          foot: 4
        }
      ]
    },
    methods: {
      reverseMessage: function() {
        this.message = this.message.split('').reverse().join('')
      },
      onEnter: function() {
        console.log('mouse Enter')
      },
      onOut: function() {
        console.log('mouse Out')
      },
      onSubmit: function() {
        console.log('Submitted')
      },
      onKeyUp: function(e) {
        console.log(String.fromCharCode(e.which) + 'key up!')
      },
      onKeyEnter: function() {
        console.log('pressed enter!')
      }
    }
 })