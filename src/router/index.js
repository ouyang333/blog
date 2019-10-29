import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Tablet from '@/components/page/tablet'
import '@/assets/common.css'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home,
    children: [{
      path: '/tablet',
      name: 'Tablet',
      component: Tablet
    }
    ]
  },

  ]
})
