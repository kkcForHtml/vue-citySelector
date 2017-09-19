<template>
  <div class="index">
    <router-link :to="{path:'./index',params:{id:1,username:123456}}" tag="h1">go back</router-link>
    <h1>这里是approve list 审批列表</h1>
    <router-link :to="{path:'/approve/airline-details',params:{id:1,username:123456}}" tag="h1">next page（airline）</router-link>
    <router-link :to="{path:'/approve/train-details',params:{id:1,username:123456}}" tag="h1">next page（train）</router-link>
    <router-link :to="{path:'/approve/wineshop-details',params:{id:1,username:123456}}" tag="h1">next page（wineshop）</router-link>
  </div>
</template>
<script>
  export default {
    mounted(){
      console.log(this.$route.params)
    }
  }
</script>
