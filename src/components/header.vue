<template>
    <mt-header :title="title">
        <mt-button icon="back" slot="left" v-show="gob.popup=='hide'" @click="hidePopup"></mt-button>
    </mt-header>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        goback: {
            type: String,
            default: '{}'
            //default: ()=>({})
        },
        right: {
            type: String,
            default: ''
        }

    },
    methods: {
        ...mapMutations('base', ['changeStaticState']),
        hidePopup() {
            this.changeStaticState({
                name: 'showCity',
                newVal: false
            })
        }
    },
    computed: {
        ...mapState('base', ['showCity']),
        gob() {
            return eval(`(${this.goback})`);
        }
    },
    components: {

    }
}
</script>
<style lang="scss">
.is-right {
    margin-right: 4px;
    .iconfont {
        font-size: 18px;
        color: white;
    }
}
</style>

