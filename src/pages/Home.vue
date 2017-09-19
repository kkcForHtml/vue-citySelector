<template>
    <section class="home main-view">

        <v-header title="首页"></v-header>
        <mt-button type="default" @click="test()">default</mt-button>

        <router-link to="/home/infinitelist">
            <mt-button type="primary">primary</mt-button>
        </router-link>
        <transition name="slide">
            <router-link :to="{name:'List.list',params:{id:123,showTransition:true}}">
                <mt-button type="danger">danger</mt-button>
            </router-link>

        </transition>
        <div v-alert="msg">{{upper|test}}</div>
        <ul>

            <li v-for="(x,index) in arr"  :key="index">{{x.time}}</li>
            <li v-for="(x,index) in te"  :key="index">{{x.admin}}</li>
        </ul>

        <mt-button @click="changea('startCity')">{{startCity}}</mt-button>{{startCity}}
        <mt-button @click="changea('endCity')">{{endCity}}</mt-button>{{endCity}}
        <!-- <mt-popup
            position="right"
            v-model="sh"
            modal="false"
            class="city-view"
        >
            <v-city :Cdata="Cdata" :Hcity="Hcity"></v-city>
        </mt-popup> -->
        <transition :name="showCity?'slide':'slide_back'">
            <v-city v-show="showCity" :Cdata="Cdata" :Hcity="Hcity" :Tcity="Tcity"></v-city>
        </transition>
    </section>
</template>

<script>
import { mapMutations, mapState, mapActions} from 'vuex';
import { Hcity, Cdata } from '@/assets/js/city.data'
import vCity from '../components/city';

export default {
    data() {
        return {
            upper: 'sdcsdsdc',
            msg: '首页',
            arr: [1, 2, 3, 4, 5, 6],
            value: '',
            re: [],
            Hcity,
            Cdata,
            Tcity:'',
            sh:false

        }

    },
    computed: {
        ...mapState('base',['showCity', 'startCity', 'endCity', 'te'])
    },
    methods: {
        init() {
            const posts = this.$axios({ url: '/apis/posts/1', methods:'get' });

            const mock = this.$axios({ url: '/mock' });

            const test = this.$axios({
                url: '/mock/test',
                methods: 'post',
                params: {
                    limit: 10,
                    page: 1,
                    total: 10,
                    methods: 'post'
                }
            });


            Promise.all([posts, mock, test]).then(data => {
                this.arr = data[1].data.res;
                this.$toast("刷新成功")
            })

            this.$axios({
                methods: 'post',
                url: '/ubtrip/Login',
                params:{
                    username:'12312312300',
                    password:'123456'
                }
            }).then(data => {
                console.log(data);
            });
        },
        test() {
            this.$messagebox.confirm('是否刷新列表').then(() => {
                this.init();
            }).catch(() => {
                this.$toast("取消成功");
            })
        },
        changea(val){

            this.changeStaticState({
                name:'showCity',
                newVal:true
            });
            this.changeStaticState({
                name:'targetCity',
                newVal:val
            });
            this.Tcity = val;
        },
        search() {
            this.$toast({
                message: '请求超时',
            })
        },
        ...mapMutations('base', ['changeStaticState', 'changeList']),
        ...mapActions('base',['getlist'])

    },
    mounted: function() {
        this.changeStaticState({
            name: 'header_name',
            newVal: '首页'
        })
        this.changeStaticState({
            name: 'link',
            newVal: '/'
        })
       // this.getlist();
       this.changeList();
       console.log(this.te);
        this.init();



        //console.log(filters);

    },
    watch: {
        showCity(newValue, oldValue) {
            this.sh = newValue;
        }
    },
    components: {
        vCity
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .home {
        height: 100%;
        width: 100%;
    }

    .test {
        width: 100px;
        height: 100px;
        background: red;
        margin: 10px auto;
        box-shadow: -4px 0 5px -3px rgba(0, 0, 0, .5);
    }
</style>
