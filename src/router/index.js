import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/views/HelloWorld";
import Login from "@/views/Login";
import TestContainer from "@/views/TestContainer";
import store from "@/store";
import ChatContainer from "@/modules/chat";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/test",
      name: "test",
      component: TestContainer
    },
    {
      path: "/chat",
      name: "chat",
      component: ChatContainer
    }
  ]
});

router.beforeEach((to, from, next) => {
  const isLogin = checkLogin();
  if (isLogin) {
    if (to.path === "/login") {
      next("/");
      return;
    }
    next();
  } else {
    if (to.path === "/register") {
      next();
      return;
    }
    if (to.path === "/scanlogin") {
      next();
      return;
    }
    if (to.path !== "/login") {
      next("/login");
    } else {
      next();
    }
  }
});

function checkLogin() {
  console.log(store.state);
  return store.state.user !== null;
}

export default router;
