import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import tables from './views/tables.vue'
import index from './views/index.vue'

import Presenting from './assets/Presenting.js'
import CreditMenu from './assets/CreditMenu'
import InventoryMenu from './assets/InventoryMenu'
import SaleMenu from './assets/SaleMenu'
import purchasing from './assets/purchasing'
import addsection  from './views/quwenjia/addsection'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'tables',
      component: index,
      children: [
        {
          path: '/',
          name: 'ss',
          components: {
            default: index,
            a: tables,
             b: Home
            // dept: () => import('./views/tables.vue'),
            //  program: () => import('./views/tables.vue'),
            //  area: () => import('./views/tables.vue'),
            //  tax: () => import('./views/tables.vue')
          }
        }, 
        {
          path: '/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        }
      ]
    }, 
    {
      path: '/Home',
      name: 'Home',
      component: Home
    }, 
    Presenting,
    CreditMenu,
    InventoryMenu,
    SaleMenu,
    purchasing
  ]
})
