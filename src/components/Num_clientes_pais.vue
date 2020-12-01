<template>
  <v-card>
    <v-simple-table>
      <template v-slot:default>
        <thead>
        <tr>
          <th class="text-left">
            Número de clientes
          </th>
          <th class="text-left">
            Pais
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
  name: "Num_clientes_pais",
  data() {
    return {
      body_t: [],
      titulo: '',
      categorias: [],
    }
  },
  methods: {
    loadDataTable() {
      const path = 'http://localhost:5000/Admin/Num_clientes_ciudad'
      axios.get(path).then((respuesta) => {
        this.categorias = respuesta.data
        this.titulo = 'Categorias'
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