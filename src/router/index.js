import { createRouter, createWebHashHistory } from "vue-router";
//引入components单体文件
// import Home from './components/Home.vue'

// #createRouter创建路由
const router = createRouter({
  history: createWebHashHistory(),
  //用哈希模式
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/mine", //路径
      component: () => import("@/view/mine/mine.vue"), //引入的components单体文件
    },
    {
      path: "/group", //路径
      component: () => import("./../view/group/grup.vue"), //引入的components单体文件
    },
    {
      path: "/boardcast", //路径
      component: () => import("@/view/boardcast/boardcast.vue"), //引入的components单体文件
    },
    {
      path: "/book", //路径
      component: () => import("@/view/book/book.vue"), //引入的components单体文件
    },
    {
      path: "/home", //路径
      component: () => import("@/view/home/home.vue"), //引入的components单体文件
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.fullPath == "/login") {
    next();
  } else {
    sessionStorage.getItem("token")
      ? next()
      : router.replace({ path: "/login" });
  }
});

export default router; //暴露router路由
