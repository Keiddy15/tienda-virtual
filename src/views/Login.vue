<template>
    <v-app class="main">
        <v-card class="cardForm2" elevation="10">
            <v-card-title>Ingreso</v-card-title>
            <v-card-text>Para ingresar, digite su cédula</v-card-text>
            <v-card-text>
                <v-alert type="error" v-model="alertVerified" dismissible>No ha activado su cuenta, por favor, revise su
                    correo electronico.
                </v-alert>
                <v-alert type="error" v-model="alertNoData" dismissible>Por favor, rellene los campos
                    correspondientes.
                </v-alert>
                <v-alert type="error" v-model="alertUserPasswordIncorrect" dismissible>Contraseña incorrecta, por favor,
                    revise de nuevo.
                </v-alert>
                <v-alert type="warning" v-model="alertNotUser" dismissible>El usuario ingresado, no se encuentra en
                    nuestros registros.
                </v-alert>
                <v-form class="px-3" @submit.prevent="login">
                    <v-text-field
                            label="Cédula:"
                            v-model="cedula"
                            required
                            :rules="cedulaReglas">
                    </v-text-field>
                    <v-card-actions class="justify-center">
                        <v-btn type="submit" color="primary white--text" block :loading="loadingButton" large>
                            Ingresar
                        </v-btn>

                    </v-card-actions>
                    <v-card-actions class="justify-center">
                        <v-btn @click="registrar" color="primary white--text" block :loading="loadingButton" large>
                            ¿No te has registrado?
                        </v-btn>
                    </v-card-actions>

                </v-form>
            </v-card-text>
        </v-card>
    </v-app>
</template>
<script>
export default {
        name: "Login",
        data() {
            return {
                alertVerified: false,
                alertNoData: false,
                alertUserPasswordIncorrect: false,
                alertNotUser: false,
                cedula: '',
                show: false,
                loadingButton: false,
                cedulaReglas: [
                    v => !!v || 'La cedula es requerida.'
                ],
            }
        },
        methods: {
            registrar() {
                this.$router.push({name: 'Registro'});
            }
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