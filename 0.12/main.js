//下面两个组件都是控制显示隐藏，visible数据是重复的
//mixin可用来分发可复用功能，直接在组件中引入mixin的名字就行
//组件中重复声明mixin的同名属性，会覆盖mixin，如下visible

var base = {
    methods: {
        show: function () {
            this.visible = true
        },
        hide: function () {
            this.visible = false
        },
        toggle: function () {
            this.visible = !this.visible
        }
    },
    data: function () {
        return {
            visible: false //默认不显示文字
        }
    },
}

Vue.component('tooltip', {
    template: `
      <div>
        <span @mouseenter="show" @mouseleave="hide">你说什么？</span>
        <div v-if="visible">嘴巴嘟嘟</div>
      </div>
    `,
    mixins: [base],
    data: function() {
        return {
            visible: true
        }
    }
})

Vue.component('popup', {
    template: `
    <div>
      <button @click="toggle">显示弹窗</button>
      <div v-if="visible">
      <span @click="hide">X</span>
        <h4>title</h4>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem consectetur est consequatur ipsam error nulla obcaecati laudantium libero quisquam beatae repudiandae magnam saepe, ut recusandae similique? Sunt repudiandae neque omnis.
      </div>
    </div>
  `,
    mixins: [base]
})

new Vue({
    el: "#app"
})