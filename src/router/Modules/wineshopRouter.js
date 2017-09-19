//酒店路由
const wineshopRouter = [
    //酒店

    {
        path: '/wineshop/index', //酒店首页
        name: 'wineshop.index',
        component(resovle) {
            require(['@/pages/wineshop/index'], resovle)
        }
    },
    {
        path: '/wineshop/index/details', //酒店详细信息
        name: 'wineshop.details',
        component(resovle) {
            require(['@/pages/wineshop/details'], resovle)
        }
    },
    {
        path: '/wineshop/index/order', //酒店订单
        name: 'wineshop.order',
        component(resovle) {
            require(['@/pages/wineshop/order'], resovle)
        }
    },
    {
        path: '/wineshop/index/orderlist', //酒店订单列表
        name: 'wineshop.orderlist',
        component(resovle) {
            require(['@/pages/wineshop/orderlist'], resovle)
        }
    },
    {
        path: '/wineshop/index/hotel', //酒店信息
        name: 'wineshop.hotel',
        component(resovle) {
            require(['@/pages/wineshop/hotel'], resovle)
        }
    },
    {
        path: '/wineshop/index/list', //酒店列表
        name: 'wineshop.list',
        component(resovle) {
            require(['@/pages/wineshop/list'], resovle)
        }
    },
    {
        path: '/wineshop/index/refund', //订购页面
        name: 'wineshop.refund',
        component(resovle) {
            require(['@/pages/wineshop/refund'], resovle)
        }
    }

]

export {
    wineshopRouter
}
