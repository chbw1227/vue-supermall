import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import BScroll from '@better-scroll/core'
// import Pullup from '@better-scroll/pull-up'

// BScroll.use(Pullup)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// request({
//     url:'/home/multidata'
// },res=>{
//     console.log(res)
// },err=>{
//     console.log(err)
// })
// request({
//     baseConfig:{

//     },
//     success:function(res){

//     },
//     failure:function(err){

//     }
// })
// request({
//     url:'/home/multidata'
// }).then(res=>{
//     console.log(res)
// }).catch(err=>{
//     console.log(err)
// })