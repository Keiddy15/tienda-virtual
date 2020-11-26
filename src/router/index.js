import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from "../views/Inicio.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name:'Inicio',
    component: main
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
