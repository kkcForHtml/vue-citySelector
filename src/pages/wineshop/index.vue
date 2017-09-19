<template>
    <section class="wineshop main-view">
        <v-header goback="{name:'index'}" title="搜索页面" right="phone"></v-header>
        <router-link :to="{name:'wineshop.list'}">
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

