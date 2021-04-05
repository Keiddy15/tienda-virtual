<template>
  <v-app class="Inicio" >
    
    <APP_BAR/>
    <v-img
      src="@/assets/img/home.jpg"
      max-height="600"
      width="auto"
      class="align-end mt-9 "
      
    >
    <div class="image_port d-flex justify-center mb-5">
      <v-btn @click="registrar" class="button mb-8" dark outlined>COMPRA AHORA</v-btn>
    </div>
    </v-img>
    <v-row no-gutters class="">
      <v-col
        sm="12"
        lg="4"
        cols="12"
      >
        <v-card
          class="pa-2"
          outlined
          tile
          color="grey lighten-2"
        >
        <v-row>
          
          <v-col sm="4" lg="3">
            <v-avatar tile size="65" class="ml-7 mt-3">
              <img
                alt="user"
                src="@/assets/icons/camion.svg"
              >
            </v-avatar>
          </v-col>
          <v-col sm="8" lg="9">
            <v-card-title class="propiedades">
            ENVIO GRATIS
          </v-card-title>
          <v-card-subtitle class="propiedades_subtitle">
            Gratis para todos los productos
          </v-card-subtitle>
          </v-col>
        </v-row>
        </v-card>
      </v-col>
       <v-col
        cols="12"
        sm="12"
        lg="4"
        class="card"
      >
        <v-card
          class="pa-2"
          outlined
          tile
          color="grey lighten-2"
        >
        <v-row>
          
          <v-col sm="4" lg="3">
            <v-avatar tile size="55" class="ml-7 mt-4">
              <img
                alt="user"
                src="@/assets/icons/seguridad-activada.svg"
              >
            </v-avatar>
          </v-col>
          <v-col sm="8" lg="9">
            <v-card-title class="propiedades">
            COMPRAS SEGURAS
          </v-card-title>
          <v-card-subtitle class="propiedades_subtitle">
            Disfrute de compras seguras
          </v-card-subtitle>
          </v-col>
        </v-row>
        </v-card>
      </v-col>
       <v-col
        cols="12"
        sm="12"
        lg="4"
      >
        <v-card
          class="pa-2 "
          outlined
          tile
          color="grey lighten-2"
        >
        <v-row>
          
          <v-col sm="4" lg="3">
            <v-avatar tile size="55" class="ml-7 mt-4">
              <img
                alt="user"
                src="@/assets/icons/apoyo-tecnico.svg"
              >
            </v-avatar>
          </v-col>
          <v-col class="" sm="8" lg="9">
            <v-card-title class="propiedades">
            SOPORTE EN LINEA
          </v-card-title>
          <v-card-subtitle class="propiedades_subtitle">
            Brindamos soporte en linea la mayor parte del dia
          </v-card-subtitle>
          </v-col>
        </v-row>
        </v-card>
      </v-col>
    </v-row>
    <!-- <v-parallax 
      src="@/assets/img/navidad.jpg" 
      class="ma-5"
    >
      <v-row class="pt-16" justify="center" align="center">
          <v-col class="text-center pt-16" cols="auto">
            <h1 class="mt-5">YA LLEGO LA NAVIDAD!</h1>
            <p>Disfruta de la mejor temporada para regalar</p>
          </v-col>
        </v-row>
      <v-row justify="center" align="start">
        <v-col cols="auto">
          <v-btn @click="mujer" class="ma-2" outlined color="white">
            Mujer
          </v-btn>
          <v-btn @click="hombre" class="ma-2" outlined color="white">
            Hombre
          </v-btn>
          <v-btn @click="ninos" class="ma-2" outlined color="white">
            Niño
          </v-btn>
          <v-btn @click="ninas" class="ma-2" outlined color="white">
            Niña
          </v-btn>
        </v-col>
      </v-row>
    </v-parallax> -->
    <cards/>
    <NUEVOS/>
    <FOOTER/>
  </v-app>
</template>

<script>

import NUEVOS from "@/components/recien_llegados.vue";
import cards from "@/components/cards.vue";
import APP_BAR from "@/components/app_bar.vue";
import FOOTER from "@/components/footer.vue";
export default {
  name: 'Inicio',
  components: {
    cards,APP_BAR,FOOTER,NUEVOS
  },
  methods: {
            registrar() {
                this.$router.push({name: 'Registro'});
            },
            hombre() {
                this.$router.push({name: 'Hombre'});
            },
            mujer() {
                this.$router.push({name: 'Mujer'});
            },
            ninos() {
                this.$router.push({name: 'Ninos'});
            },
            ninas() {
                this.$router.push({name: 'Ninas'});
            },
        }
}
</script>

<style scoped>
@media only screen and (min-width: 768px){
    .card{
      border-right: solid 2px rgb(68, 68, 68) !important;
      border-left: solid 2px rgb(68, 68, 68) !important;;
    }
}

.propiedades{
  font-size:  calc(0.7em + 0.5vw);
}
.propiedades_subtitle{
  font-size:  calc(0.7em + 0.1vw);
}
</style>