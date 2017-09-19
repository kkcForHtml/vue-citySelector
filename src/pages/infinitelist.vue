<template>
    <div class="list main-view">
        <v-header title="无限滚动" goback="{name:'Home'}" right="phone"></v-header>
        <infinit-scroll @changeScrollViewData="changeData" :url="url" :limit="limit" :total="total">
            <ul slot="container">
                <li v-for="item in arr">{{item.admin}}</li>
            </ul>
        </infinit-scroll>
    </div>
</template>

    <script>
import infinitScroll from '@/components/infinitScroll'
export default {
    data() {
        return {
            url: '/mock/test',
            limit: 10,
            total: 54,
            arr: []
        }
    },
    methods: {
        changeData(data) {
            this.arr = data;
            console.log(data);
        }
    },
    mounted: function() {
        this.$store.state.header_name = '无限滚动';
        this.$store.state.link = '/home';
    },
    components: {
        infinitScroll
    }
}
</script>

    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style lang="scss">
.list {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background: #fff;
    ul {
        li {
            text-align: center;
            line-height: 36px;
            border-bottom: 1px solid #ccc;
        }
    }
}
</style>
