<template>
  <div class="index">
    <router-link :to="{path:'/airline/flight',params:{id:1,username:123456}}" tag="h1">go back</router-link>
    <h1>这里是site success 成功页面</h1>
    <router-link :to="{path:'/site/success',params:{id:1,username:123456}}" tag="h1">next page</router-link>
  </div>
</template>
<script>
  export default {
    mounted(){
      console.log(this.$route.params)
    }
  }
</script>