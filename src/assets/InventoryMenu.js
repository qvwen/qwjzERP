// 库存管理
const InventoryMenu = {
    path:"",
    name:"inventory",
    component: () => import('../views/index.vue'),
    meta:{
        icon: "",
        title: "库存管理",
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
                    path:"/warehouseType",
                    icon: "",
                    name: "warehouseType",
                    meta: {
                        icon: "",
                        title: "入库类型设定",
                        permission:""
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
            },components:{
                // intostock:() => import('../views/wen/intostock.vue'),
                // outstocks:() => import('../views/liaoshuanchen/chuku.vue')
            },
             children:[
                {
                    path:"/intostock",
                    icon: "",
                    name: "intostock",
                    meta: {
                        icon: "",
                        title: "其他入库单",
                        permission:""
                    } 
                },
                {
                    path:"/outstocks",
                    icon: "",
                    name: "outstocks",
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
            components:{
                // checks: () =>  import('../views/wen/stocking.vue'),
                // allots:() =>  import('../views/wen/allot.vue')
            },
             children:[
                {
                    path:"/allots",
                    icon: "",
                    name: "allots",
                    meta: {
                        icon: "",
                        title: "调拨单",
                        permission:""
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
                    } 
                },
                {
                    path:"/checks",
                    icon: "",
                    name: "checks",
                    meta: {
                        icon: "",
                        title: "盘点单",
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
                title: "调价作业",
                permission:""
            },
            components:{
                // saleInvoiceOuts: () =>  import('../views/wen/stockaccount.vue') 
            },
             children:[
                {
                    path:"/saleInvoiceOuts",
                    icon: "",
                    name: "saleInvoiceOuts",
                    meta: {
                        icon: "",
                        title: "调价单",
                        permission:""
                    } 
                }
            ]
        }
    ]
}

export default InventoryMenu;