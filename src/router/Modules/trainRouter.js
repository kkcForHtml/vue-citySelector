//火车票路由
const trainRouter = [
    //火车票
    {
        path: '/train/index', //火车票首页
        name: 'train.index',
        component(resovle) {
            require(['@/pages/train/index'], resovle)
        }
    },
    {
        path: '/train/index/details', //火车票详细信息
        name: 'train.details',
        component(resovle) {
            require(['@/pages/train/details'], resovle)
        }
    },
    {
        path: '/train/index/order', //火车票订单
        name: 'train.order',
        component(resovle) {
            require(['@/pages/train/order'], resovle)
        }
    },
    {
        path: '/train/index/orderlist', //火车票订单列表
        name: 'train.orderlist',
        component(resovle) {
            require(['@/pages/train/orderlist'], resovle)
        }
    },
    {
        path: '/train/index/flight', //车次信息
        name: 'train.flight',
        component(resovle) {
            require(['@/pages/train/flight'], resovle)
        }
    },
    {
        path: '/train/index/list', //火车票列表
        name: 'train.list',
        component(resovle) {
            require(['@/pages/train/list'], resovle)
        }
    },
    {
        path: '/train/index/refund', //购票页面
        name: 'train.refund',
        component(resovle) {
            require(['@/pages/train/refund'], resovle)
        }
    }

]

export {
    trainRouter
}
