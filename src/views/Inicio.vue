<template>
  <v-app class="Inicio" >
    <app_bar/>
    <v-img
      src="@/assets/img/inicio.png"
      width="auto"
      height="400"  
      class="my-5"
    >
      <v-flex class="unirse justify-center" >
        <v-btn class="ml-9 " color="white">Hazte miembro</v-btn>
      </v-flex>
    </v-img>
    <v-parallax 
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
          <v-btn class="ma-2" outlined color="white">
            Mujer
          </v-btn>
          <v-btn class="ma-2" outlined color="white">
            Hombre
          </v-btn>
          <v-btn class="ma-2" outlined color="white">
            Niño
          </v-btn>
          <v-btn class="ma-2" outlined color="white">
            Niña
          </v-btn>
        </v-col>
      </v-row>
    </v-parallax>
    <cards/>
    
  </v-app>
</template>

<script>

import cards from "@/components/cards.vue";
import app_bar from "@/components/app_bar.vue";
export default {
  name: 'Inicio',
  components: {
    cards,app_bar
  }
}
</script>

<style scoped>

</style>