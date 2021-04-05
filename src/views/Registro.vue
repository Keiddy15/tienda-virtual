<template>
  <v-app class="main">
    <APP_BAR/>
    <v-card class="cardForm2 my-4" elevation="20">
      <v-card-title>Registrate</v-card-title>
      <v-card-text>
        <form class="px-3"  @submit.prevent="register" action="#" method="post">
          <v-col cols="12" sm="12" md="12">
            <v-row>
              <v-text-field
                  label="Nombre:"
                  v-model="nombre"
                  :rules="nombreReglas"
                  name="nombre"
                  outlined
                  clearable
                  required
              >
              </v-text-field>
              <v-text-field
                  type="number"
                  label="Cédula:"
                  v-model="cedula"
                  name="cedula"
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
              <v-overflow-btn
                :items="sexo_array"
                label="Sexo:"
                v-model="sexo"
                name="sexo"
                :rules="sexoReglas"
                outlined
                clearable
                required
                item-value="text"
              ></v-overflow-btn>
              <!-- <v-text-field
                  label="Sexo:"
                  v-model="sexo"
                  name="sexo"
                  :rules="sexoReglas"
                  outlined
                  clearable
                  required
              >
              </v-text-field> -->
              <v-text-field
                  type="number"
                  label="Celular:"
                  name="celular"
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
              <v-combobox
                :items="paises"
                label="Pais:"
                v-model="pais"
                name="pais"
                :rules="paisReglas"
                outlined
                clearable
                required
              ></v-combobox>
              <!-- <v-text-field
                  label="Pais:"
                  v-model="pais"
                  name="pais"
                  :rules="paisReglas"
                  outlined
                  clearable
                  required
              >
              </v-text-field> -->
              <v-text-field
                  label="Ciudad:"
                  v-model="ciudad"
                  name="ciudad"
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
            <v-btn @click="guardar_cliente" type="submit" color="grey darken-4 white--text" block large>
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
import axios from 'axios'
import FOOTER from "@/components/footer.vue";
import APP_BAR from "@/components/app_bar.vue";
export default {
  name: "Registro",
  components: {
    FOOTER, APP_BAR
  },
  data() {
    return {
      sexo_array: [
        { text: 'M' },
        { text: 'F' }
      ],
      paises: [
          'Colombia',
          'USA',
          'Mexico',
          'Peru',
          'Chile',
          'Argentina',
          'España',
        ],
      nombre: "",
      cedula: "",
      sexo: "",
      celular: 0,
      pais: "",
      ciudad: "",
      direccion: "",
      show: false,
      info_cliente:[],
      nombreReglas: [(v) => !!v || "Los nombres son requeridos."],
      cedulaReglas: [(v) => !!v || "La cédula son requeridos."],
      sexoReglas: [(v) => !!v || "El sexo es requerida."],
      celularReglas: [(v) => !!v || "El celular es requerido."],
      paisReglas: [(v) => !!v || "El país es requerido."],
      ciudadReglas: [(v) => !!v || "La ciudad es requerida."],
      direccionReglas: [(v) => !!v || "La dirección es requerida."],
    };
  },
  methods:{
    guardar_cliente(){
      this.info_cliente.push({nombre:this.nombre,cedula:this.cedula,
      sexo:this.sexo,celular:this.celular,pais:this.pais,direccion:this.direccion,ciudad:this.ciudad})
      this.insertar_cliente()
      this.$router.push({name: 'Inicio'});
    },
    insertar_cliente(){
      const path = 'http://localhost:5000/Registro';
      axios.post(path, this.info_cliente).then((result) => {
        console.log('uwu',result)
      })
      .catch((error) => {
        console.log(error);
      });
    }
  },
  created () {
    
  }
  
};
</script>
<style scoped>
.cardForm2 {
  padding: 20px;
  width: 1000px;
  margin: auto;
}

.main {
  background-color: #ffffff !important;
}

</style>