<template>
    <section class="train main-view">
        <v-header goback="{name:'train.flight'}" title="火车票购票" right="home"></v-header>
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
