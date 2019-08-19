// 账款管理
const commonMenu = {
    path: "",
    name: "credit",
    component: () => import('../views/index.vue'),
    meta: {
        icon: "",
        title: "账款管理",
        permission: ""
    },
    children: [
        // 冲款作业
        {
            path: "",
            name: "flush",
            meta: {
                icon: "",
                title: "冲款作业",
                permission: ""
            },components: {
                accountsReceivable: () => import('../views/hejianfu/Accounts.vue'),
                payable:() => import('../views/chenghan/accountsPayable.vue')
            },
            children: [
                {
                    path: "/accountsReceivable",
                    icon: "",
                    name: "accountsReceivable",
                    meta: {
                        icon: "",
                        title: "应收冲款单",
                        permission: ""
                    } 
                },
                {
                    path: "/payable",
                    icon: "",
                    name: "payable",
                    meta: {
                        icon: "",
                        title: '应付冲款单',
                        permission: ""
                    }
                }
            ]
        },
        // 其他出入库作业
        {
            path: "",
            name: "cash",
            meta: {
                icon: "",
                title: "其他应收付作业",
                permission: ""
            },components:{
                receivable:() => import('../views/tables.vue'),
                payableOther:() => import('../views/tables.vue'),
                yvshoukd:() => import('../views/hejianfu/Inadvanceofvoucher.vue'),
                Accounts:() => import('../views/hejianfu/Accounts.vue'),
                aging:() => import('../views/hejianfu/aging.vue')
            },  
            children: [
                {
                    path: "/receivable",
                    icon: "",
                    name: "receivable",
                    meta: {
                        icon: "",
                        title: "其他应收单",
                        permission: ""
                    } 
                },
                {
                    path: "/payableOther",
                    icon: "",
                    name: "payableOther",
                    meta: {
                        icon: "",
                        title: '其他应付单',
                        permission: ""
                    } 
                },{
                    path: "/yvshoukd",
                    icon: "",
                    name: "yvshoukd",
                    meta: {
                        icon: "",
                        title: '预收款单',
                        permission: ""
                    } 
                },{
                    path: "/Accounts",
                    icon: "",
                    name: "Accounts",
                    meta: {
                        icon: "",
                        title: '应收冲款单',
                        permission: ""
                    } 
                },{
                    path: "/aging",
                    icon: "",
                    name: "aging",
                    meta: {
                        icon: "",
                        title: '应收账款账龄分析表',
                        permission: ""
                    } 
                }
               
            ]
        },
        {
            path: "",
            name: "allotAndCheck",
            meta: {
                icon: "",
                title: "调拨盘点作业",
                permission: ""
            },components:{
                allot:() => import('../views/wen/allot.vue'),
                checkCard:() => import('../views/tables.vue'),
            },
            children: [
                {
                    path: "/allot",
                    icon: "",
                    name: "allot",
                    meta: {
                        icon: "",
                        title: "调拨单",
                        permission: ""
                    },
                    components: {
                        allot: () => import('../views/tables.vue')
                    }
                },
                {
                    path: "/checkCard",
                    icon: "",
                    name: "checkCard",
                    meta: {
                        icon: "",
                        title: "打印盘点卡",
                        permission: ""
                    },
                    components: {
                        checkCard: () => import('../views/tables.vue')
                    }
                },
                {
                    path: "/check",
                    icon: "",
                    name: "check",
                    meta: {
                        icon: "",
                        title: "盘点单",
                        permission: ""
                    }
                }
            ]
        },
        {
            path: "",
            name: "tax",
            meta: {
                icon: "",
                title: "调价作业",
                permission: ""
            },components:{
                saleInvoiceOut:() => import('../views/tables.vue')
            },
            children: [
                {
                    path: "/saleInvoiceOut",
                    icon: "",
                    name: "saleInvoiceOut",
                    meta: {
                        icon: "",
                        title: "调价单",
                        permission: ""
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