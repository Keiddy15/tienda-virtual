<template>
        <v-card >
            <v-app-bar prominent class="toolbar content" flat dense app fixed>
                <v-app-bar-nav-icon class="ma-5">
                    <v-img @click="inicio" src="@/assets/img/logo_violette.png" width="150" height="100"></v-img>
                </v-app-bar-nav-icon>
                <v-toolbar-items class="hidden-sm-and-down">
                    <v-btn @click="mujer" text>CATALOGO <v-icon right>mdi-chevron-down</v-icon></v-btn>
                </v-toolbar-items>
                <v-spacer></v-spacer>
                <v-toolbar-items >
                    <v-btn class="hidden-sm-and-down" @click="carrito_compra" icon>
                        <v-badge
                            :content="this.$store.getters.carrito.length"
                            :value="this.$store.getters.carrito.length"
                            color="grey darken-1"
                            overlap 
                        >
                            <v-icon color="black">mdi-shopping</v-icon>
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
                <v-menu class="hidden-md-and-up">
                    
                    <!-- <v-app-bar-nav-icon v-bind="attrs" v-on="on"></v-app-bar-nav-icon> -->
                    <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
                    
                    <v-list>
                        <v-list-tile>
                            <v-list-tile-content>
                                <v-list-tile-title> <v-btn @click="mujer" text>CATALOGO <v-icon right>mdi-chevron-down</v-icon></v-btn> </v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile>   
                            <v-list-tile-content>
                                <v-list-tile-title> <v-btn @click="carrito_compra" icon>
                                    <v-badge
                                        :content="this.$store.getters.carrito.length"
                                        :value="this.$store.getters.carrito.length"
                                        color="grey darken-1"
                                        overlap 
                                    >
                                        <v-icon color="black">mdi-shopping</v-icon>
                                    </v-badge>
                                </v-btn></v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile>
                            <v-list-tile-content>
                                <v-list-tile-title> <v-btn icon v-show="cuenta">
                                    <v-avatar @click="cerrar_cuenta" class=" mx-2" size="34"  color="blue darken-3">
                                        <span class="white--text headline">{{this.cuenta[0]}}</span>
                                    </v-avatar>
                                </v-btn></v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile>
                            <v-list-tile-content>
                                <v-list-tile-title> <v-btn v-show="!cuenta" @click="login" class="catalogo" text>
                                    <v-icon left>mdi-account</v-icon>
                                    Ingresar 
                                </v-btn></v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                    
                    
                </v-menu>
                
            </v-app-bar>
        </v-card>
    
    
</template>

<script>
    export default {
        name: "APP_BAR",
        data() {
            return {
                cuenta:false,
                items: [
                    { title: 'Cerrar sesión' },
                ],
            }
        },
        props:{
            productos:Number
        },
        methods: {
            login() {
                this.$router.push({name: 'Login'});
            },
            mujer() {
                this.$router.push({name: 'Mujer'});
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
            // let num_product=JSON.parse(localStorage.getItem('carrito'))
            // if (num_product==null){
            //     this.productos=0;
            // }else{
            //     this.productos=num_product;
            // }
        },

        watch:{
            name_localstorage(){
                localStorage.name='carrito'
            }
        },
        computed: {


        },
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
    .catalogo{
        font-family: 'Poppins', sans-serif;
        letter-spacing: 3px;
    }
    .toolbar{
        background-color: #C370E2 !important;
    }
    .toolbar.content{
        padding:0 3% !important;
    }
</style>