// 采购管理
const purchasing = {
    path:"",
    name:"purchase",
    component: () => import('../views/index.vue'),
     meta:{
        icon: "",
        title: "采购管理",
        permission:""
    },
    children:[
        // 基本资料
        {
            path: "",
            name:"commonBasic",
            meta:{
                icon: "",
                title: "基本资料",
                permission:""
            },
                        children:[
                {
                    path:"/purchaseRequireType",
                    icon: "",
                    name: "purchaseRequireType",
                    meta: {
                        icon: "",
                        title: "采购请购类型设定",
                        permission:""
                    },
                    components: {
                        purchaseRequireType: () => import('../views/tables.vue') 
                    }
                },
                {
                    path:"/purchaseSystem",
                    icon: "",
                    name: "purchaseSystem",
                    meta: {
                        icon: "",
                        title: '采购入库类型设定',
                        permission:""
                    }
                },
                {
                    path:"/purchaseOrder",
                    icon: "",
                    name: "purchaseOrder",
                    meta: {
                        icon: "",
                        title: '采购订单类型设定',
                        permission:""
                    }
                }
            ]
        },
        // 采购作业
        {
            path: "",
            name:"purchaseOperation",
            meta:{
                icon: "",
                title: "采购作业",
                permission:""
            },components: {
                purchaseStorage: () => import('../views/luoq/purchasereceipt.vue'),
                // purchaseReturn:() => import('../views/luoq/index.vue'),
                purchaseReturn:() => import('../views/chenghan/refund.vue'),
                allowance:() => import('../views/chenghan/allowance.vue'),
                enquir:() => import('../views/chenghan/enquiry.vue'),
                purchaseInvoice:() => import('../views/chenghan/purchaseInvoice.vue'),
                purchasing:()=> import('../views/chenghan/purchasing.vue'),
                requisition:()=> import('../views/chenghan/requisition.vue'),
                warehousing:()=> import('../views/chenghan/warehousing.vue')
            },
             children:[
                {
                    path:"/enquir",
                    icon: "",
                    name: "enquir",
                    meta: {
                        icon: "",
                        title: "采购询价单",
                        permission:""
                    }
                }, {
                    path:"/purchasing",
                    icon: "",
                    name: "purchasing",
                    meta: {
                        icon: "",
                        title: "采购订单",
                        permission:""
                    }
                },
                {
                    path:"/requisition",
                    icon: "",
                    name: "requisition",
                    meta: {
                        icon: "",
                        title: '采购请购单',
                        permission:""
                    }
                }, {
                    path:"/allowance",
                    icon: "",
                    name: "allowance",
                    meta: {
                        icon: "",
                        title: '采购折让确认单',
                        permission:""
                    }
                },
                {
                    path:"/warehousing",
                    icon: "",
                    name: "warehousing",
                    meta: {
                        icon: "",
                        title: '采购入库单',
                        permission:""
                    }
                },
                {
                    path:"/purchaseReturn",
                    icon: "",
                    name: "purchaseReturn",
                    meta: {
                        icon: "",
                        title: '采购退货单',
                        permission:""
                    }
                },
                {
                    path:"/purchaseInvoice",
                    icon: "",
                    name: "purchaseInvoice",
                    meta: {
                        icon: "",
                        title: '采购发票',
                        permission:""
                    }
                }
            ]
        },
        {
            path: "",
            name:"apportion",
            meta:{
                icon: "",
                title: "分摊作业",
                permission:""
            },components: {
                apportionWork:()=>import("../views/luoq/procurementallocation.vue")
            },
             children:[
                {
                    path:"/apportionWork",
                    icon: "",
                    name: "apportionWork",
                    meta: {
                        icon: "",
                        title: "采购分摊作业",
                        permission:""
                    } 
                }
            ]
        }
    ]
}

export default purchasing;