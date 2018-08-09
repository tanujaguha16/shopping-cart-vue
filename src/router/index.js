import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BoxSelector from '@/components/BoxSelector'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/box-selector',
      name: 'BoxSelector',
      component: BoxSelector
    }
  ]
})
