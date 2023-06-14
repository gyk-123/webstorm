<template>
    <div >
<!-- <h1>board</h1> -->
<Header-A>
      <template #title>
        <div class="t">
            广播
        </div>
      </template>

      <template #icon>
        <!-- <div class="icon"> -->
            <img class="l" src="@/assets/broadcast/ic_chat_green.png" alt="">
            <img class="r" src="@/assets/broadcast/ic_status_search_user.png" alt="">
        <!-- </div> -->
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

<style scoped lang="scss">

</style>
