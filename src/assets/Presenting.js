// 共用资料
const Presenting = {
    path: "",
    name: "common",
    component: () => import('../views/index.vue'),
    meta: {
        icon: "",
        title: "公共资料",
        permission: ""
    },
    children: [
        // 基本资料
        {
            path: "",
            name: "commonBasic",
            meta: {
                icon: "",
                title: "基本资料",
                permission: ""
            },
            components: {
                dept: () => import('../views/tables.vue'),
                program: () => import('../views/tables.vue'),
                area: () => import('../views/tables.vue'),
                tax: () => import('../views/tables.vue')
            },
            children: [
                {
                    path: "/dept",
                    name: "dept",
                    meta: {
                        icon: "",
                        title: "部门设定",
                        permission: ""
                    }
                },
                {
                    path: "/program",
                    name: "program",
                    meta: {
                        icon: "",
                        title: '项目设定',
                        permission: ""
                    }
                },
                {
                    path: "/area",
                    icon: "",
                    name: "area",
                    meta: {
                        icon: "",
                        title: '地区设定',
                        permission: ""
                    }
                },
                {
                    path: "/tax",
                    icon: "",
                    name: "tax",
                    meta: {
                        icon: "",
                        title: '税目设定',
                        permission: ""
                    }
                },
                {
                    path: "/invoice",
                    icon: "",
                    name: "invoice",
                    meta: {
                        icon: "",
                        title: '发票类型设定',
                        permission: ""
                    }
                },
                {
                    path: "/people",
                    icon: "",
                    name: "people",
                    meta: {
                        icon: "",
                        title: '人员主文件设定',
                        permission: ""
                    }
                }
            ]
        },
        // 物料资料
        {
            path: "",
            name: "material",
            meta: {
                icon: "",
                title: "物料资料",
                permission: ""
            },
            children: [
                {
                    path: "/warehouse",
                    icon: "",
                    name: "warehouse",
                    meta: {
                        icon: "",
                        title: "仓库设定",
                        permission: ""
                    }
                }, 
                {
                    path: "/materialType",
                    icon: "",
                    name: "materialType",
                    meta: {
                        icon: "",
                        title: '物料类别设定',
                        permission: ""
                    }
                },
                {
                    path: "/unit",
                    icon: "",
                    name: "unit",
                    meta: {
                        icon: "",
                        title: '计量单位设定',
                        permission: ""
                    }
                },
                {
                    path: "/materiaMaster",
                    icon: "",
                    name: "materiaMaster",
                    meta: {
                        icon: "",
                        title: '物料主文件设定',
                        permission: ""
                    }
                }
            ]
        },
        {
            path: "",
            name: "contact",
            meta: {
                icon: "",
                title: "往来资料",
                permission: ""
            },
            children: [
                {
                    path: "/customerType",
                    icon: "",
                    name: "customerType",
                    meta: {
                        icon: "",
                        title: "客户类别设定",
                        permission: ""
                    }
                },
                {
                    path: "/prospectiveCustomer",
                    icon: "",
                    name: "prospectiveCustomer",
                    meta: {
                        icon: "",
                        title: '潜在客户主文件设定',
                        permission: ""
                    }
                },
                {
                    path: "/customerMaster",
                    icon: "",
                    name: "customerMaster",
                    meta: {
                        icon: "",
                        title: '客户主文件设定',
                        permission: ""
                    }
                },
                {
                    path: "/prospectiveToMaster",
                    icon: "",
                    name: "prospectiveToMaster",
                    meta: {
                        icon: "",
                        title: '潜在客户转正式客户',
                        permission: ""
                    }
                },
                {
                    path: "/supplierType",
                    icon: "",
                    name: "supplierType",
                    meta: {
                        icon: "",
                        title: '供应商类别设定',
                        permission: ""
                    }
                },
                {
                    path: "/supplierMaster",
                    icon: "",
                    name: "supplierMaster",
                    meta: {
                        icon: "",
                        title: '供应商主文件设定',
                        permission: ""
                    }
                }
            ]
        },
        {
            path: "",
            name: "subject",
            meta: {
                icon: "",
                title: "科目资料",
                permission: ""
            },
            children: [
                {
                    path: "/subjectAll",
                    icon: "",
                    name: "subjectAll",
                    meta: {
                        icon: "",
                        title: "科目总类设定",
                        permission: ""
                    }
                },
                {
                    path: "/subjectType",
                    icon: "",
                    name: "subjectType",
                    meta: {
                        icon: "",
                        title: '项目类别设定',
                        permission: ""
                    }
                }
            ]
        }
    ]
}

export default Presenting;