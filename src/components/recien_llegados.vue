<template>
    <v-app class="mx-9">
        <div class="mx-9">
            <h1 class="text-center mb-2 titulo">NUEVOS PRODUCTOS</h1>
            
            <v-row  class="mx-9 mb-5 linea ">
                <v-col cols="6" md="3" v-for="p in 8" :key="p.src">
                    <v-img
                        src="@/assets/img/falda_top.jpg"
                        class="align-end card"
                    >
                    <div class="image_port d-flex justify-center mb-5">
                    <v-btn  class="button mb-8" dark outlined>COMPRA AHORA</v-btn>
                    </div>
                    </v-img>
                </v-col>
            </v-row>
            <div class="d-flex justify-center">
                <v-btn @click="catalogo" class="button catalogo mb-8" dark outlined>Ver Catalogo</v-btn>
            </div>
            
            <!-- <v-row  class="mx-9">
                <v-col
                    cols="12"
                    sm="3"
                    class=""
                >
                    <v-img
                        src="@/assets/img/falda_top.jpg"
                        
                        class="align-end card"
                    >
                    <div class="image_port d-flex justify-center mb-5">
                    <v-btn @click="registrar" class="button mb-8" dark outlined>COMPRA AHORA</v-btn>
                    </div>
                    </v-img>
                </v-col>
                <v-col
                    cols="12"
                    sm="3"
                    class=""
                >
                    <v-img
                        src="@/assets/img/falda_top.jpg"
                        
                        class="align-end card"
                    >
                    <div class="image_port d-flex justify-center mb-5">
                    <v-btn @click="registrar" class="button mb-8" dark outlined>COMPRA AHORA</v-btn>
                    </div>
                    </v-img>
                </v-col>
                <v-col
                    cols="12"
                    sm="3"
                    class=""
                >
                    <v-img
                        src="@/assets/img/falda_top.jpg"
                        
                        class="align-end card"
                    >
                    <div class="image_port d-flex justify-center mb-5">
                    <v-btn @click="registrar" class="button mb-8" dark outlined>COMPRA AHORA</v-btn>
                    </div>
                    </v-img>
                </v-col>
                <v-col
                    cols="12"
                    sm="3"
                    class=""
                >
                    <v-img
                        src="@/assets/img/falda_top.jpg"
                        
                        class="align-end card"
                    >
                    <div class="image_port d-flex justify-center mb-5">
                    <v-btn @click="registrar" class="button mb-8" dark outlined>COMPRA AHORA</v-btn>
                    </div>
                    </v-img>
                </v-col>

            </v-row> -->
        </div>
    </v-app>
</template>

<script>
    export default {
        name: "cards",
        methods: {
            catalogo() {
                this.$router.push({name: 'Mujer'});
            },
        }
    }
</script>

<style scoped>
    .catalogo{
        color: #C370E2 !important;
    }
    .linea{
        border-top: solid 1px rgba(167, 167, 167, 0.733);
    }
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
    .titulo{
        font-family: 'Poppins', sans-serif;
        letter-spacing: 3px;
        color:#666666;
        margin-top: 1%;
    }

</style>