<template>
    <v-app class="main">
        <v-card class="cardForm2" elevation="20">
            <v-card-title>Registrate</v-card-title>
            <v-card-text>
                <form class="px-3" action="#" @submit.prevent="register">
                    <v-text-field
                        label="Nombre:"
                        v-model="nombre"
                        :rules="nombreReglas"
                        required
                    >
                    </v-text-field>
                    <v-text-field
                        type="number"
                        label="Cédula:"
                        v-model="cedula"
                        :rules="cedulaReglas"
                        required
                    >
                    </v-text-field>
                    <v-text-field
                        label="Sexo:"
                        v-model="sexo"
                        :rules="sexoReglas"
                        required
                    >
                    </v-text-field>
                    <v-text-field
                        type="number"
                        label="Celular:"
                        v-model="celular"
                        :rules="celularReglas"
                        required
                    >
                    </v-text-field>
                    <v-text-field
                        label="Pais:"
                        v-model="pais"
                        :rules="paisReglas"
                        required
                    >
                    </v-text-field>
                    <v-text-field
                        label="Ciudad:"
                        v-model="ciudad"
                        :rules="ciudadReglas"
                        required
                    >
                    </v-text-field>
                    <v-text-field
                        label="Dirección:"
                        v-model="direccion"
                        :rules="direccionReglas"
                        required
                    >
                    </v-text-field>
                    <v-card-actions class="justify-center">
                        <v-btn type="submit" color="primary white--text" block large>
                        Registrarme
                        </v-btn>
                    </v-card-actions>
                </form>
            </v-card-text>
        </v-card>
    </v-app>
</template>
<script>
export default {
    name: "Registro",
    data() {
        return {
            nombre: "",
            cedula: "",
            sexo: "",
            celular: 0,
            pais: "",
            ciudad: "",
            direccion: "",
            show: false,
            nombreReglas: [(v) => !!v || "Los nombres son requeridos."],
            cedulaReglas: [(v) => !!v || "La cédula son requeridos."],
            sexoReglas: [(v) => !!v || "El sexo es requerida."],
            celularReglas: [(v) => !!v || "El celular es requerido."],
            paisReglas: [(v) => !!v || "El país es requerido."],
            ciudadReglas: [(v) => !!v || "La ciudad es requerida."],
            direccionReglas: [(v) => !!v || "La dirección es requerida."],
        };
    },
};
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