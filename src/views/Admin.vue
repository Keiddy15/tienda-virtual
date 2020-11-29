<template>
  <v-app>
    
    <v-toolbar color="blue darken-3" height="60" dense>
        <v-app-bar-nav-icon>
                <v-img @click="inicio" src="@/assets/img/icono.png" width="70" height="70"></v-img>
        </v-app-bar-nav-icon>
    </v-toolbar>
    <v-row>
        <v-col md="4"  class="ml-1">
            <v-btn text block @click="todas_categorias">           
                <v-icon>mdi-format-list-bulleted-square</v-icon>            
                Todas las categorias                
            </v-btn>
            <v-btn text block @click="todas_categorias">           
                <v-icon>mdi-account</v-icon>            
                Lista de clientes               
            </v-btn>        
            <v-btn text block @click="todas_categorias">           
                <v-icon>mdi-widgets</v-icon>            
                Lista de productos              
            </v-btn> 
            <v-btn text block @click="todas_categorias">           
                <v-icon>mdi-checkbox-marked-circle</v-icon>            
                Listado de ventas              
            </v-btn> 
        </v-col>
        <v-col md="7" class="ml-5">
            <v-card v-for="fila in body_t" :key="fila">
                <v-row >
                    <v-col>
                        {{fila[0]}}
                        {{fila[1]}}
                    </v-col>
                </v-row>
            </v-card>
        </v-col>
    </v-row>
    
    <FOOTER/>
  </v-app>
</template>

<script>

import axios from 'axios'
import APP_BAR from "@/components/app_bar.vue";
import FOOTER from "@/components/footer.vue";
export default {
    name: 'Inicio',
    data () {
        return {
            headers: [
                
            ],
            body_t:[
                
            ],
            titulo:'',
            categorias:[],
            productos:[],
            clientes:[],
            ventas:[],
        }
    },
    components: {
        APP_BAR,FOOTER
    },
    methods: {
        todas_categorias(){
            
            const path = 'http://localhost:5000//Admin/categorias'
            axios.get(path).then((respuesta) => {
                this.categorias = respuesta.data
                this.titulo='Categorias'
                for (let i = 0; i < this.categorias.length; i++) {
                        this.body_t.push(this.categorias[i])
                        console.log(this.body_t)
                }
                
            })
            .catch((error) => {
                console.log(error)
            })
        }
    }
    
}


</script>