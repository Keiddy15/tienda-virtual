<template>
  <v-app class="Inicio" >
    
    <APP_BAR/>
    <v-img
      src="@/assets/img/inicio.png"
      width="auto"
      height="400"  
      class="mb-5"
    >
    <v-btn @click="registrar" class="ml-9 button" dark outlined>Hazte miembro</v-btn>
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
    <FOOTER/>
  </v-app>
</template>

<script>

import cards from "@/components/cards.vue";
import APP_BAR from "@/components/app_bar.vue";
import FOOTER from "@/components/footer.vue";
export default {
  name: 'Inicio',
  components: {
    cards,APP_BAR,FOOTER
  },
  methods: {
            registrar() {
                this.$router.push({name: 'Registro'});
            },
        }
}
</script>

<style scoped>
.button{
  position:relative;
  left:122px;
  top: 350px;
}
</style>