import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
//适配
import 'amfe-flexible';
//swiper
import { swiper, swiperSlide } from "vue-awesome-swiper";
// import "swiper/css/swiper.min.css";
console.log(process.env);
// import { setRem } from "./../public/index.html";
// console.log(setRem);
createApp(App).use(router).mount("#app");
