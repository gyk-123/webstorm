<template>
    <div>
<Header-A>
    <template #icon>
        <img class="r" src="@/assets/Mine/ic_settings.png" alt="">
    </template>
    <template #title>
        <!-- <img class="r" src="@/assets/Mine/ic_settings.png" alt=""> -->
        <div>我的</div>
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
