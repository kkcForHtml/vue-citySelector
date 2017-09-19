<template>
    <section class="train main-view">
        <v-header goback="{name:'index'}" title="搜索页面" ></v-header>
        <router-link :to="{name:'train.list'}">
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
