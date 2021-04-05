<template>
    <v-footer
        padless
        class="footer"
    >
        <v-row
            justify="center"
            no-gutters
        >
        <v-btn
            v-for="icon in icons"
            :key="icon"
            color="white"
            text
            rounded
            class="my-2"
        >
            <v-icon>
                {{ icon }}
            </v-icon>
            
        </v-btn>
            <v-col
                class="grey darken-4 py-4 text-center white--text"
                cols="12"
            >
                {{ new Date().getFullYear() }} — <strong>VIOLETTE</strong>
            </v-col>
        </v-row>
    </v-footer>


</template>

<script>
    export default {
        name: "FOOTER",
        data: () => ({
            icons: [
                'mdi-facebook',
                'mdi-twitter',
                'mdi-instagram',
            ],
        }),
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
    .catalogo{
        font-family: 'Poppins', sans-serif;
        letter-spacing: 3px;
    }
    .footer{
        background-color: #C370E2 !important;
    }
</style>