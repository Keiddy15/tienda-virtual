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
              <img align="center"  style="display:block" alt="" :src="item.src"
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
            color="grey darken-4 "
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
    <div class="text-center">
      <v-snackbar
        v-model="snackbar"
        :multi-line="multiLine"
      >
        Gracias por su compra

        <template v-slot:action="{ attrs }">
          <v-btn
            color="red"
            text
            v-bind="attrs"
            @click="snackbar = false"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>
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
      produc_vent:[],
      snackbar:false,
    }
  },
  components: {
    APP_BAR, FOOTER
  },
  methods: {
    inicio() {
        this.$router.push({name: 'Inicio'});
    },
    comprar() {
      this.creacion_id()
      this.inicio_login.push(this.cedula)
      this.total=this.$store.getters.cartTotal
      this.dialog=false;
      this.snackbar = true
      const path = 'http://vibes-api.epizy.com/Login';
      axios.post(path, this.inicio_login).then((result) => {
        if (result.data != false) {
          this.info_venta.push({
            id_venta: this.id_venta, ced_c: this.cedula,
            total: this.total
          })
          for (let i = 0; i < this.$store.getters.carrito.length; i++) {
            this.produc_vent.push({id_venta:this.id_venta,id_prod:this.$store.getters.carrito[i]['id'], cant:this.$store.getters.carrito[i]['cantidad']})
          }
          this.insertar_cliente()
          this.insertar_prod_vent()
          setTimeout(this.inicio(),9000);
        } else {
          alert('No estás registrado')
        }
      })
          .catch((error) => {
            console.log(error);
          });
    },
    creacion_id() {
      const path = 'http://vibes-api.epizy.com/Admin/ventas'
      axios.get(path).then((respuesta) => {

        this.ventas = respuesta.data
        var longitud = (this.ventas.length)
        this.id_venta = longitud
        
      })
    },
    insertar_cliente() {
      const path = 'http://vibes-api.epizy.com/Ventas';
      axios.post(path, this.info_venta).then((result) => {
        console.log('uwu', result)
      })
          .catch((error) => {
            console.log(error);
          });
    },
    remove(index){
      this.$store.dispatch('removeProduct', index)
    },
    insertar_prod_vent(){
      const path = 'http://vibes-api.epizy.com/Prod_vent';
      console.log('hola')
      axios.post(path, this.produc_vent).then((result) => {
        console.log('uwu', result)
      })
          .catch((error) => {
            console.log(error);
          });
    }

  },
  computed: {
    ...mapGetters({
      carroItem: 'PCM',
      cartTotal: 'cartTotal',
      idProd:'idProd',
      cantProd:'cantProd',
      carrito:'carrito',
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