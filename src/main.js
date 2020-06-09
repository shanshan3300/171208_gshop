// 入口JS
import Vue from 'vue'
import App from './App.vue'
import router from './router'

new Vue({
    el: '#app',
    render: h => h(App),
    router//多了<route-link>,<route-view>,<keep-alive>组件标签，多了两个属性$route,$router.
})
