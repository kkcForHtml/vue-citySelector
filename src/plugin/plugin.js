//全局插件
import Axios from 'axios'
import {
    Indicator
} from 'mint-ui';
import {
    Toast
} from 'mint-ui';

const plugin = new Object();

plugin.install = function (Vue) {
    //超时上限
    Axios.defaults.timeout = 10000;
    //后台正式接口站点
    // Axios.defaults.baseURL = 'https://api.example.com';
    //后台测试接口站点
   // Axios.defaults.baseURL = '/ubtrip';
    //封装webservice服务
    let HTTPCOUNT = 0;
    Vue.prototype.$axios = function ({
        methods = 'get', //请求方法
        url = '', //地址
        params = {}, //参数
        showLoading = true //是否显示加载动画
    }) {
        showLoading && Indicator.open('加载中...');
        HTTPCOUNT++;
        return new Promise((resolve, reject) => {
            Axios[methods](url, params).then(data => {
                setTimeout(function () {
                    HTTPCOUNT--;
                    !HTTPCOUNT && Indicator.close();
                    resolve(data);
                }, 1000);
            }, data => {
                HTTPCOUNT--;
                !HTTPCOUNT && Indicator.close();
                Toast(data);
                resolve(data);
            }).catch(data => {
                reject(data);
                Indicator.close();
                if (String(data).indexOf('timeout') !== -1) return Toast('请求超时');
                Toast(data);
            })
        });
    };

}

export {
    plugin
}
