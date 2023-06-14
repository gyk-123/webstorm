<template>
    <div>
   <Header-A>
    <template #title>
       <div>书影音</div>
    </template>
   
    <template #icon>
        <img class="l" src="@/assets/broadcast/ic_chat_green.png" alt="">
        <img class="r" src="@/assets/audio/ic_actionbar_search_icon.png" alt="">
    </template>
   </Header-A>
    </div>
</template>

<script>
import HeaderA from '@/components/header/Header.vue';
export default {
    props: {

    },
    data() {
        return {

        };
    },
    methods: {

    },
    components: {
        HeaderA
    },
};
</script>

<style scoped lang="less">

</style>
