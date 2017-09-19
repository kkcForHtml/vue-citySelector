<template>
  <div class="index">
    <router-link :to="{path:'/airline/order',params:{id:1,username:123456}}" tag="h1">go back</router-link>
    <h1>这里是airline details 购票页面</h1>
    <router-link :to="{path:'/site/success',params:{urla:'/airline/order',urlb:'/airline/orderlist'}}" tag="h1">next page</router-link>
  </div>
</template>
<script>
  export default {
    mounted(){
      console.log(this.$route.params)
    }
  }
</script>