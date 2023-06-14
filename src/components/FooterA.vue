<template>
  <div>
    <div class="footer">
      <router-link  class="footer-item" v-for="item in footerList" :to="item.path" :key="item">
       <img  class="default" :src="item.baseUrl" alt="">
       <img  class="active" :src="item.activeUrl" alt="">
       <div class="title">{{ item.text }}</div>
      </router-link>
      <!-- <router-link to="/a">ll</router-link> -->
    </div> 
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      footerList: [
        {
          text: "首页",
          path:'/home',
          baseUrl: require("@/assets/footer/ic_tab_home_normal.png"),
          activeUrl: require("@/assets/footer/ic_tab_home_active.png"),
        },
        {
          text: "书影音",
          path:'/book',
          baseUrl: require("@/assets/footer/ic_tab_subject_normal.png"),
          activeUrl: require("@/assets/footer/ic_tab_subject_active.png"),
        },
        {
          text: "广播",
          path:'/boardcast',
          baseUrl: require("@/assets/footer/ic_tab_status_normal.png"),
          activeUrl: require("@/assets/footer/ic_tab_status_active.png"),
        },
        {
          text: "小组",
          path:'/group',
          baseUrl: require("@/assets/footer/ic_tab_group_normal.png"),
          activeUrl: require("@/assets/footer/ic_tab_group_active.png"),
        },
        {
          text: "我的",
          path:'/mine',
          baseUrl: require("@/assets/footer/ic_tab_profile_normal.png"),
          activeUrl: require("@/assets/footer/ic_tab_profile_active.png"),
        },
      ],
    };
  },
  methods: {},
  components: {},
};
</script>

<style scoped lang="scss">
.footer {
  text-align: center;
  height: 50px;
  position: fixed;
  bottom: 10px;
  display: flex;
  /* align-items: center; */
  /* flex-direction: column; */
  /* justify-content: space-around; */
  width: 100%;
  border-top: 1px solid #ccc;
  /* justify-content: space-around; */
   &-item{
     flex:1 1 auto;
     /* display: flex; */
     /* background-color: pink; */
     img{
      width: 30px;
      height: 30px;
     }
     .title{
      font-size: 20px;
      color: #ccc;
      text-decoration: none;
      margin-top: -10px;
      font-size: 16px;
      /* position: absolute; */
      /* bottom: 0; */
      /* margin: auto; */
     }
   }
   a{
    text-decoration: none;
   }
   .active{
      display: none;
     }
    .default{
      display: block;
      margin: auto;
    }

   .router-link-active{
     /* .default{
      display: block;
     }
     .active{
      display: none;
     } */
   }
   .router-link-exact-active{
    .default{
      display: none;
    }
    .active{
      display: block;
      margin: auto;
    }
    .title{
      color: #6abb65;
      font-size: 16px;
    }
      
    /* .active{
      display: block;
    }
    .default{
      display: none;
      width: 0px;
      height: 0px;
    } */
   }
}
</style>
