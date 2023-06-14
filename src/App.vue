<template>
  <div id="app">
    <!-- <div class="test">你好</div> -->
     <h1>number :{{ a }}</h1>
     <div class="handleNumber">
        <button @click="handleAddNumber_a">+加</button>
        <button @click="a--">-减</button>
     </div>
     <input type="text" ref="ipt">
    <div>
       nihao
    </div>
    <div>
      <p>
       <i>1111</i>
      </p>
    </div>

    <div>
      <div>

      </div>
    </div>
    <router-view></router-view>
    <Footer-A></Footer-A>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import FooterA from './components/FooterA.vue'
export default {
  data() {
    return {
      a: 1,
    };
  },
  name: "App",

  components: {
    // HelloWorld,
    FooterA
  },
  mounted() {
   
    // window.onresize = this.setRem;
    // console.log(11);
  },
  methods: {
    handleAddNumber_a() {
      this.a++;
      this.a=0
      this.$nextTick(() => {
        console.log(this.a);
        console.log(this.$refs.ipt.value);
        // debugger
      });
    },
    // setRem() {
    //   var ui_w = 375;
    //   var client_w =
    //     document.documentElement.clientWidth || document.body.clientWidth;
    //   var html = document.querySelector("html");
    //   html.style.fontSize = (client_w / ui_w) * 100 + "px";
    //   console.log(11);
    // },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body,
#app {
  height: 100%;
  width: 100%;
  
}


   #app{
    min-width: 400px;
   }

 
</style>
