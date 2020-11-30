<template>
  <v-app class="main">
    <APP_BAR :productos=productos></APP_BAR>
    <v-card class="cardForm" elevation="20" height="100%">
      <v-card-text class="textUser" >
        <h1 style="letter-spacing: 2px; line-height: 40px">Carrito de compras </h1>

      </v-card-text>
      <v-simple-table height="100%">
        <template v-slot:default>
          <thead>
          <tr>
            <th>

            </th>
            <th class="text-left">
              ID
            </th>
            <th class="text-left">
              Nombre
            </th>
            <th class="text-left">
              Precio
            </th>
            <th class="text-left">
              Cantidad
            </th>
          </tr>
          </thead>
          <tbody>
          <tr
              v-for="(item, $index) in carroItem"
              :key="item"
          >
            <td>
              <img align="center"  style="display:block" :src="item.src"
                     height="80" >
            </td>
            <td>{{ item.id }}</td>
            <td>{{ item.nombre }}</td>
            <td>{{ item.precio}}</td>
            <td>
              {{ item.cantidad }}
                <v-btn fab small dark color="indigo">
                  <v-icon dark @click="remove(index)"> </v-icon>
                </v-btn>
            </td>
            <td></td>
          </tr>
          </tbody>
        </template>
      </v-simple-table>

      <h4 align="center">Total: {{cartTotal || 0}}</h4>
      <v-layout row justify-center>
        <v-btn
            color="primary"
            dark
            @click.stop="dialog = true"
        >
          Comprar
        </v-btn>

        <v-dialog
            v-model="dialog"
            max-width="290"
        >
          <v-card>
            <v-card-title class="headline">Cédula</v-card-title>

            <v-card-text>
              Ingrese su cédula
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-text-field
                  label="Cédula:"
                  v-model="cedula"
                  required
                  :rules="cedulaReglas">
              </v-text-field>
              <v-btn
                  color="green darken-1"
                  @click="comprar"
              >
                Aceptar
              </v-btn>

            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-layout>
    </v-card>


    <FOOTER/>
  </v-app>
</template>

<script>
import axios from 'axios'
import APP_BAR from "@/components/app_bar";
import FOOTER from "@/components/footer.vue";
import {mapGetters} from 'vuex'

export default {
  name: "Carrito",
  data() {
    return {
      dialog: false,
      cedulaReglas: [
        v => !!v || 'La cédula es requerida.'
      ],
      cedula: '',
      inicio_login: [],
      id_venta: 0,
      total: 0,
      info_venta: [],
      productos: JSON.parse(localStorage.getItem('carrito')),
    }
  },
  components: {
    APP_BAR, FOOTER
  },
  methods: {

    comprar() {
      this.creacion_id()
      console.log(this.id_venta)
      this.inicio_login.push(this.cedula)
      const path = 'http://localhost:5000/Login';
      axios.post(path, this.inicio_login).then((result) => {
        if (result.data == true) {
          this.info_venta.push({
            id_venta: this.id_venta, ced_c: this.cedula,
            total: this.total
          })
          console.log(this.info_venta)
          this.insertar_cliente()
        } else {
          alert('No estás registrado')
        }
      })
          .catch((error) => {
            console.log(error);
          });

    },
    creacion_id() {
      const path = 'http://localhost:5000/Admin/ventas'
      axios.get(path).then((respuesta) => {

        this.ventas = respuesta.data
        var longitud = (this.ventas.length)
        this.id_venta = longitud
        console.log(this.id_venta)
      })
    },
    insertar_cliente() {
      const path = 'http://localhost:5000/Ventas';
      axios.post(path, this.info_venta).then((result) => {
        console.log('uwu', result)
      })
          .catch((error) => {
            console.log(error);
          });
    },
    remove(index){
      this.$store.dispatch('removeProduct', index)
    }

  },
  computed: {
    ...mapGetters({
      carroItem: 'PCM',
      cartTotal: 'cartTotal'
    })

  },

}
</script>

<style scoped>
.textUser {
  text-align: center;
  color: black !important;
}

.cardForm {
  padding: 0px;
  margin: 20px;
}
.main{
 background-color: gray !important;
}
</style>