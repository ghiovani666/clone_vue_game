import Vue from "vue";
import VueRouter from "vue-router";
 
 import CambioMoneda from "./components/CambioMoneda.vue";
 import TablaDetalle from "./components/TablaDetalle.vue";
 import Principal from "./components/Principal.vue";
 import Game from "./components/Game.vue";
 import User from "./components/Usuario.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", Principal: "principal", component: Principal },
    { path: "/detalle", name: "detalle", component: TablaDetalle },
    { path: "/cambio", name: "cambio", component: CambioMoneda },
    { path: "/game", name: "game", component: Game },
    { path: "/user", name: "user", component: User },
  ],
});

export default router;
