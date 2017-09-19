import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//公共
const base = {
    namespaced: true,
    state: {
        header_name: "",
        link: '',
        right: '',
        showCity: false,
        targetCity: '',
        startCity: '',
        endCity: '',
    },
    mutations: {
        changeStaticState(state, params) {
            state[params.name] = params.newVal;
        }
    },
    actions: {

    }
}


export default new Vuex.Store({
    modules: {
        base
    }
})
