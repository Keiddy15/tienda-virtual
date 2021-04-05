<template>
  <v-card>
    <v-simple-table>
      <template v-slot:default>
        <thead>
        <tr>
          <th class="text-left">
            ID
          </th>
         <th class="text-left">
            Cliente
          </th>
         <th class="text-left">
            Fecha
          </th>
         <th class="text-left">
            Total
          </th>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="item in body_t"
            :key="item"
        >
          <td>{{ item[0] }}</td>
          <td>{{ item[1] }}</td>
          <td>{{ item[2] }}</td>
          <td>{{ item[3] }}</td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
name: "Total_ventas",
  data() {
    return {
      body_t: [],
      titulo: '',
      categorias: [],
    }
  },
  methods: {
    loadDataTable() {
      this.loadingData = !this.loadingData;
      this.data = [];
      const path = 'http://vibes-api.epizy.com/Admin/ventas_clientes'
      axios.get(path).then((respuesta) => {
        this.categorias = respuesta.data
        this.titulo = 'Clientes'
        console.log("hola")
        for (let i = 0; i < this.categorias.length; i++) {
            console.log("hola2")
          this.body_t.push(this.categorias[i])
        }

      })
          .catch((error) => {
            console.log(error)
          })
    }
  },
  created() {
    this.loadDataTable();
  },
}
</script>

<style scoped>

</style>