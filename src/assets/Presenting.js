const Presenting = {
    path:"",
    name:"credit",
    component: ()=>import('../views/addsection.vue'),
    meta:{
        icon:"",
        title:"公共资料",
        permission: ""
    },jurisdiction:[{
        path: "/dept",
        icon:"",
        name: "dept",
        meta:{
            icon: "",
            title: "部门设定",
            permission: ""
        },
        components: {
            dept: () => import('../views/table.vue')
        }
    },{
        path: "/dept",
        icon:"",
        name: "dept",
        meta:{
            icon: "",
            title: "部门设定",
            permission: ""
        },
        components: {
            dept: () => import('../views/table.vue')
        } 
    },{
        path: "/dept",
        icon:"",
        name: "dept",
        meta:{
            icon: "",
            title: "部门设定",
            permission: ""
        },
        components: {
            dept: () => import('../views/table.vue')
        } 
    },{
        path: "/dept",
        icon:"",
        name: "dept",
        meta:{
            icon: "",
            title: "部门设定",
            permission: ""
        },
        components: {
            dept: () => import('../views/table.vue')
        } 
    },{
        path: "/dept",
        icon:"",
        name: "dept",
        meta:{
            icon: "",
            title: "部门设定",
            permission: ""
        },
        components: {
            dept: () => import('../views/table.vue')
        } 
    }]
}