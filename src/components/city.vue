<template>
    <section style="z-index:2100">
        <v-header title="城市选择" goback="{popup:'hide'}"></v-header>
        <mt-search
            v-model="searchData"
            cancel-text="取消"
            placeholder="搜索">
            <ul style="background: #fff;">
                <li class="city-cell" v-for="item in searchCityData"   @click="changecity(item.Name)">{{item.Name}}</li>
            </ul>
        </mt-search>
        <mt-index-list>
            <mt-index-list :height="529">
                <mt-index-section index="">
                    <p class="mint-indexsection-index" style="font-size:14px;">热门城市</p>
                    <li class="city-cell" v-for="item in Hcity" :key="item.Code"  @click="changecity(item.Name)">{{item.Name}}</li>
                </mt-index-section>
            </mt-index-list>
            <mt-index-section v-for="(item,key) in resolveCityData" :key="key" :index="key">
                <li class="city-cell" v-for="it in item" :key="it.Code"  @click="changecity(it.Name)">{{it.Name}}</li>
            </mt-index-section>
        </mt-index-list>
    </section>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
    props: {
        Hcity: {
            type: Array,
            default: []
        },
        Cdata:{
            type: Object,
            default: ()=>({})
        },
        Tcity:{
            type:String,
            default:''
        }
    },
    data() {
        return {
            searchData:'',
            searchCityData: []
        }
    },
    computed: {
        ...mapState('base',['startCity', 'endCity']),
        resolveCityData(){
           let ob = {}
            this.Cdata.Cities.reverse().forEach((cities)=>{
                let key = cities.Code[0];
                if(ob[key]==undefined){
                    ob[key] = new Array();
                }
                ob[key].push(cities);
            });
            return ob;
        }
    },
    methods: {
        ...mapMutations('base',['changeStaticState']),
        changecity(val){
            this.searchData = '';
            $('.mint-indexlist-content').eq(0).scrollTop(0);
            this.changeStaticState({
                name:'showCity',
                newVal:false
            });
            this.changeStaticState({
                name:this.Tcity,
                newVal:val
            });
            if(this.startCity === this.endCity){
                this.$messagebox({
                    title:'警告',
                    message:'出发城市和到达城市不能相同',
                    closeOnClickModal:false
                    }).then(data=>{
                        this.changeStaticState({
                            name:this.Tcity,
                            newVal:''
                        });
                    })
            }

        }

    },
    watch: {
        searchData(newValue) {
            if (newValue==='') {
                $('.mint-searchbar-cancel').hide( )
                $('.mint-search').height(44);
                this.searchCityData = [];
            } else {
                $('.mint-searchbar-cancel').show();
                $('.mint-search').height('100%');
                this.searchCityData = this.Cdata.Cities.reverse().filter(cities=>cities.Code.toLowerCase().indexOf(this.searchData.toLowerCase())!==-1 || cities.Name.indexOf(this.searchData)!==-1);
            }
        }
    },
}
</script>

<style scoped lang="scss">
section {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    ul{
        .mint-cell{
            border-bottom: 1px solid #ccc;
        }
        .city-cell{
            line-height: 48px;
            border-bottom: 1px solid #ccc;
            padding: 0 10px;
            font-size: 16px;
        }
    }
}
</style>
