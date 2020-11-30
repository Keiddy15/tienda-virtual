<template>
  <v-app>
    <APP_BAR/>
    <v-card>
      <v-tabs
          fixed-tabs
          background-color="primary"
          dark
          show-arrows
      >
        <v-tab>
          Categorías
        </v-tab>
        <v-tab>
          Productos
        </v-tab>
        <v-tab>
          Clientes
        </v-tab>
        <v-tab>
          Categorías y productos
        </v-tab>
        <v-tab-item>
          <v-card elevation="15" color="#FFF" raised class="cardForm">
            <v-card-text class="textUser">
              <h1 style="letter-spacing: 2px; line-height: 40px">
                Categorías</h1>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text>
              <Categoria/>
              <v-spacer></v-spacer>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card elevation="15" color="#FFF" raised class="cardForm">
            <v-card-text class="textUser">
              <h1 style="letter-spacing: 2px; line-height: 40px">
                Productos
              </h1>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text>
              <Productos/>
              <v-spacer></v-spacer>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card elevation="15" color="#FFF" raised class="cardForm">
            <v-card-text class="textUser">
              <h1 style="letter-spacing: 2px; line-height: 40px">
                Clientes</h1>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text>
              <Clientes/>
              <v-spacer></v-spacer>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card elevation="15" color="#FFF" raised class="cardForm">
            <v-card-text class="textUser">
              <h1 style="letter-spacing: 2px; line-height: 40px">
                Categoría y producto</h1>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text>
              <Cate_produ/>
              <v-spacer></v-spacer>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-card>

    <FOOTER/>
  </v-app>
</template>

<script>

import axios from 'axios'
import APP_BAR from "@/components/app_bar.vue";
import FOOTER from "@/components/footer.vue";
import Categoria from "@/components/Categoria";
import Productos from "@/components/Productos";
import Clientes from "@/components/Clientes";
import Cate_produ from "@/components/Cate_produ";
export default {
  name: 'Inicio',
  data() {
    return {
      headers: [],
      body_t: [],
      titulo: '',
      categorias: [],
      productos: [],
      clientes: [],
      ventas: [],
    }
  },
  components: {
    APP_BAR, FOOTER, Categoria, Productos, Clientes, Cate_produ
  },
  methods: {
  }

}


</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

.welcomeTitle {
  font-family: 'Pacifico', cursive;
  font-size: 28px !important;
  color: white !important;
}

.main {
  background-color: rgb(153, 43, 174) !important;
}

.cardForm {
  padding: 30px;
  margin: 20px;
}

@media screen and (max-width: 425px) {
  .cardForm {
    margin: 10px 5px 5px 5px !important;
  }
}

@media screen and (min-width: 1440px) {
  .cardForm {
    margin-right: 5vw !important;
    margin-left: 5vw !important;
  }
}

.textUser {
  text-align: center;
  color: black !important;
}
</style>