// 库存管理
const commonMenu = {
    path:"",
    name:"inventory",
    component: () => import('../views/tables.vue'),
    meta:{
        icon: "",
        title: "库存管理",
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
                    path:"/warehouseType",
                    icon: "",
                    name: "warehouseType",
                    meta: {
                        icon: "",
                        title: "入库类型设定",
                        permission:""
                    },
                    components: {
                        warehouseType: () => import('../views/tables.vue') 
                    }
                },
                {
                    path:"/delivery",
                    icon: "",
                    name: "delivery",
                    meta: {
                        icon: "",
                        title: '出库类型设定',
                        permission:""
                    }
                }
            ]
        },
        // 其他出入库作业
        {
            path: "",
            name:"warehouse",
            meta:{
                icon: "",
                title: "其他出入库作业",
                permission:""
            },
            component: () => import('../views/tables.vue'),
            jurisdiction:[
                {
                    path:"/warehouseOther",
                    icon: "",
                    name: "warehouseOther",
                    meta: {
                        icon: "",
                        title: "其他入库单",
                        permission:""
                    },
                    components: {
                        warehouseOther: () => import('../views/tables.vue') 
                    }
                },
                {
                    path:"/deliveryOther",
                    icon: "",
                    name: "deliveryOther",
                    meta: {
                        icon: "",
                        title: '其他出库单',
                        permission:""
                    }
                }
            ]
        },
        {
            path: "",
            name:"allotAndCheck",
            meta:{
                icon: "",
                title: "调拨盘点作业",
                permission:""
            },
            component: () => import('../views/tables.vue'),
            jurisdiction:[
                {
                    path:"/allot",
                    icon: "",
                    name: "allot",
                    meta: {
                        icon: "",
                        title: "调拨单",
                        permission:""
                    },
                    components: {
                        allot: () => import('../views/tables.vue') 
                    }
                },
                {
                    path:"/checkCard",
                    icon: "",
                    name: "checkCard",
                    meta: {
                        icon: "",
                        title: "打印盘点卡",
                        permission:""
                    },
                    components: {
                        checkCard: () => import('../views/tables.vue') 
                    }
                },
                {
                    path:"/check",
                    icon: "",
                    name: "check",
                    meta: {
                        icon: "",
                        title: "盘点单",
                        permission:""
                    },
                    components: {
                        check: () => import('../views/tables.vue') 
                    }
                }
            ]
        },
        {
            path: "",
            name:"tax",
            meta:{
                icon: "",
                title: "调价作业",
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
                        title: "调价单",
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