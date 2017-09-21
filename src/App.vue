<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'app'
}
</script>

<style lang="scss">
@import './assets/css/style';
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
    padding-top: 40px;
}
.mint-search{
    height: 40px;
}
</style>
