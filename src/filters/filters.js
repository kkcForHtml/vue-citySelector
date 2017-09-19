
//全局过滤器
const filters = new Object();

filters.install = function (Vue) {
    Vue.filter('test', function (val) {
        return val.toUpperCase();
    });    
}

export {filters}