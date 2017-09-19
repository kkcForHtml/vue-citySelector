import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import List from '@/pages/list'
import Index from '@/pages/site/index'
import Infinitelist from '@/pages/infinitelist'
import {airlineRouter} from './Modules/airlineRouter'
import {trainRouter} from './Modules/trainRouter';
import {wineshopRouter} from './Modules/wineshopRouter';
import { approveRouter } from './Modules/approveRouter';
import { profileRouter } from './Modules/profileRouter';

Vue.use(Router)
let routes = [{
        path: '*',
        redirect: '/index'
    },
    {
        path: '/index', //首页
        name: 'index',
        component: Index
    },
    {
        path: '/login', //登陆
        name: 'login',
        component(resovle) {
            require(['@/pages/site/login'], resovle)
        }
    },
    {
        path: '/success', //订票成功界面
        name: 'success',
        component(resovle) {
            require(['@/pages/site/success'], resovle)
        }
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/home/list',
        name: 'List.list',
        component(resovle) {
            require(['@/pages/list'], resovle);
        }
    },
    {
        path: '/home/infinitelist',
        name: 'infinitelist',
        component: Infinitelist
    }

]

routes = [...routes, ...airlineRouter,...wineshopRouter,...trainRouter,...approveRouter,...profileRouter];

export default new Router({
    mode: 'history',
    routes
})
