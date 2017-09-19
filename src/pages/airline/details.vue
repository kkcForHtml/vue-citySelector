<template>
    <section class="airline main-view">
        <v-header goback="{name:'airline.flight',params:{showTransition:'back'}}" title="购票页面"></v-header>
        <router-link :to="{name:'success',params:{showTransition:false}}">
            <mt-button>next</mt-button>
        </router-link>
    </section>
</template>

<script>
    export default {
        beforeRouteLeave (to, from, next) {
            if(to.name!=='airline.flight') return next();
            this.$messagebox.confirm('订单未提交确定离开吗？').then(() => {
                next();
            }).catch(() => {
                next(false);
            })
        },
        components:{

        }
    }
</script>

<style scoped lang="scss">

</style>


