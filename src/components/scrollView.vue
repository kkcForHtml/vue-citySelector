    <template>
        <section :style="{'overflow': scrollMode}" class="scroll-view">
            <v-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" @top-status-change="handleTopChange" @translate-change="translateChange" ref="loadmore" :auto-fill='false'>
                <slot name="container"></slot>
                <div class="no-data" v-if="allLoaded">没有更多数据</div>
                <div slot="top" class="mint-loadmore-top">
                    <span v-show="topStatus !== 'loading'" class="ic">
                        <i class="iconfont icon-xialashuaxin3" :class="{ 'rotate': topStatus === 'drop'}"></i><br /> {{topStatus=='drop'?'释放刷新':'下拉刷新'}}
                    </span>
                    <span v-show="topStatus === 'loading'" class="t">
                        <mt-spinner type="triple-bounce" color="rgb(38, 162, 255)" :size="32"></mt-spinner>
                    </span>
                </div>
            </v-loadmore>
        </section>
    </template>

    <script>
import { Toast } from 'mint-ui'
import { Loadmore } from 'mint-ui';
export default {
    props: {
        url: {
            type: String,
            default: ''
        },
        methods: {
            type: String,
            default: 'post'
        },
        limit: {
            type: Number,
            default: 10
        },
        total: {
            type: Number,
            default: 40
        }        
    },
    data() {
        return {
            topStatus: '',
            scrollMode: 'touch',
            allLoaded: false,
            page:1,
            arr: []
        }
    },
    methods: {
        init(showLoading=true) {
            return this.$axios({
                url:'/mock/test',
                params:{
                    page:this.page,
                    limit:this.limit,
                    total:this.total
                },
                methods:this.methods,
                showLoading
            }).then(data=>{                
                this.arr=this.page==1?data.data.res:this.arr.concat(data.data.res);
                this.allLoaded = this.arr.length>=this.total?true:false;
            })
        },
        loadTop() {
            this.page = 1;
            this.init(false).then(()=>{
                this.$refs.loadmore.onTopLoaded();
                this.$nextTick(() => {
                    this.scrollMode = 'touch'
                })
                return Toast({
                    message: '刷新成功',
                    position: 'bottom'
                });
            })
        },
        handleTopChange(status) {
            this.topStatus = status;
		},
		translateChange(data){
			//console.log(data);
		},
        loadBottom() {
            this.page = this.page+1;  
            this.init(false).then(()=>{
                this.$refs.loadmore.onBottomLoaded();
                this.$nextTick(() => {
                    this.scrollMode = 'touch'
                })
            });                      
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
    components: {
        'v-loadmore': Loadmore
    }
}
</script>

    <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    section {
        flex: 1;
        height: 1px;
        overflow: scroll;
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
    .no-data{
        line-height: 36px;
        text-align: center;
    }

</style>
