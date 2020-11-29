<template>
  <v-app>
    <div>
      <h1>Carrito</h1>
      <ul>
        <li v-for="item in carroItem" :key="item.id">
          {{item.nombre}} {{item.src}} {{item.precio}} {{item.cantidad}}

        </li>
      </ul>
    </div>
  </v-app>
</template>

<script>
export default {
name: "carrito",
  computed: {
  carroItem() {
    return  this.$store.getters.productosCarro;
  }
  }
}
</script>

<style scoped>

</style>