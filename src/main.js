// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'
import MintUI from 'mint-ui'
import store from './store/vuex'
import {filters} from './filters/filters'
import {directives} from './directives/directives'
import {plugin} from './plugin/plugin'
import {components} from './components'
import 'mint-ui/lib/style.min.css'

Vue.use(MintUI);
Vue.use(filters);
Vue.use(directives);
Vue.use(plugin);
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

function isScroller(el) {
    // 判断元素是否为 scroller
    return $(el).parents('.scroll-view .mint-indexlist-content').length;
}

document.body.addEventListener('touchmove', function (ev) {
    var target = ev.target

    // 在 scroller 上滑动，阻止事件冒泡，启用浏览器默认行为。
    if (isScroller(target)) {
        ev.stopPropagation();
    }
});

function preventDefault(ev) {
    ev.preventDefault()
}

document.addEventListener('touchmove', preventDefault, false);


