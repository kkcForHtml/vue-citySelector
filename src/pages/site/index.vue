<template>
    <div>
        <div class="index_nav">
            <img src="/static/images/index_logo.png" alt="">
        </div>
        <div class="index_box">
            <div v-for="(i,index) in data" :key="index">

                <div class="ib_left" :class="i.name" v-if="i.banned">
                    <router-link :to="i.url">
                        <img :src="i.img" alt=""><br />{{i.title}}
                    </router-link>
                </div>

                <div v-else class="ib_left noOpen " :class="i.name">
                    <img :src="i.img" alt=""><br />{{i.title}}
                    <div class="noOpenChi">
                        <i class="waite-for-doing">敬请期待</i>
                    </div>
                </div>
                <div class="clear"></div>
            </div>
        </div>
    </div>
</template>

<script>
//import vTest from '@/components/test'
export default {
    name: 'index',
    data() {
        return {
            data: [
                { "name": "airline", "banned": true, "title": "国内机票", 'img': '/static/images/home-airline-icon.png', 'url': '/airline/index' },
                { "name": "train", "banned": true, "title": "火车票", 'img': '/static/images/home-train-icon.png', 'url': '/train/index' },
                { "name": "wineshop", "banned": true, "title": "国内酒店", 'img': '/static/images/home-wineshop-icon.png', 'url': '/wineshop/index' },
                { "name": "tourplan", "banned": false, "title": "差旅计划", 'img': '/static/images/home-tourplan-icon.png', 'url': '/tourplan/index' },
                { "name": "privilege", "banned": false, "title": "优福利", 'img': '/static/images/home-privilege-icon.png', 'url': '/privilege/index' },
                { "name": "approve", "banned": true, "title": "审批授权", 'img': '/static/images/home-approve-icon.png', 'url': '/approve/index' },
                { "name": "profile", "banned": true, "title": "我的商旅", 'img': '/static/images/home-profile-icon.png', 'url': '/profile/index' }
            ],

        }
    },
    mounted: function() { },
    components: {
        //vTest   //vTest:vTest
    }
}
</script>

<style scoped lang="scss">
.index_nav {
    position: relative;
    width: 100%;
    min-height: 55px;
}

.index_nav img {
    position: relative;
    width: 100%;
}

.index_box {
    position: relative;
    margin: 5px;
}

.index_box div {
    position: relative;
    float: left;
    width: 44%;
    margin-left: 3%;
}

.index_box div .ib_left {
    position: relative;
    width: 100%;
    margin-top: 10px;
    text-align: center;
    color: #fff;
    height: 120px;
    border-radius: 10px;
    -o-border-radius: 10px;
    -ms-border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    font-size: 16px;
}
.index_box div .ib_left a{
    display: block;
    height: 100%;
    color: white;
}
.index_box div .ib_left img {
    position: relative;
    width: 50px;
    margin-top: 20px;
    margin-bottom: 5px;
}

.index_box div .ib_left .noOpenChi {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #646779;
    margin-left: 0px;
    top: 0px;
    left: 0px;
    border-radius: 10px;
    -o-border-radius: 10px;
    -ms-border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px; //filter: alpha(opacity:50);
    opacity: 0.5;
    -moz-opacity: 0.5;
    -khtml-opacity: 0.5;
    overflow: hidden;
}

.index_box div .ib_left .noOpenChi .waite-for-doing {
    position: absolute;
    left: -35%;
    top: 13%;
    width: 100%;
    background: #FE8649;
    transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    padding: 3px 3px;
    font-size: 0.5rem;
}

.airline {
    background: #2e8ef5;
    height: 250px !important;
}

.airline img {
    margin-top: 75px!important;
}

.train {
    background: #37BC9B;
}

.wineshop {
    background: #FE657A;
}

.tourplan {
    background: #F6B50F;
}

.privilege {
    background: #FE8649;
}

.approve {
    background: #20AE38;
}

.profile {
    background: #07C5DB;
}

.clear {
    clear: both !important;
}
</style>
