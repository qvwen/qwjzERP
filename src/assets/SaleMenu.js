// 销售管理
const commonMenu = {
    path:"",
    name:"sale",
    component: () => import('../views/tables.vue'),
    meta:{
        icon: "",
        title: "销售管理",
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
                    path:"/saleRequireType",
                    icon: "",
                    name: "saleRequireType",
                    meta: {
                        icon: "",
                        title: "销售订单类型设定",
                        permission:""
                    },
                    components: {
                        saleRequireType: () => import('../views/tables.vue') 
                    }
                },
                {
                    path:"/outbound",
                    icon: "",
                    name: "outbound",
                    meta: {
                        icon: "",
                        title: '销售出库类型设定',
                        permission:""
                    }
                }
            ]
        },
        // 销售作业
        {
            path: "",
            name:"saleWork",
            meta:{
                icon: "",
                title: "销售作业",
                permission:""
            },
            component: () => import('../views/tables.vue'),
            jurisdiction:[
                {
                    path:"/saleEnquiry",
                    icon: "",
                    name: "saleEnquiry",
                    meta: {
                        icon: "",
                        title: "销售报价单",
                        permission:""
                    },
                    components: {
                        saleEnquiry: () => import('../views/tables.vue') 
                    }
                },
                {
                    path:"/saleOrder",
                    icon: "",
                    name: "saleOrder",
                    meta: {
                        icon: "",
                        title: '销售订单',
                        permission:""
                    }
                },
                {
                    path:"saleStorage",
                    icon: "",
                    name: "saleStorage",
                    meta: {
                        icon: "",
                        title: '销售出库单',
                        permission:""
                    }
                },
                {
                    path:"/salesReturn",
                    icon: "",
                    name: "salesReturn",
                    meta: {
                        icon: "",
                        title: '销售退货单',
                        permission:""
                    }
                },
                {
                    path:"/saleInvoice",
                    icon: "",
                    name: "saleInvoice",
                    meta: {
                        icon: "",
                        title: '销售发票',
                        permission:""
                    }
                }
            ]
        },
        {
            path: "",
            name:"tax",
            meta:{
                icon: "",
                title: "金税接口",
                permission:""
            },
            component: () => import('../views/tables.vue'),
            jurisdiction:[
                {
                    path:"/saleInvoiceOut",
                    icon: "",
                    name: "saleInvoiceOut",
                    meta: {
                        icon: "",
                        title: "销售发票导出",
                        permission:""
                    },
                    components: {
                        saleInvoiceOut: () => import('../views/tables.vue') 
                    }
                }
            ]
        }
    ]
}

export default commonMenu;