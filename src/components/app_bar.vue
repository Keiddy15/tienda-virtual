<template>
    <v-row class="child-flex">
        <div>
            <v-toolbar color="blue darken-3" height="60" dense>
                <v-app-bar-nav-icon class="ma-5">
                    <v-img @click="inicio" src="@/assets/img/icono.png" width="70" height="70"></v-img>
                </v-app-bar-nav-icon>
                <v-toolbar-items >
                    <v-btn @click="mujer" text>MUJER</v-btn>
                    <v-btn @click="hombre" text>HOMBRE</v-btn>
                    <v-btn @click="ninos" text>NIÑOS</v-btn>
                </v-toolbar-items>

            </v-toolbar>
        </div>

        <div style="flex-basis: 20%">
            <v-toolbar dark dense height="60">
                <v-spacer></v-spacer>

                <v-toolbar-items>
                <v-btn icon>
                    <v-icon>mdi-shopping</v-icon>
                </v-btn>

                <v-btn @click="login" class="catalogo" text>
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
            inicio() {
                this.$router.push({name: 'Inicio'});
            },
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