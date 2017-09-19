<template>
    <section class="wineshop main-view">
        <v-header goback="{name:'wineshop.hotel'}" title="酒店入住" right="home"></v-header>
        <router-link :to="{name:'success'}">
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
