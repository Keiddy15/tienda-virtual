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
          Ventas
        </v-tab>
        <v-tab-item>
          <v-card elevation="15" color="#FFF" raised class="cardForm">
            <v-card-text class="textUser">
              <h1 style="letter-spacing: 2px; line-height: 40px">
                Categorías</h1>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text>
              <v-tabs
                  fixed-tabs
                  background-color="primary"
                  dark
                  show-arrows
              >
                <v-tab>
                  Todas las categorías
                </v-tab>
                <v-tab>
                  Productos por categoría
                </v-tab>
                <v-tab-item>
                  <v-card elevation="15" color="#FFF" raised class="cardForm">
                    <v-card-text class="textUser">
                      <h1 style="letter-spacing: 2px; line-height: 40px">
                        Todas las categorías
                      </h1>
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
                        Productos por categoría
                      </h1>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-text>
                      <Num_produc_cate/>
                      <v-spacer></v-spacer>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs>
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
              <v-tabs
                  fixed-tabs
                  background-color="primary"
                  dark
                  show-arrows
              >
                <v-tab>
                  Todos los productos
                </v-tab>
                <v-tab>
                  Categorías y productos
                </v-tab>
                <v-tab>
                  Producto con mayor valor
                </v-tab>
                <v-tab-item>
                  <v-card elevation="15" color="#FFF" raised class="cardForm">
                    <v-card-text class="textUser">
                      <h1 style="letter-spacing: 2px; line-height: 40px">
                        Todas los productos
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
                        Categoría y productos
                      </h1>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-text>
                      <Cate_produ/>
                      <v-spacer></v-spacer>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card elevation="15" color="#FFF" raised class="cardForm">
                    <v-card-text class="textUser">
                      <h1 style="letter-spacing: 2px; line-height: 40px">
                        Producto con mayor valor
                      </h1>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-text>
                      <Producto_mayor/>
                      <v-spacer></v-spacer>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs>

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
              <v-tabs
                  fixed-tabs
                  background-color="primary"
                  dark
                  show-arrows
              >
                <v-tab>
                  Listado de clientes
                </v-tab>
                <v-tab>
                  Número total de clientes
                </v-tab>
                <v-tab>
                  Clientes por ciudad
                </v-tab>
                <v-tab>
                  Clientes por país
                </v-tab>
                <v-tab-item>
                  <v-card elevation="15" color="#FFF" raised class="cardForm">
                    <v-card-text class="textUser">
                      <h1 style="letter-spacing: 2px; line-height: 40px">
                        Listado de clientes
                      </h1>
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
                        Número total de clientes
                      </h1>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-text>
                      <Num_clientes/>
                      <v-spacer></v-spacer>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card elevation="15" color="#FFF" raised class="cardForm">
                    <v-card-text class="textUser">
                      <h1 style="letter-spacing: 2px; line-height: 40px">
                        Número de clientes por ciudad
                      </h1>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-text>
                      <Num_clientes_ciudad/>
                      <v-spacer></v-spacer>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card elevation="15" color="#FFF" raised class="cardForm">
                    <v-card-text class="textUser">
                      <h1 style="letter-spacing: 2px; line-height: 40px">
                        Número de clientes por país
                      </h1>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-text>
                      <Num_clientes_pais/>
                      <v-spacer></v-spacer>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs>

              <v-spacer></v-spacer>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card elevation="15" color="#FFF" raised class="cardForm">
            <v-card-text class="textUser">
              <h1 style="letter-spacing: 2px; line-height: 40px">
                Ventas</h1>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text>
              <v-tabs
                  fixed-tabs
                  background-color="primary"
                  dark
                  show-arrows
              >
                <v-tab>
                  Listado de las ventas
                </v-tab>
                <v-tab>
                  Número total de ventas por ciudad
                </v-tab>
                <v-tab>
                  Mayor y menor ingreso del mes
                </v-tab>
                <v-tab>
                  Ventas y clientes
                </v-tab>
                <v-tab>
                  Promoción
                </v-tab>
                <v-tab>
                  Sin Promoción
                </v-tab>
                <v-tab>
                  Ventas y productos
                </v-tab>
                <v-tab>
                  Ventas por categoria
                </v-tab>
                <v-tab-item>
                  <v-card elevation="15" color="#FFF" raised class="cardForm">
                    <v-card-text class="textUser">
                      <h1 style="letter-spacing: 2px; line-height: 40px">
                        Listado de las ventas
                      </h1>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-text>
                      <Ventas/>
                      <v-spacer></v-spacer>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card elevation="15" color="#FFF" raised class="cardForm">
                    <v-card-text class="textUser">
                      <h1 style="letter-spacing: 2px; line-height: 40px">
                        Número total de ventas por ciudad
                      </h1>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-text>
                      <Total_ventas/>
                      <v-spacer></v-spacer>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card elevation="15" color="#FFF" raised class="cardForm">
                    <v-card-text class="textUser">
                      <h1 style="letter-spacing: 2px; line-height: 40px">
                        Mayor y menor ingreso del mes
                      </h1>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-text>
                      <Mayor_menor_ventas/>
                      <v-spacer></v-spacer>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card elevation="15" color="#FFF" raised class="cardForm">
                    <v-card-text class="textUser">
                      <h1 style="letter-spacing: 2px; line-height: 40px">
                        Ventas y clientes
                      </h1>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-text>
                      <Ventas_clientes/>
                      <v-spacer></v-spacer>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card elevation="15" color="#FFF" raised class="cardForm">
                    <v-card-text class="textUser">
                      <h1 style="letter-spacing: 2px; line-height: 40px">
                        Compras a tener en cuenta para posibles promociones
                      </h1>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-text>
                      <Promocion/>
                      <v-spacer></v-spacer>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card elevation="15" color="#FFF" raised class="cardForm">
                    <v-card-text class="textUser">
                      <h1 style="letter-spacing: 2px; line-height: 40px">
                        Compras sin promociones
                      </h1>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-text>
                      <NoPromocion/>
                      <v-spacer></v-spacer>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card elevation="15" color="#FFF" raised class="cardForm">
                    <v-card-text class="textUser">
                      <h1 style="letter-spacing: 2px; line-height: 40px">
                        Ventas y Productos
                      </h1>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-text>
                      <Vent_prod/>
                      <v-spacer></v-spacer>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card elevation="15" color="#FFF" raised class="cardForm">
                    <v-card-text class="textUser">
                      <h1 style="letter-spacing: 2px; line-height: 40px">
                        Ventas por categoria
                      </h1>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-text>
                      <VentasPorcategoria/>
                      <v-spacer></v-spacer>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs>
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
import Num_produc_cate from "@/components/num_produc_cate";
import Clientes from "@/components/Clientes";
import Cate_produ from "@/components/Cate_produ";
import Ventas from "@/components/Ventas";
import Total_ventas from '../components/total_ventas.vue';
import Mayor_menor_ventas from '../components/Mayor_menor_ventas.vue';
import Ventas_clientes from '../components/Ventas_clientes.vue';
import Num_clientes from '../components/Num_clientes.vue';
import Num_clientes_ciudad from '../components/Num_clientes_ciudad.vue';
import Promocion from "@/components/Promocion";
import Vent_prod from "@/components/Vent_prod";
import Num_clientes_pais from "@/components/Num_clientes_pais";
import NoPromocion from "@/components/NoPromocion";
import Producto_mayor from '../components/Producto_mayor.vue';
import VentasPorcategoria from '../components/VentasPorcategoria.vue';
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
    APP_BAR, FOOTER, Categoria, Productos, Clientes, Cate_produ, Num_produc_cate, Ventas,
    Total_ventas, Mayor_menor_ventas, Ventas_clientes, Num_clientes, Num_clientes_ciudad,
    Promocion, Vent_prod, Num_clientes_pais, NoPromocion,
    Producto_mayor,VentasPorcategoria
  },
  methods: {}

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