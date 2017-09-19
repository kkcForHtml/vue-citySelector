<template>
    <section class="wineshop main-view">
        <v-header goback="{name:'wineshop.list'}" title="酒店信息" right="phone"></v-header>
        <router-link :to="{name:'wineshop.details'}">
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
