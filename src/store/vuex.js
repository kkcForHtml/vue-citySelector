import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//公共
const base = {
    namespaced: true,
    state:{
        header_name:"",
        link:'',
        right:'',
        showCity:false,
        targetCity:'',
        startCity:'',
        endCity:'',
        te:123
    },
    mutations:{
        changeStaticState(state,params){
            state[params.name] = params.newVal;
        },
        changeList(state){
            this._vm.$axios({
                'url':'/mock',
                'showLoading':false
            }).then(data=>{
                state.te = data.data.res
            })
        }
    },
    actions :{
        getlist({commit,state}){
            this._vm.$axios({ url: '/mock' }).then(data=>{
                commit('changeStaticState',{
                    name:'te',
                    newVal:data.data.res
                })
            })
        }
    }
};
//机票订购
const airline = {
    namespaced: true,
    state:{

    },
    actions:{

    },
    mutations:{

    }
};
//火车票订购
const train = {
    namespaced: true,
    state:{

    },
    actions:{

    },
    mutations:{

    }
};
//酒店订购
const wineshop = {
    namespaced: true,
    state:{

    },
    actions:{

    },
    mutations:{

    }
};


export default new Vuex.Store({
    modules:{
        base,
        airline,
        train,
        wineshop
    }
})
