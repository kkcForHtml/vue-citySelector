<template>
    <mt-header :title="title">
        <router-link :to="gob" slot="left" v-show="gob.name!==undefined">
            <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button icon="back" slot="left" v-show="gob.popup=='hide'" @click="hidePopup"></mt-button>
        <mt-button slot="right">
            <i class="iconfont icon-dianhuatianchong" v-if="right==='phone'" @click="showPhoneNumber"></i>
            <router-link to="/index" v-if="right==='home'">
                <i class="iconfont icon-home_fill_light"></i>
            </router-link>
        </mt-button>
    </mt-header>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        goback: {
            type: String,
            default:'{}'
            //default: ()=>({})
        },
        right: {
            type: String,
            default: ''
        }

    },
    methods: {
        ...mapMutations('base',['changeStaticState']),
        showPhoneNumber() {
            this.$messagebox({
                message:`<a href="tel:400-888-555" style="font-weight:bold;color:#26a2ff;text-decoration:underline;">400-888-555</a>`,
                title:'客服电话'
            })
        },
        hidePopup() {
            this.changeStaticState({
                name:'showCity',
                newVal:false
            })
        }
    },
    computed: {
        ...mapState('base',['showCity']),
        gob() {
            return eval(`(${this.goback})`);
        }
    },
  components:{

  }
}
</script>
<style lang="scss">
    .is-right{
        margin-right: 4px;
        .iconfont{
            font-size: 18px;
            color: white;

        }
    }
</style>

