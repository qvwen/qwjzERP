// 销售管理
const commonMenu = {
    path:"",
    name:"sale",
    component: () => import('../views/index.vue'),
    meta:{
        icon: "",
        title: "销售管理",
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
                    path:"/saleRequireType",
                    icon: "",
                    name: "saleRequireType",
                    meta: {
                        icon: "",
                        title: "销售订单类型设定",
                        permission:""
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
            },components:{
                saleInvoice:()=>import("../views/hejianfu/invoiceforsales.vue"),
                saleEnquiry:()=>import("../views/liaoshuanchen/baojia.vue"),
                saleOrder:()=>import("../views/liaoshuanchen/dingdan.vue"),
                saleInvoicef:()=>import("../views/liaoshuanchen/fapiao.vue"),
                salesReturn:()=>import("../views/yangkaibo/returnAdd.vue"),
                saleInvoicez:()=>import("../views/liaoshuanchen/zherang.vue"),
                saleStorage:()=>import("../views/yangkaibo/out.vue")
            },
            children:[
                {
                    path:"/saleEnquiry",
                    icon: "",
                    name: "saleEnquiry",
                    meta: {
                        icon: "",
                        title: "销售报价单",
                        permission:""
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
                    path:"/saleInvoicef",
                    icon: "",
                    name: "saleInvoicef",
                    meta: {
                        icon: "",
                        title: '销售发票',
                        permission:""
                    }
                }, {
                    path:"/saleInvoicez",
                    icon: "",
                    name: "saleInvoicez",
                    meta: {
                        icon: "",
                        title: '销售折让确认单',
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
            children:[
                {
                    path:"/saleInvoiceOut",
                    icon: "",
                    name: "saleInvoiceOut",
                    meta: {
                        icon: "",
                        title: "销售发票导出",
                        permission:""
                    }
                }
            ]
        }, {
            path: "",
            name:"tax",
            meta:{
                icon: "",
                title: "常用报表",
                permission:""
            },components:{
                ReceivablesDetailed:()=>import("../views/yangkaibo/ReceivablesDetailed.vue"),
                CustomerReceiptDetailed:()=>import("../views/yangkaibo/CustomerReceiptDetailed.vue"),
                SalesmanReceiptDetailed:()=>import("../views/yangkaibo/SalesmanReceiptDetailed.vue"),
                profitQuery:()=>import("../views/yangkaibo/profitQuery.vue")
            },
            children:[
                {
                    path:"/CustomerReceiptDetailed",
                    icon: "",
                    name: "CustomerReceiptDetailed",
                    meta: {
                        icon: "",
                        title: "客户应收款明细表",
                        permission:""
                    }
                }, {
                    path:"/SalesmanReceiptDetailed",
                    icon: "",
                    name: "SalesmanReceiptDetailed",
                    meta: {
                        icon: "",
                        title: "业务员应收款明细表",
                        permission:""
                    }
                },{
                    path:"/profitQuery",
                    icon: "",
                    name: "profitQuery",
                    meta: {
                        icon: "",
                        title: "利润预估查询",
                        permission:""
                    }
                }, {
                    path:"/ReceivablesDetailed",
                    icon: "",
                    name: "ReceivablesDetailed",
                    meta: {
                        icon: "",
                        title: "应收款明细表",
                        permission:""
                    }
                }
            ]
        }
    ]
}

export default commonMenu;