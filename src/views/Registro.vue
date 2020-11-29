<template>
  <v-app class="main">
    <APP_BAR/>
    <v-card class="cardForm2" elevation="20">
      <v-card-title>Registrate</v-card-title>
      <v-card-text>
        <form class="px-3" action="#" @submit.prevent="register">
          <v-col cols="12" sm="12" md="12">
            <v-row>
              <v-text-field
                  label="Nombre:"
                  v-model="nombre"
                  :rules="nombreReglas"
                  outlined
                  clearable
                  required
              >
              </v-text-field>
              <v-text-field
                  type="number"
                  label="Cédula:"
                  v-model="cedula"
                  :rules="cedulaReglas"
                  outlined
                  clearable
                  required
              >
              </v-text-field>
            </v-row>
          </v-col>
          <v-col cols="12" sm="12" md="12">
            <v-row>
              <v-text-field
                  label="Sexo:"
                  v-model="sexo"
                  :rules="sexoReglas"
                  outlined
                  clearable
                  required
              >
              </v-text-field>
              <v-text-field
                  type="number"
                  label="Celular:"
                  v-model="celular"
                  :rules="celularReglas"
                  outlined
                  clearable
                  required
              >
              </v-text-field>
            </v-row>
          </v-col>
          <v-col cols="12" sm="12" md="12">
            <v-row>
              <v-text-field
                  label="Pais:"
                  v-model="pais"
                  :rules="paisReglas"
                  outlined
                  clearable
                  required
              >
              </v-text-field>
              <v-text-field
                  label="Ciudad:"
                  v-model="ciudad"
                  :rules="ciudadReglas"
                  outlined
                  clearable
                  required
              >
              </v-text-field>
            </v-row>
          </v-col>
          <v-col cols="12" sm="12" md="12">
            <v-row>
              <v-text-field
                  label="Dirección:"
                  v-model="direccion"
                  :rules="direccionReglas"
                  outlined
                  clearable
                  required
              >
              </v-text-field>
            </v-row>
          </v-col>
          <v-card-actions class="justify-center">
            <v-btn type="submit" color="primary white--text" block large>
              Registrarme
            </v-btn>
          </v-card-actions>
        </form>
      </v-card-text>
    </v-card>
    <FOOTER/>
  </v-app>
</template>
<script>
import FOOTER from "@/components/footer.vue";
import APP_BAR from "@/components/app_bar.vue";
export default {
  name: "Registro",
  components: {
    FOOTER, APP_BAR
  },
  data() {
    return {
      nombre: "",
      cedula: "",
      sexo: "",
      celular: 0,
      pais: "",
      ciudad: "",
      direccion: "",
      show: false,
      nombreReglas: [(v) => !!v || "Los nombres son requeridos."],
      cedulaReglas: [(v) => !!v || "La cédula son requeridos."],
      sexoReglas: [(v) => !!v || "El sexo es requerida."],
      celularReglas: [(v) => !!v || "El celular es requerido."],
      paisReglas: [(v) => !!v || "El país es requerido."],
      ciudadReglas: [(v) => !!v || "La ciudad es requerida."],
      direccionReglas: [(v) => !!v || "La dirección es requerida."],
    };
  },
};
</script>
<style scoped>
.cardForm2 {
  padding: 20px;
  width: 1000px;
  margin: auto;
}

.main {
  background-color: #0d47a0 !important;
}
</style>