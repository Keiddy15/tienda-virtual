import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from "../views/Inicio.vue";
import Registro from "../views/Registro.vue"
import Login from "../views/Login.vue"
import Hombre from "../views/Hombre.vue"
import Mujer from "../views/Mujer.vue"
import Ninos from "../views/Ninos.vue"
import Ninas from "../views/Ninas.vue"
import carrito from "@/components/carrito";
import Admin from "../views/Admin.vue";
Vue.use(VueRouter)

const routes = [
  {
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
  },
  {
    path: '/Registro',
    name: 'Registro',
    components: {main: Registro}
  },
  {
    path: '/Login',
    name: 'Login',
    components: {main: Login}
  },
  {
    path: '/Hombre',
    name: 'Hombre',
    components: {main: Hombre}
  },
  {
    path: '/Mujer',
    name: 'Mujer',
    components: {main: Mujer}
  },
  {
    path: '/Ninos',
    name: 'Ninos',
    components: {main: Ninos}
  },
  {
    path: '/Ninas',
    name: 'Ninas',
    components: {main: Ninas}
  },
  {
    path: '/Carrito',
    name: 'carrito',
    components: {main: carrito}
  },
  {
    path: '/Admin',
    name: 'Admin',
    components: {main: Admin}
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
