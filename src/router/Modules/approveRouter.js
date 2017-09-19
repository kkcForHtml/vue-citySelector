//授权管理路由
const approveRouter = [
    {
        path: '/approve/list', //列表
        name: 'approve.list',
        component(resovle) {
            require(['@/pages/approve/list'], resovle)
        }
    },
    {
        path: '/approve/details', //详情
        name: 'approve.details',
        component(resovle) {
            require(['@/pages/approve/details'], resovle)
        }
    }
]

export {
    approveRouter
}
