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
import   user from './assets/user'
// import addsection  from './views/quwenjia/addsection'
// import stock from './views/wen/stocking.vue'
// import allot from './views/wen/allot.vue'
// import pricea from './views/wen/priceadjustment.vue'
// import payee from './views/wen/payee.vue'
// import stockaccount from './views/wen/stockaccount'
// import dull from './views/wen/dull'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: '/',
          name: 'main',
          components: {
            purchaseStorage: () => import('./views/luoq/purchasereceipt.vue'),
            // purchaseReturn:() => import('../views/luoq/index.vue'),
            purchaseReturn:() => import('./views/chenghan/refund.vue'),
            allowance:() => import('./views/chenghan/allowance.vue'),
            enquir:() => import('./views/chenghan/enquiry.vue'),
            purchaseInvoice:() => import('./views/liaoshuanchen/caigoufapiao.vue'),
            purchasing:()=> import('./views/chenghan/purchasing.vue'),
            requisition:()=> import('./views/chenghan/requisition.vue'),
            warehousing:()=> import('./views/chenghan/warehousing.vue'), 
            apportionWork:()=>import("./views/luoq/procurementallocation.vue"),   
            accountsReceivable: () => import('./views/hejianfu/Accounts.vue'),
            payable:() => import('./views/chenghan/accountsPayable.vue'),
            receivable:() => import('./views/tables.vue'),
            payableOther:() => import('./views/tables.vue'),
            yvshoukd:() => import('./views/hejianfu/Inadvanceofvoucher.vue'),
            Accounts:() => import('./views/hejianfu/Accounts.vue'),
            aging:() => import('./views/hejianfu/aging.vue'), 
            allot :() => import('./views/wen/allot.vue'),
            checkCard:() => import('./views/tables.vue'),
            saleInvoiceOut:() => import('./views/tables.vue'),
            intostock:() => import('./views/liaoshuanchen/qitaruku.vue'),
            outstocks:() => import('./views/liaoshuanchen/qitachuku.vue'),
            checks: () =>  import('./views/wen/stocking.vue'),
            allots:() =>  import('./views/wen/allot.vue'),
            saleInvoiceOuts: () =>  import('./views/wen/stockaccount.vue'),
            Department: () => import('./views/quwenjia/Department.vue'),
            program: () => import('./views/tables.vue'),
            area: () => import('./views/tables.vue'),
            tax: () => import('./views/tables.vue'),
            Personnel:() => import('./views/quwenjia/Personnel.vue'),
            Warehouse:()=>import("./views/quwenjia/Warehouse.vue"),
            Materialclass:()=>import("./views/quwenjia/Materialclass.vue"),
            Measure:()=>import("./views/quwenjia/Measure.vue"),
            Material:()=>import("./views/quwenjia/Material.vue"),
            Clientclass:()=>import("./views/quwenjia/Clientclass.vue"),
            Personnel:()=>import("./views/quwenjia/Personnel.vue"),
            Supplier:()=>import("./views/quwenjia/Personnel.vue"),
            Supplierclass:()=>import("./views/quwenjia/Supplierclass.vue"),
            saleInvoice:()=>import("./views/hejianfu/invoiceforsales.vue"),
            saleEnquiry:()=>import("./views/liaoshuanchen/baojia.vue"),
            saleOrder:()=>import("./views/liaoshuanchen/dingdan.vue"),
            saleInvoicef:()=>import("./views/liaoshuanchen/fapiao.vue"),
            salesReturn:()=>import("./views/yangkaibo/returnAdd.vue"),
            saleInvoicez:()=>import("./views/liaoshuanchen/zherang.vue"),
            saleStorage:()=>import("./views/yangkaibo/out.vue"),
            ReceivablesDetailed:()=>import("./views/yangkaibo/ReceivablesDetailed.vue"),
            CustomerReceiptDetailed:()=>import("./views/yangkaibo/CustomerReceiptDetailed.vue"),
            SalesmanReceiptDetailed:()=>import("./views/yangkaibo/SalesmanReceiptDetailed.vue"),
            profitQuery:()=>import("./views/yangkaibo/profitQuery.vue"),
            role:()=>import("./views/quwenjia/RoleS.vue"),
            default: index
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
    },{
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/login.vue')
    },{
      path: '/RoleS',
      name: 'RoleS',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/quwenjia/RoleS.vue')
    }, 
    Presenting,
    CreditMenu,
    InventoryMenu,
    SaleMenu,
    purchasing,
    user
  ]
})
