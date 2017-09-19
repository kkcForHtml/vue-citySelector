<template>
    <section class="airline main-view">
        <v-header goback="{name:'airline.list',params:{showTransition:'back'}}" title="航班信息" right="home"></v-header>
        <router-link :to="{name:'airline.details',params:{showTransition:'go'}}">
            <mt-button>next</mt-button>
        </router-link>
    </section>
</template>

<script>
    export default {
        components:{

        }
    }
</script>

<style scoped lang="scss">

</style>

