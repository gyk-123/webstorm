<template>
  <div :style="{ backgroundColor: bg }" class="header">
    <div class="title"><slot name="title"> </slot></div>
    <div class="icon"><slot name="icon"> </slot></div>
    <div class="ipt"><slot name="ipt"> </slot></div>
  </div>
</template>

<script>
export default {
  props: {
    bg: {
      type: String,
      default: "#f7f7f7",
    },
  },
  data() {
    return {};
  },
  methods: {},
  components: {},
};
</script>

<style lang="scss">
.header {
  height: 50px;

  position: relative;
}
.ipt {
  position: absolute;
  top: 0;
  width: 100%;
  text-align: left;
  padding-left: 20px;
  height: 100%;
  display: flex;
  align-items: center;
  input {
    height: 70%;
    width: 75%;
    outline: none;
    border-radius: 5px;
    border: none;
    text-indent: 30px;
    &:focus {
      color: #909fbb;
      border-color: #3677f0;
      background-color: #f1f6fe;
      /* width: 10px; */
      /* background-color: #42b983; */
      /* color: red; */
      /* outline: 1px solid red; */
    }
  }
  .home-icon {
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .scan {
    position: absolute;
    width: 25px;
    right: 130px;
    top: 14px;
  }
  .home-search {
    position: absolute;
    width: 20px;
    top: 15px;
    margin-left: 5px;
  }
}
.title {
  text-align: center;
  height: 100%;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon {
  position: absolute;
  /* left: 0; */
  top: 0;
  right: 0;
  height: 100%;
  display: flex;
  align-items: center;
  img {
    width: 30px;
  }
  .r {
    margin-right: 30px;
  }
  .l {
    margin-right: 10px;
  }
}
</style>
