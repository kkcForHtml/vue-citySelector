<template>
    <section class="scroll-view">
        <div
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="50">
            <slot name="container"></slot>
        </div>
        <p v-show="loader" class="page-infinite-loading">
            <mt-spinner type="fading-circle"></mt-spinner>
            加载中...
        </p>
        <div class="no-data" v-if="allLoaded">没有更多数据</div>                        
    </section>
</template>

    <script>
export default {
    props: {
        url: {
            type: String,
            default: ''
        },
        limit: {
            type: Number,
            default: 10
        },
        total: {
            type: Number,
            default: 54
        }        
    },
    data() {
        return {
            loading:false,
            allLoaded:false,
            page:1,
            arr:[]            
        }
    },
    computed: {
        loader() {
            return this.loading&&(!this.allLoaded);
        }
    },
    methods: {
        init(showLoading=true){
            this.$axios({
                methods:'post',
                url:this.url,
                showLoading,
                params:{
                    limit:this.limit,
                    total:this.total,
                    page:this.page
                }
            }).then(data=>{
                this.arr=this.page==1?data.data.res:this.arr.concat(data.data.res);
                this.allLoaded = this.arr.length>=this.total?true:false;
                this.loading = false||this.allLoaded;
            })
        },
        loadMore() {
            this.loading = true;
            this.page+=1;
            this.init(false);
        }
    },
    mounted: function() {
        this.init();     
    },
    watch: {
        arr(newValue, oldValue) {
            this.$emit('changeScrollViewData',newValue);
        }
    },
}
</script>

    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style lang="scss">
    section {
        flex: 1;
        height: 1px;
        overflow: scroll;
    }
    .page-infinite-loading {
        text-align: center;
        height: 50px;
        line-height: 50px;
            div {
                display: inline-block;
                vertical-align: middle;
                margin-right: 5px; 
            }    
    }
    .no-data{
        line-height: 36px;
        text-align: center;
    }    

</style>
