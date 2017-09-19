//飞机票路由
const airlineRouter = [
    // 机票
    {
        path: '/airline/index', //机票首页
        name: 'airline.index',
        component(resovle) {
            require(['@/pages/airline/index'], resovle)
        }
    },
    {
        path: '/airline/index/details', //机票详细信息
        name: 'airline.details',
        component(resovle) {
            require(['@/pages/airline/details'], resovle)
        }
    },
    {
        path: '/airline/index/order', //机票订单
        name: 'airline.order',
        component(resovle) {
            require(['@/pages/airline/order'], resovle)
        }
    },
    {
        path: '/airline/index/orderlist', //机票订单列表
        name: 'airline.orderlist',
        component(resovle) {
            require(['@/pages/airline/orderlist'], resovle)
        }
    },
    {
        path: '/airline/index/flight', //航班信息
        name: 'airline.flight',
        component(resovle) {
            require(['@/pages/airline/flight'], resovle)
        }
    },
    {
        path: '/airline/index/list', //机票列表
        name: 'airline.list',
        component(resovle) {
            require(['@/pages/airline/list'], resovle)
        }
    },
    {
        path: '/airline/index/refund', //购票页面
        name: 'airline.refund',
        component(resovle) {
            require(['@/pages/airline/refund'], resovle)
        }
    }

]

export {
    airlineRouter
}
