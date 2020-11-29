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
            {precio:"$35.000",nombre:"Sudadera",src:"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F48%2F73%2F4873ac8d8732bbcf00acaf80e747f4bcf96f6bd8.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_girl8y_jumperscardigans_hoodiessweatshirts%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"},
            {precio:"$65.000",nombre:"Conjunto de 2 piezas",src:"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fc2%2F09%2Fc20966d9f15beef4664a32348ae86ca2ca863f9a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_girl8y_dressesskirts_skirts%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]"},
            {precio:"$30.000",nombre:"Sudadera corazones",src:"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F38%2Fd8%2F38d86ed575b07187f0bd81056a9bc6a9b6febc10.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_girl8y_jumperscardigans_hoodiessweatshirts%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"},
            {precio:"$42.000",nombre:"Vestido con falda de tul",src:"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F6d%2F26%2F6d264cf782cc61246ca381a835096cf34ce625f6.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_girl8y_dressesskirts_dresses%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"},
        ],
        info_productos2:[
            {precio:"$75.000",nombre:"Vestido sudadera",src:"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F0a%2F86%2F0a86670d0bae84063ef349f983fc09c4019ac853.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_girl8y_dressesskirts_dresses%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"},
            {precio:"$55.000",nombre:"Sudadera motivo-estampado",src:"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F73%2F58%2F7358437998ff824e8625c27a2de62baa9a85beca.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_girl8y_jumperscardigans_hoodiessweatshirts%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"},
            {precio:"$71.000",nombre:"Sudadera con capucha-motivo",src:"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ffc%2Fc1%2Ffcc1872bc712efdbaac753de49180fd7bd098ddf.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_boys14y_jumperscardigans_hoodiessweatshirts%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"},
            {precio:"$48.000",nombre:"Pack de 3 leggings vaqueros",src:"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F32%2Fd6%2F32d6c2ee79bebbbeb22bca899fe902cddbcb6cdb.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_girl8y_jeans%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"},
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