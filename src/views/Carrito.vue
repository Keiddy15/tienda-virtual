<<template>
  <v-app>
        <APP_BAR :productos=productos></APP_BAR>
        <v-row>
          <v-col cols="6" md="3" v-for="item in carroItem" :key="item.id">
            <v-card >
              <v-hover>
                <template v-slot:default="{ hover }">
                  <v-img :src="item.src"
                         height="400">
                  </v-img>
                </template>
              </v-hover>
              <v-card-title class="font-weight-light">
                {{item.nombre}}
              </v-card-title>
              <v-card-subtitle class="font-weight-light">
                {{item.precio}}
              </v-card-subtitle>
              <v-card-subtitle class="font-weight-light">
                Cantidad: {{item.cantidad}}
              </v-card-subtitle>
            </v-card>
          </v-col>

        </v-row>

    <v-row>
      <v-col cols="6" md="3" v-for="item in carroItemH" :key="item.id">
        <v-card >
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-img :src="item.src"
                     height="400">
              </v-img>
            </template>
          </v-hover>
          <v-card-title class="font-weight-light">
            {{item.nombre}}
          </v-card-title>
          <v-card-subtitle class="font-weight-light">
            {{item.precio}}
          </v-card-subtitle>
          <v-card-subtitle class="font-weight-light">
            Cantidad: {{item.cantidad}}
          </v-card-subtitle>
        </v-card>
      </v-col>

    </v-row>
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
    <FOOTER/>
  </v-app>
</template>

<script>
import axios from 'axios'
import APP_BAR from "@/components/app_bar";
import FOOTER from "@/components/footer.vue";
export default {
  name: "Carrito",
  data(){
    return{
      dialog: false,
      cedulaReglas: [
        v => !!v || 'La cédula es requerida.'
      ],
      cedula: '',
      inicio_login:[],
      id_venta: 0,
      total: 0,
      info_venta: [],
      productos:JSON.parse(localStorage.getItem('carrito')),
    }
  },
  components: {
    APP_BAR, FOOTER
  },
  methods: {
    comprar(){
      this.inicio_login.push(this.cedula)
      const path = 'http://localhost:5000/Login';
      axios.post(path, this.inicio_login).then((result) => {
        if(result.data==true){
          this.id_venta = Math.random();
          this.info_venta.push({id_venta:this.id_venta,ced_c:this.cedula,
            total:this.total})
          this.insertar_cliente()
        }else{
          alert('No estás registrado')
        }
      })
          .catch((error) => {
            console.log(error);
          });

    },
    insertar_cliente(){
      const path = 'http://localhost:5000/Ventas';
      axios.post(path, this.info_cliente).then((result) => {
        console.log('uwu',result)
      })
          .catch((error) => {
            console.log(error);
          });
    }
  },
  computed: {
    carroItem() {
      return  this.$store.getters.productosCarroM;
    },

   //carroItemH() {
     // return  this.$store.getters.productosCarroH;
    //},
    created() {
      this.carroItem();
      //this.carroItemH();
    },
  }
}
</script>

<style scoped>

</style>