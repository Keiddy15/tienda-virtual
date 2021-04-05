<template>
  <v-card>
    <v-simple-table>
      <template v-slot:default>
        <thead>
        <tr>
        <tr>
          <th class="text-left">
            Numero de productos
          </th>
          <th>
            Nombre categoria
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
        </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  name: "Clientes",
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
      const path = 'http://vibes-api.epizy.com/Admin/num_produc_cate'
      axios.get(path).then((respuesta) => {
        this.categorias = respuesta.data
        for (let i = 0; i < this.categorias.length; i++) {
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