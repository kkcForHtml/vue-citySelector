<template>
  <div class="index">
    <router-link :to="{path:'/index',params:{id:1,username:123456}}" tag="h1">go back</router-link>
    <h1>这里是profile index 我的商旅</h1>
    <router-link :to="{path:'/airline/orderlist',params:{id:1,username:123456}}" tag="h1">airline orderlist</router-link>
    <router-link :to="{path:'/wineshop/orderlist',params:{id:1,username:123456}}" tag="h1">wineshop orderlist</router-link>
    <router-link :to="{path:'/train/orderlist',params:{id:1,username:123456}}" tag="h1">train orderlist</router-link>
  </div>
</template>
<script>
  export default {
    mounted(){
      console.log(this.$route.params)
    }
  }
</script>