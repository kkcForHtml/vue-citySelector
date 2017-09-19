<template>
    <section class="train main-view">
        <v-header goback="{name:'train.list'}" title="火车票班次信息" ></v-header>
        <router-link :to="{name:'train.details'}">
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
