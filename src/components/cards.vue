<template>
    <v-app>
    <v-row no-gutters  class="d-flex" >
            <v-col
                cols="12"
                sm="3"
                class=""
            >
                <v-img
                    src="@/assets/img/card1.png"
                    
                    class="align-end card"
                >
                <div class="image_port d-flex justify-center mb-5">
                <v-btn class="button mb-8" dark outlined>COMPRA AHORA</v-btn>
                </div>
                </v-img>
            </v-col>
            <v-col
                cols="12"
                sm="9"
                class=""
            >
                <v-row no-gutters  class="align-stretch pb-5">
                    <v-col
                        cols="12"
                        sm="4"
                        class=""
                    >
                        <v-img
                            src="@/assets/img/card2.jpg"
                            class="align-end img-card ml-4"
                        >
                        <div class="image_port d-flex justify-center mb-5">
                        <v-btn  class="button mb-8" dark outlined>COMPRA AHORA</v-btn>
                        </div>
                        </v-img>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="8"
                        class=""
                    >
                        <v-img
                            src="@/assets/img/card3.jpg"
                            
                            class="align-end pb-1 img-card ml-4"
                        >
                        <div class="image_port d-flex justify-center mb-3">
                        <v-btn  class="button mb-8" dark outlined>COMPRA AHORA</v-btn>
                        </div>
                        </v-img>
                    </v-col>
                </v-row>
                <v-row no-gutters class="">
                    <v-col
                        cols="12"
                        sm="8"
                        class=""
                    >
                        <v-img
                            src="@/assets/img/card3.png"
                            min-height=""
                            
                            class="align-end img-card mx-4"
                        >
                        <div class="image_port d-flex justify-center mb-3">
                        <v-btn  class="button mb-8" dark outlined>COMPRA AHORA</v-btn>
                        </div>
                        </v-img>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="4"
                        class=""
                    >
                        <v-img
                            src="@/assets/img/card2.jpg"
                            
                            
                            class="align-end img-card "
                        >
                        <div class="image_port d-flex justify-center mb-3">
                        <v-btn  class="button mb-8" dark outlined>COMPRA AHORA</v-btn>
                        </div>
                        </v-img>
                    </v-col>
                </v-row>
            </v-col>
    </v-row>
        <!-- <h1 class="text-center font-weight-thin pa-1 titulo">THE NEXT LEVEL</h1> -->
        <!-- <v-parallax 
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
        </v-parallax>    -->
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
.card{

}
.img-card{
    
    height: 100%;
}

</style>