<template>
  <v-card>
    <v-simple-table>
      <template v-slot:default>
        <thead>
        <tr>
        <tr>
          <th class="text-left">
            Id producto
          </th>
          <th>
            Id categoría
          </th>
          <th class="text-left">
            Nombre
          </th>
          <th>
            Descripción
          </th>
          <th>
            Cantidad
          </th>
          <th>
            Valor unitario
          </th>
          <th class="text-left">
            Id
          </th>
          <th class="text-left">
            Nombre
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
          <td>{{ item[4] }}</td>
          <td>{{ item[5] }}</td>
          <td>{{ item[5] }}</td>
          <td>{{ item[6] }}</td>
          <td>{{ item[7] }}</td>
          <td>{{ item[8] }}</td>
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
      const path = 'http://vibes-api.epizy.com/Admin/cate_produ'
      axios.get(path).then((respuesta) => {
        this.categorias = respuesta.data
        this.titulo = 'Cate_produ'
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