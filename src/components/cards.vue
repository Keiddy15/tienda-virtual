<template>
    <v-app>
        <h1 class="text-center font-weight-thin pa-1 titulo">THE NEXT LEVEL</h1>
        <v-parallax 
            src="@/assets/img/fondo_azul_inicio.jpg" 
            class="ma-5"
            height="auto"
        >
            <v-row class="ml-5 compra" justify="space-around">
                <v-col cols="12" md="auto">
                    <v-img
                        class=" align-center" width="400" height="500"
                        src="@/assets/img/mujer.png"
                    >
                        <v-row justify="center">
                            <v-col md="auto">
                                <v-btn @click="mujer" color="white">Compra Ahora</v-btn> 
                            </v-col>
                        </v-row>
                    </v-img>
                </v-col>
                <v-col cols="12" md="auto" >
                    <v-img
                            class="align-center" width="400" height="500"
                            src="@/assets/img/hombre.png"
                    >   
                        <v-row justify="center">
                            <v-col md="auto">
                                <v-btn @click="hombre"  color="white">Compra Ahora</v-btn> 
                            </v-col>
                        </v-row>
                        
                    </v-img>
                </v-col>
            </v-row>
        </v-parallax>   
    </v-app>
</template>

<script>
    export default {
        name: "cards",
        methods: {
            hombre() {
                this.$router.push({name: 'Hombre'});
            },
            mujer() {
                this.$router.push({name: 'Mujer'});
            },
        }
    }
</script>

<style scoped>
.titulo{
    font-size: 150px;
}

</style>