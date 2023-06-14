<template>
  <div>
    <HeaderA bg="#6abb65">
      <template #ipt>
        <!-- <div class="home-icon"> -->
        <img class="scan" src="@/assets/Home/img/ic_scan_gray.png" alt="" />
        <img
          class="home-search"
          src="@/assets/Home/img/ic_group_search_small.png"
          alt=""
        />
        <!-- </div> -->
        <!-- <div> -->
        <input placeholder="影视、图书、图片、小组等" type="text" />
        <!-- </div> -->
      </template>

      <template #icon>
        <img
          class="r"
          src="@/assets/Group/ic_actionbar_search_icon.png"
          alt=""
        />
      </template>
    </HeaderA>

    <!-- swiper -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="@/assets/Home/img/01.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="@/assets/Home/img/02.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="@/assets/Home/img/03.jpg" alt="">
        </div>
       
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import HeaderA from "@/components/header/Header.vue";
import "swiper/dist/js/swiper";
import "swiper/dist/css/swiper.css";
import Swiper from "swiper";
import axios from 'axios'
import {home,login} from '@/http/api/request'
export default {
  props: {},
  data() {
    return {};
  },
  mounted(){


    // this.goSwiper();
    //  axios.get('http://127.0.0.1:3000/home').then((res)=>{
    //     console.log(res);
    //  })
    //  .catch((err)=>{
    //   console.log(err);
    //  })
    this.getData()
  this.goLogin()
  },
  methods: {
    getData(){
         home().then(res=>{
          console.log(res);
         })
    },
    goLogin(){
      login().then((res)=>{
         console.log(res);
         if(res.data.status == 200){
          sessionStorage.setItem('token',res.data.token)
         }else{
           alert(res.data.message)
         }
      }).catch((err)=>{
         console.log(err);
      })
    },
    goSwiper() {
      new Swiper(".swiper-container", {
        direction: "horizontal", // 垂直切换选项
        //mousewheel: true, //滚轮
        autoplay: {
          //自动开始
          delay: 2500, //时间间隔
          disableOnInteraction: false, //*手动操作轮播图后不会暂停*
        },
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
          clickable: true, // 分页器可以点击
        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        // 如果需要滚动条
        scrollbar: {
          el: ".swiper-scrollbar",
        },
      });
    },
  },
  components: {
    HeaderA,
  },
};
</script>

<style scoped lang="scss">
.swiper-container{
 img{
  width: 100%;
 }
}
</style>
