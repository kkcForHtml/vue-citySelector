//我的商旅路由
const profileRouter = [
    {
        path: '/profile/index', //列表
        name: 'profile.index',
        component(resovle) {
            require(['@/pages/profile/index'], resovle)
        }
    }
]

export {
    profileRouter
}
