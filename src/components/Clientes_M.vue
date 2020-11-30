<template>
  <v-card>
    <v-simple-table>
      <template v-slot:default>
        <thead>
        <tr>
          <th class="text-left">
            Cédula
          </th>
          <th>
            Nombre
          </th>
          <th class="text-left">
            Sexo
          </th>
          <th>
            Celular
          </th>
          <th>
            Pais
          </th>
          <th>
            Ciudad
          </th>
          <th>
            Dirección
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
          <td>{{ item[6] }}</td>
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
      const path = 'http://localhost:5000/Admin/clientes'
      axios.get(path).then((respuesta) => {
        this.categorias = respuesta.data
        this.titulo = 'Clientes'
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