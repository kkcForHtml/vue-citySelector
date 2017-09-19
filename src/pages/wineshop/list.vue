<template>
    <section class="wineshop main-view">
        <v-header goback="{name:'wineshop.index'}" title="国内酒店列表" right="phone"></v-header>
        <router-link :to="{name:'wineshop.hotel'}">
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
