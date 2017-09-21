<template>
    <section class="home main-view">
        <v-header title="首页"></v-header>
        <mt-button @click="changea('startCity')">出发城市</mt-button>{{startCity}}
        <br />
        <mt-button @click="changea('endCity')">到达城市</mt-button>{{endCity}}

        <transition :name="showCity?'slide':'slide_back'">
            <v-city
                v-show="showCity"
                :Cdata="Cdata"
                :Hcity="Hcity"
                :Tcity="Tcity">
            </v-city>
        </transition>
    </section>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';
import { Hcity, Cdata } from '@/assets/js/city.data'
import vCity from '../components/city';

export default {
    data() {
        return {
            Hcity,
            Cdata,
            Tcity: ''
        }

    },
    computed: {
        ...mapState('base', ['showCity', 'startCity', 'endCity'])
    },
    methods: {
        changea(val) {
            this.changeStaticState({
                name: 'showCity',
                newVal: true
            });
            this.Tcity = val;
        },
        search() {
            this.$toast({
                message: '请求超时',
            })
        },
        ...mapMutations('base', ['changeStaticState'])

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
        this.changeStaticState({
            name:'currentCity',
            newVal: remote_ip_info['city']
        })


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
