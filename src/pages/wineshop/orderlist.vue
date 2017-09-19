<template>
  <div class="index">
    <router-link :to="{path:'/profile/index',params:{id:1,username:123456}}" tag="h1">go back</router-link>
    <h1>这里是wineshop orderlist 酒店订单列表</h1>
    <router-link :to="{path:'/wineshop/order',params:{id:1,username:123456}}" tag="h1">next page</router-link>
  </div>
</template>
<script>
  export default {
    mounted(){
      console.log(this.$route.params)
    }
  }
</script>