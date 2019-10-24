import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Latest from '@/components/page/latest'
import '@/assets/common.css'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home,
    children: [{
      path: '/latest',
      name: 'Latest',
      component: Latest
    }
    ]
  },

  ]
})
