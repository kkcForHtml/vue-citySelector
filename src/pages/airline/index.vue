<template>
    <section class="airline main-view">
        <v-header goback="{name:'index'}" title="飞机票查询"></v-header>
        <router-link :to="{name:'airline.list'}">
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
