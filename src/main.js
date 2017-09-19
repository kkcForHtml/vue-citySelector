// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'
import MintUI from 'mint-ui'
import store from './store/vuex'
import {components} from './components'
import 'mint-ui/lib/style.min.css'

Vue.use(MintUI);
Vue.use(components);

Vue.config.productionTip = true;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {
        App
    }
});

