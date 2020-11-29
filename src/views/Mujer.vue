<template>
    <v-app>
        <APP_BAR :productos=productos></APP_BAR> 
        <v-row>
            <v-col cols="6" md="3" v-for="productos in info_productos1" :key="productos">
                    <v-card >
                        <v-hover>
                        <template v-slot:default="{ hover }">
                            <v-img :src="productos.src"
                                height="400">
                                <v-fade-transition>
                                    <v-overlay
                                    v-if="hover"
                                    absolute
                                    color="#036358"
                                    >
                                    <v-radio-group
                                        v-model="row"
                                        row
                                    >
                                        <v-radio
                                        label="L"
                                        value="L"
                                        ></v-radio>
                                        <v-radio
                                        label="M"
                                        value="M"
                                        ></v-radio>
                                        <v-radio
                                        label="S"
                                        value="S"
                                        ></v-radio>
                                    </v-radio-group>
                                    <v-btn outlined @click="productos_" >Agregar al carrito <v-icon right>mdi-shopping</v-icon> </v-btn>
                                    </v-overlay>
                                </v-fade-transition>
                            </v-img>
                        </template>
                        </v-hover>
                        <v-card-title class="font-weight-light">
                            {{productos.nombre}}
                        </v-card-title>
                        <v-chip
                            class="ma-2"
                            color="grey darken-3"
                            dark
                        >
                            L
                        </v-chip>
                        <v-chip
                            class="ma-2"
                            color="grey darken-3"
                            dark
                        >
                            M
                        </v-chip>
                        <v-chip
                            class="ma-2"
                            color="grey darken-3"
                            dark
                        >
                            S
                        </v-chip>
                        <v-card-subtitle class="font-weight-light">
                            {{productos.precio}}
                        </v-card-subtitle>
                    </v-card>
            </v-col>
            
        </v-row>
        <v-row>
            <v-col cols="6" md="3" v-for="productos in info_productos2" :key="productos">
                    <v-card >
                        <v-hover>
                        <template v-slot:default="{ hover }">
                            <v-img :src="productos.src"
                                height="400">
                                <v-fade-transition>
                                    <v-overlay
                                    v-if="hover"
                                    absolute
                                    color="#036358"
                                    >
                                    <v-radio-group
                                        v-model="row"
                                        row
                                    >
                                        <v-radio
                                        label="L"
                                        value="L"
                                        ></v-radio>
                                        <v-radio
                                        label="M"
                                        value="M"
                                        ></v-radio>
                                        <v-radio
                                        label="S"
                                        value="S"
                                        ></v-radio>
                                    </v-radio-group>
                                    <v-btn outlined @click="productos_" >Agregar al carrito <v-icon right>mdi-shopping</v-icon> </v-btn>
                                    </v-overlay>
                                </v-fade-transition>
                            </v-img>
                        </template>
                        </v-hover>
                        <v-card-title class="font-weight-light">
                            {{productos.nombre}}
                        </v-card-title>
                        <v-chip
                            class="ma-2"
                            color="grey darken-3"
                            dark
                        >
                            L
                        </v-chip>
                        <v-chip
                            class="ma-2"
                            color="grey darken-3"
                            dark
                        >
                            M
                        </v-chip>
                        <v-chip
                            class="ma-2"
                            color="grey darken-3"
                            dark
                        >
                            S
                        </v-chip>
                        <v-card-subtitle class="font-weight-light">
                            {{productos.precio}}
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
        info_productos1:[
            {precio:"$49.000",nombre:"Jersey de canalé con lana",src:"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fc2%2F8f%2Fc28f0017883bfc369cde3a8fe78fc4c0558b683c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_cardigansjumpers_jumpers%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"},
            {precio:"$57.000",nombre:"Camisa de popelina escote V",src:"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F2d%2Fc8%2F2dc8d5c24479dfafed4f2a79909245d77f7d8f55.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_shirtsblouses_shirts%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"},
            {precio:"$41.000",nombre:"Blusa con escote de pico",src:"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F79%2Fd1%2F79d13de4fedbe69fcea1657bfe6b195efacf5cbb.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_shirtsblouses_blouses%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"},
            {precio:"$20.000",nombre:"Top de canalé con cuello alto",src:"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fed%2Ff7%2Fedf703301077544b8f35d27f7e74b6c615c53551.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_basics_tops_longsleeve%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"},
        ],
        info_productos2:[
            {precio:"$75.000",nombre:"Sudadera con capucha-motivo",src:"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F18%2F06%2F180643784d47a36d3e98a4b67ca1830170c6e319.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_basics_tops_longsleeve%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"},
            {precio:"$35.000",nombre:"Leggings",src:"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fda%2F12%2Fda122b19e2945bc6a0bf42d290a658d702f2fe1d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_trousers_leggings%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"},
            {precio:"$40.000",nombre:"Jersey de cuello alto en punto",src:"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F33%2F42%2F3342db5cb64c8ef33dfb1d1a6dcaa49e62c56828.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_knitwear_turtlenecks%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"},
            {precio:"$40.000",nombre:"Sudadera con capucha",src:"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb5%2Fa9%2Fb5a9d19b3b5eaff2f9727e27f18680dd6d86aa68.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_hoodiesswetshirts_hoodies%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"},
        ],
        productos:JSON.parse(localStorage.getItem('carrito')),
    }),
    components: {
    APP_BAR,FOOTER
    },
        methods: {
        productos_(){
            this.productos++;
            localStorage.setItem('carrito',JSON.stringify(this.productos))
        }
    },
}
</script>

<style scoped>

</style>