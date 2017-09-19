import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'

Vue.use(Router)
let routes = [{
        path: '*',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    }

]

routes = [...routes];

export default new Router({
    mode: 'history',
    routes
})
