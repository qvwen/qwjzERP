// 账款管理
const commonMenu = {
    path:"",
    name:"credit",
    component: () => import('../views/tables.vue'),
    meta:{
        icon: "",
        title: "账款管理",
        permission:""
    },
    jurisdiction:[
        // 冲款作业
        {
            path: "",
            name:"flush",
            meta:{
                icon: "",
                title: "冲款作业",
                permission:""
            },
            component: () => import('../views/tables.vue'),
            jurisdiction:[
                {
                    path:"/accountsReceivable",
                    icon: "",
                    name: "accountsReceivable",
                    meta: {
                        icon: "",
                        title: "应收冲款单",
                        permission:""
                    },
                    components: {
                        accountsReceivable: () => import('../views/tables.vue') 
                    }
                },
                {
                    path:"/payable",
                    icon: "",
                    name: "payable",
                    meta: {
                        icon: "",
                        title: '应付冲款单',
                        permission:""
                    }
                }
            ]
        },
        // 其他出入库作业
        {
            path: "",
            name:"cash",
            meta:{
                icon: "",
                title: "其他应收付作业",
                permission:""
            },
            component: () => import('../views/tables.vue'),
            jurisdiction:[
                {
                    path:"/receivable",
                    icon: "",
                    name: "receivable",
                    meta: {
                        icon: "",
                        title: "其他应收单",
                        permission:""
                    },
                    components: {
                        receivable: () => import('../views/tables.vue') 
                    }
                },
                {
                    path:"/payableOther",
                    icon: "",
                    name: "payableOther",
                    meta: {
                        icon: "",
                        title: '其他应付单',
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