<template>
  <v-app class="Inicio" >
    
    <APP_BAR/>
    <v-card class="cardForm2" elevation="20">
        <v-card-title>CARRITO DE COMPRA</v-card-title>
        <v-card-text>
            <v-data-table
                :headers="headers"
                :items="desserts"
                :items-per-page="5"
                class="elevation-1"
            ></v-data-table>
        </v-card-text>
    </v-card>
    
    <FOOTER/>
  </v-app>
</template>

<script>


import APP_BAR from "@/components/app_bar.vue";
import FOOTER from "@/components/footer.vue";
export default {
    name: 'Inicio',
    data () {
        return {
            headers: [
                { text: 'Producto', value: 'producto' },
                { text: 'Precio', value: 'precio' },
                { text: 'Cantidad', value: 'cantidad' },
                { text: 'Total', value: 'total' },
                { text: '', value: '' },
            ],
            desserts: [],
        }
    },
    components: {
        APP_BAR,FOOTER
    },
    methods: {
        
    }
    
}


</script>

<style scoped>
.cardForm2 {
    padding: 20px;
    width: 500px;
    margin: auto;
}
.main {
    background-color: #0d47a0 !important;
}
</style>