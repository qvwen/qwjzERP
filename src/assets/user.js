// 权限管理
const user = {
    path:"",
    name:"sale",
    component: () => import('../views/index.vue'),
    meta:{
        icon: "",
        title: "角色管理",
        permission:""
    },
    children:[
        // 基本资料
        {
            path: "",
            name:"qx",
            meta:{
                icon: "",
                title: "权限管理",
                permission:""
            },
            children:[
                {
                    path:"/ss",
                    icon: "",
                    name: "ss",
                    meta: {
                        icon: "",
                        title: "新增用户",
                        permission:""
                    } 
                },
                {
                    path:"/role",
                    icon: "",
                    name: "role",
                    meta: {
                        icon: "",
                        title: '新增角色',
                        permission:""
                    }
                }
            ]
        } 
    ]
}

export default user;