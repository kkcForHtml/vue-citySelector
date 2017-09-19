<template>
    <section class="airline main-view">
        <v-header goback="{name:'airline.index'}" title="航班列表" right="phone"></v-header>
        <router-link :to="{name:'airline.flight',params:{showTransition:'go'}}">
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

