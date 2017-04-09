import Vue from 'vue'
import Router from 'vue-router'
import mainComponent from '@/components/main-comp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: mainComponent
    }
  ],
  mode: 'history'
})
