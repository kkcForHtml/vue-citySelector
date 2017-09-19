//全局组件
import vHeader from '@/components/header'

const components = new Object();

components.install = function (Vue) {
    Vue.component('vHeader', vHeader)
}

export {
    components
}
