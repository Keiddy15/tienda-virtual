<template>
    <v-row class="child-flex">
        <div>
            <v-toolbar color="blue darken-3" height="60" dense>
                <v-app-bar-nav-icon class="ma-5">
                    <v-img @click="inicio" src="@/assets/img/icono.png" width="70" height="70"></v-img>
                </v-app-bar-nav-icon>
                <v-toolbar-items >
                    <v-btn @click="mujer" text>MUJER <v-icon right>mdi-chevron-down</v-icon></v-btn>
                    <v-btn @click="hombre" text>HOMBRE<v-icon right>mdi-chevron-down</v-icon></v-btn>
                    <v-btn @click="ninos" text>NIÑOS<v-icon right>mdi-chevron-down</v-icon></v-btn>
                    <v-btn @click="ninas" text>NIÑAS<v-icon right>mdi-chevron-down</v-icon></v-btn>
                </v-toolbar-items>

            </v-toolbar>
        </div>

        <div style="flex-basis: 20%">
            <v-toolbar dark dense height="60">
                <v-spacer></v-spacer>

                <v-toolbar-items>
                    <v-btn @click="carrito_compra" icon>
                        <v-badge
                            :content="productos"
                            :value="productos"
                            color="blue darken-3"
                            overlap

                        >

                            <v-icon>mdi-shopping</v-icon>
                        </v-badge>
                    </v-btn>
                    <v-btn icon v-show="cuenta">
                        <v-avatar @click="cerrar_cuenta" class=" mx-2" size="34"  color="blue darken-3">
                            <span class="white--text headline">{{this.cuenta[0]}}</span>
                        </v-avatar>
                    </v-btn>
                    
                    <v-btn v-show="!cuenta" @click="login" class="catalogo" text>
                        <v-icon left>mdi-account</v-icon>
                        Ingresar 
                    </v-btn>

                </v-toolbar-items>
            </v-toolbar>
        </div>
    </v-row>
</template>

<script>
    export default {
        name: "APP_BAR",
        data() {
            return {
               cuenta:false,
               
            }
        },
        props:{
            productos:Number
        },
        methods: {
            login() {
                this.$router.push({name: 'Login'});
            },
            hombre() {
                this.$router.push({name: 'Hombre'});
            },
            mujer() {
                this.$router.push({name: 'Mujer'});
            },
            ninos() {
                this.$router.push({name: 'Ninos'});
            },
            ninas() {
                this.$router.push({name: 'Ninas'});
            },
            inicio() {
                this.$router.push({name: 'Inicio'});
            },
            carrito_compra() {
                this.$router.push({name: 'Carrito'});
            },
            cerrar_cuenta(){
                localStorage.removeItem('cuenta');
                this.cuenta=false;
            }
        },

        created(){
            this.cuenta=JSON.parse(localStorage.getItem('cuenta'))[0][1]
            let num_product=JSON.parse(localStorage.getItem('carrito'))
            if (num_product==null){
                this.productos=0;
            }else{
                this.productos=num_product;
            }
        },
        watch:{
            name_localstorage(){
                localStorage.name='carrito'
            }
        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
    .catalogo{
        font-family: 'Poppins', sans-serif;
        letter-spacing: 3px;
    }
</style>