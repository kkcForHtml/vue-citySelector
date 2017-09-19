<template>
  <div class="index">
    <router-link :to="{path:'/airline/orderlist',params:{id:1,username:123456}}" tag="h1">go back</router-link>
    <h1>这里是airline order 订单详情</h1>
    <router-link :to="{path:'/airline/refund',params:{id:1,username:123456}}" tag="h1">退票/改签</router-link>
  </div>
</template>
<script>
  export default {
    mounted(){
      console.log(this.$route.params)
    }
  }
</script>