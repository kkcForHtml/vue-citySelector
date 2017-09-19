<template>
    <div class="list main-view">
        <v-header title="列表" goback="{name:'Home'}" right="home"></v-header>
        <scroll-view @changeScrollViewData="changeData" :url="url" :limit="limit" :total="total">
            <ul slot="container">
                <li v-for="(item,index) in arr" v-alert="item.url" :key="index">{{item.url}}</li>
            </ul>
        </scroll-view>
    </div>
</template>

    <script>
import { mapMutations } from 'vuex';
export default {
    data() {
        return {
            url:'/mock/test',
            limit:10,
            total:67,
            arr: [],
            goback:{name:'Home'}
        }
    },
    methods: {
        changeData(data){
            this.arr = data
        },
        ...mapMutations('base',['changeStaticState'])
    },
    mounted: function() {
        this.changeStaticState({
            name:'header_name',
            newVal:'列表'
        });
        this.changeStaticState({
            name:'link',
            newVal:'/home'
        })
        console.log(this.$route.params.id);

    },
    beforeRouteLeave (to, from, next) {
        //next();
        this.$messagebox.confirm('订单未提交确定离开吗？').then(() => {
            next();
        }).catch(() => {
            next(false);
        })
    },

    components: {
        scrollView: resolve => require(['@/components/scrollView'],resolve)
    }
}
</script>

    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped lang="scss">
.list {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background: #fff;
    section {
        flex: 1;
        height: 1px;
        overflow: scroll;
    }
    ul {
        li {
            text-align: center;
            line-height: 36px;
            border-bottom: 1px solid #ccc;
        }
    }
    .ic {
        font-size: 14px;
        display: inline-block;
        line-height: 18px;
        .icon-xialashuaxin3 {
            display: inline-block;
            transition: all .2s;
            font-size: 20px;
            height: 20px;
            line-height: 20px;
        }
    }
    .t {
        display: inline-block;
        line-height: 22px;
    }
    .rotate {
        transform: rotate(180deg)
    }
}
</style>
