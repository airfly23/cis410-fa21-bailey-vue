import { createRouter, createWebHistory } from "vue-router";

import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import MovieDetail from "./components/MovieDetail.vue";
import Gym from "./components/Gym.vue";
import NotFound from "./components/NotFound.vue";
import PaymentCreate from "./components/PaymentCreate.vue";
import Signup from "./components/Signup.vue";
import Account from "./components/Account.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/account", component: Account },
    { path: "/login", component: Login },
    { path: "/gym", component: Gym },
    {
      path: "/gym/:pk",
      component: MovieDetail,
      children: [{ path: "payment", component: PaymentCreate }],
    },
    { path: "/signup", component: Signup },
    { path: "/:invalidroute(.*)", component: NotFound },
  ],
});

export default router;
