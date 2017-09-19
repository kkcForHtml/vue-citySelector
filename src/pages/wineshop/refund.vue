<template>
  <div class="index">
    <router-link :to="{path:'/wineshop/order',params:{id:1,username:123456}}" tag="h1">go back</router-link>
    <h1>这里是wineshop refund 退票/改签</h1>
    <router-link :to="{path:'/site/success',params:{urla:'/wineshop/order',urlb:'/wineshop/orderlist'}}" tag="h1">next page</router-link>
  </div>
</template>
<script>
  export default {
    mounted(){
      console.log(this.$route.params)
    }
  }
</script>