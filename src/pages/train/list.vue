<template>
    <section class="train main-view">
        <v-header goback="{name:'train.index'}" title="火车票列表" ></v-header>
        <router-link :to="{name:'train.flight'}">
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
