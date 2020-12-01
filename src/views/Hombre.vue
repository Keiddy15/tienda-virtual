<template>
    <v-app>
        <APP_BAR></APP_BAR> 
        <v-row>
            <v-col cols="6" md="3" v-for="p in p1" :key="p.src" v-if="p.id >= 111 && p.id < 211">
                    <v-card>
                        <v-hover>
                        <template v-slot:default="{ hover }">
                            <v-img
                                :src="p.src"
                                height="400">
                                <v-fade-transition>
                                    <v-overlay
                                    v-if="hover"
                                    absolute
                                    color="#036358"
                                    >
                                    <v-btn outlined @click="productos_(p)" >Agregar al carrito <v-icon right>mdi-shopping</v-icon> </v-btn>
                                    </v-overlay>
                                </v-fade-transition>
                            </v-img>
                        </template>
                        </v-hover>
                        <v-card-title class="font-weight-light">
                            {{p.nombre}}
                        </v-card-title>
                        <v-card-subtitle class="font-weight-light">
                            {{p.precio}}
                        </v-card-subtitle>
                    </v-card>
            </v-col>
        </v-row>
        <FOOTER/>
    </v-app>
</template>

<script>
import APP_BAR from "@/components/app_bar.vue";
import FOOTER from "@/components/footer.vue";
export default {
    name: 'Hombre',
    data: () => ({

        overlay: false,
        productos:JSON.parse(localStorage.getItem('carrito')),
    }),
    components: {
        APP_BAR,FOOTER
    },
    methods: {
        productos_(p){
            this.$store.dispatch('APM', p)
            
        }
    },
  computed:{
    p1(){
      return this.$store.state.productos
    },
  }

}
</script>

<style scoped>

</style>