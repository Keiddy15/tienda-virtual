import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< Updated upstream
import Inicio from "../views/Inicio.vue";
=======
import Inicio from "@/views/Inicio";
>>>>>>> Stashed changes

Vue.use(VueRouter)

const routes = [
  {
<<<<<<< Updated upstream
    path: '/',
    name:'Inicio',
    component: main
=======
    path: '*',
    redirect: '/Inicio'
  },
  {
    path: '/',
    redirect: '/Inicio'
  },
  {
    path: '/Inicio',
    name: 'Inicio',
    components: {main: Inicio}
>>>>>>> Stashed changes
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
