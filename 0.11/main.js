Vue.directive('pin', function(el, binding) {
  var ispined = binding.value
  var position = binding.modifiers
  var warning = binding.arg
  if(ispined) {
    el.style.position = 'fixed'
    for(var key in position) {
      if(position[key]) {
        el.style[key] = '10px'
        el.style[key] = '10px'
      }
    }
    if(warning === 'true') {
      el.style.background = 'yellow'
    }
  } else {
    el.style.position = 'static'
    el.style.background = 'gray'
  }
})

new Vue({
  el: "#app",
  data: {
    card1: {
      pinornot: false,
    },
    card2: {
      pinornot: false
    }
  }
})