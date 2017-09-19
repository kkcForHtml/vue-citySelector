<template>
    <div id="app">
        <transition :name="transitionName">
            <router-view>123123</router-view>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            transitionName: ""
        }
    },
    watch: {
        // 监视路由，参数为要目标路由和当前页面的路由
        $route(to, from) {
            console.log(to);
            this.$indicator.close();
            if (to.params.showTransition==='none') {
                this.transitionName = "";
            }else if(to.params.showTransition==='go'){
                this.transitionName = 'slide'
            }else if(to.params.showTransition==='back'){
                this.transitionName = 'slide_back'
            }else{
                const toDepth = to.path.substring(0, to.path.length - 2).split('/').length
                const fromDepth = from.path.substring(0, from.path.length - 2).split('/').length
                this.transitionName = toDepth === fromDepth ? '' : toDepth < fromDepth ? 'slide_back' : 'slide';
            }
        }
    }
}
</script>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

html,
body {
    height: 100%;
    width: 100%;
}

#app {
    height: 100%;
    width: 100%;
}

.slide-enter,
.slide_back-enter {
    position: absolute;
    width: 100%;
}

.slide-leave,
.slide_back-leave {
    position: absolute;
    width: 100%;
}

.slide-enter-active,
.slide_back-enter-active {
    transition: transform .3s ease-out;
}

.slide-leave-active {
    position: absolute;
    z-index: -1;
    transition: transform .6s ease-out;
    transform: translate3d(-50%, 0, 0);
}

.slide-enter {
    transform: translate3d(100%, 0, 0);
}

.slide_back-leave-active {
    position: absolute;
    transition: transform .3s ease-out;
    z-index: 99;
    transform: translate3d(100%, 0, 0); // box-shadow: -4px 0 10px -3px rgba(0,0,0,.4);
}

.slide_back-enter {
    transition: transform .2s ease-out;
    transform: translate3d(-30%, 0, 0);
}

.main-view {
    position: absolute;
    background: #fff;
    height: 100%;
    width: 100%;
}

.mint-indicator-wrapper {
    position: absolute;
}
.city-view{
    width: 100%;
    height: 100%;
    background: #fff;
}
.mint-header{
    z-index: 99;
}
.mint-search-list{
    padding-top: 84px;
}
.mint-search{
    height: 44px;
}
</style>
