// 采购管理
const purchasing = {
    path:"",
    name:"purchase",
    component: () => import('../views/tables.vue'),
    meta:{
        icon: "",
        title: "采购管理",
        permission:""
    },
    jurisdiction:[
        // 基本资料
        {
            path: "",
            name:"commonBasic",
            meta:{
                icon: "",
                title: "基本资料",
                permission:""
            },
            component: () => import('../views/tables.vue'),
            jurisdiction:[
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
                title: "采购订单",
                permission:""
            },
            component: () => import('../views/tables.vue'),
            jurisdiction:[
                {
                    path:"/purchaseEnquiry",
                    icon: "",
                    name: "purchaseEnquiry",
                    meta: {
                        icon: "",
                        title: "采购询价单",
                        permission:""
                    },
                    components: {
                        purchaseEnquiry: () => import('../views/tables.vue') 
                    }
                },
                {
                    path:"/purchaseRequisitions",
                    icon: "",
                    name: "purchaseRequisitions",
                    meta: {
                        icon: "",
                        title: '采购请购单',
                        permission:""
                    }
                },
                {
                    path:"purchaseStorage",
                    icon: "",
                    name: "purchaseStorage",
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
            },
            component: () => import('../views/tables.vue'),
            jurisdiction:[
                {
                    path:"/apportionWork",
                    icon: "",
                    name: "apportionWork",
                    meta: {
                        icon: "",
                        title: "采购分摊作业",
                        permission:""
                    },
                    components: {
                        apportionWork: () => import('../views/tables.vue') 
                    }
                }
            ]
        }
    ]
}

export default purchasing;