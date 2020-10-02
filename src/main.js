// 入口JS
import Vue from 'vue'
import App from './App.vue'
import router from './router'

//注册全局组件标签

new Vue({
    el: '#app',
    render: h => h(App),
    router
})
