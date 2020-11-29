<template>
    <v-app>
        <APP_BAR :productos=productos></APP_BAR> 
        <v-row>
            <v-col cols="6" md="3" v-for="productos in info_productos1" :key="productos">
                    <v-card >
                        <v-hover>
                        <template v-slot:default="{ hover }">
                            <v-img :src="productos.src"
                                height="400" >
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
            {precio:"$25.000",nombre:"Camisa con corbata/pajarita",src:"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F25%2Fc4%2F25c4d6c6da7a4eda0897e526407febc72f6434b2.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_boy8y_shirts%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"},
            {precio:"$35.000",nombre:"Camisa de franela",src:"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F0a%2Fcc%2F0acc501cc490290048bc43b810d9d4a021b511b8.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_boy8y_shirts%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"},
            {precio:"$47.000",nombre:"Sudadera con lentejuelas",src:"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F16%2F5b%2F165bcaf3d5d5077a3a903c7946214cf9655e21cf.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_boy8y_jumperscardigans_Hoodiessweatshirt%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"},
            {precio:"$72.000",nombre:"Chaqueta acolchada",src:"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F32%2F7c%2F327c6decdc37a896eea6ea057bd19a30fc7f69c6.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_boy8y_outdoor%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"},
        ],
        info_productos2:[
            {precio:"$58.000",nombre:"Jersey con aplicaciones",src:"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fc7%2Fcc%2Fc7cc11b9dfab4973e667db4b38a9d87868d27d4d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_boy8y_jumperscardigans_knitwear%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"},
            {precio:"$45.000",nombre:"Jersey con cuello chimenea",src:"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F9d%2Fd5%2F9dd5184a306487a420de7750c264fc7c2e215781.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_boy8y_jumperscardigans_knitwear%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"},
            {precio:"$83.000",nombre:"Conjunto de 3 piezas",src:"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fc7%2Fa1%2Fc7a16b4e575449823d97fc9a03d2244c951d2cd5.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5BKids_boy8y_multipack_sets%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"},
            {precio:"$48.000",nombre:"Pantalón de pana Slim Fit",src:"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F11%2F72%2F1172706bf4525b8e75ebd64135d1b81bccfe8520.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_boy8y_trousers_slim%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"},
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