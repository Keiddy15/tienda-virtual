import Vue from 'vue'
import Vuex from 'vuex'
import  {getField, updateField} from "vuex-map-fields";

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    productos: [
      {
        id: 111,
        precio: 45000,
        nombre: "Camiseta de punto Slim Fit",
        src: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F20%2Fff%2F20ff9bb9e688b5150afeb2e6d1cd519ff88e71d3.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_longsleeve%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
      },
      {
        id: 121,
        precio: 45000,
        nombre: "Camiseta de punto Slim Fit",
        src: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F54%2Fb0%2F54b008a411c170f51adc0904b9b3834ca304bd29.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_longsleeve%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
      },
      {
        id: 131,
        precio: 30000,
        nombre: "Camiseta Regular Fit",
        src: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F8a%2F57%2F8a57975f2484e3b09efc66b786856c798b5b4da9.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
      },
      {
        id: 141,
        precio: 70000,
        nombre: "Sudadera con motivo",
        src: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F11%2F35%2F1135726abf2451a2e08285ec1d3b261c4393a4b7.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts_sweatshirts%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
      },
      {
        id: 151,
        precio: 55000,
        nombre: "Sudadera Relaxed Fit",
        src: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fdd%2F8a%2Fdd8a150b480cc7a3f8bbe337196eb8306fb63884.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts_sweatshirts%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
      },
      {
        id: 161,
        precio: 85000,
        nombre: "Chaqueta camisera de sarga",
        src: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fc7%2F0b%2Fc70b6c42feec88d508246c1ae634ea15ec844d75.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_jacketscoats_jackets%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
      },
      {
        id: 171,
        precio: 30000,
        nombre: "Camisa de pana Regular Fit",
        src: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fd1%2F0e%2Fd10e5aefb60f20733309ad818c9d614e61fa25bf.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shirts_longsleeved%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
      },
      {
        id: 181,
        precio: 50000,
        nombre: "Camisa de pana Regular Fit",
        src: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F3b%2F49%2F3b492fdb4402d35ae3fc524428fec5547083049b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shirts_longsleeved%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
      },
      {
        id: 211,
        precio: 49000,
        nombre: "Jersey de canalé con lana",
        src: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fc2%2F8f%2Fc28f0017883bfc369cde3a8fe78fc4c0558b683c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_cardigansjumpers_jumpers%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
      },
      {
        id: 221,
        precio: 57000,
        nombre: "Camisa de popelina escote V",
        src: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F2d%2Fc8%2F2dc8d5c24479dfafed4f2a79909245d77f7d8f55.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_shirtsblouses_shirts%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
      },
      {
        id: 231,
        precio: 41000,
        nombre: "Blusa con escote de pico",
        src: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F79%2Fd1%2F79d13de4fedbe69fcea1657bfe6b195efacf5cbb.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_shirtsblouses_blouses%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
      },
      {
        id: 241,
        precio: 20000,
        nombre: "Top de canalé con cuello alto",
        src: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fed%2Ff7%2Fedf703301077544b8f35d27f7e74b6c615c53551.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_basics_tops_longsleeve%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
      },
      {
        id: 251,
        precio: 75000,
        nombre: "Sudadera con capucha-motivo",
        src: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F18%2F06%2F180643784d47a36d3e98a4b67ca1830170c6e319.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_basics_tops_longsleeve%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
      },
      {
        id: 261,
        precio: 35000,
        nombre: "Leggings",
        src: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fda%2F12%2Fda122b19e2945bc6a0bf42d290a658d702f2fe1d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_trousers_leggings%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
      },
      {
        id: 271,
        precio: 40000,
        nombre: "Jersey de cuello alto en punto",
        src: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F33%2F42%2F3342db5cb64c8ef33dfb1d1a6dcaa49e62c56828.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_knitwear_turtlenecks%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
      },
      {
        id: 281,
        precio: 40000,
        nombre: "Sudadera con capucha",
        src: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb5%2Fa9%2Fb5a9d19b3b5eaff2f9727e27f18680dd6d86aa68.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_hoodiesswetshirts_hoodies%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
      },
      {
        id: 311,
        precio: 35000,
        nombre: "Camisa de franela",
        src: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F0a%2Fcc%2F0acc501cc490290048bc43b810d9d4a021b511b8.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_boy8y_shirts%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
      },
      {
        id: 321,
        precio: 25000,
        nombre: "Camisa con corbata/pajarita",
        src: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F25%2Fc4%2F25c4d6c6da7a4eda0897e526407febc72f6434b2.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_boy8y_shirts%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
      },
      {
        id: 331,
        precio: 47000,
        nombre: "Sudadera con lentejuelas",
        src: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F16%2F5b%2F165bcaf3d5d5077a3a903c7946214cf9655e21cf.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_boy8y_jumperscardigans_Hoodiessweatshirt%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
      },
      {
        id: 341,
        precio: 72000,
        nombre: "Chaqueta acolchada",
        src: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F32%2F7c%2F327c6decdc37a896eea6ea057bd19a30fc7f69c6.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_boy8y_outdoor%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
      },
      {
        id: 351,
        precio: 58000,
        nombre: "Jersey con aplicaciones",
        src: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fc7%2Fcc%2Fc7cc11b9dfab4973e667db4b38a9d87868d27d4d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_boy8y_jumperscardigans_knitwear%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
      },
      {
        id: 361,
        precio: 45000,
        nombre: "Jersey con cuello chimenea",
        src: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F9d%2Fd5%2F9dd5184a306487a420de7750c264fc7c2e215781.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_boy8y_jumperscardigans_knitwear%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
      },
      {
        id: 371,
        precio: 83000,
        nombre: "Conjunto de 3 piezas",
        src: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fc7%2Fa1%2Fc7a16b4e575449823d97fc9a03d2244c951d2cd5.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5BKids_boy8y_multipack_sets%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
      },
      {
        id: 381,
        precio: 48000,
        nombre: "Pantalón de pana Slim Fit",
        src: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F11%2F72%2F1172706bf4525b8e75ebd64135d1b81bccfe8520.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_boy8y_trousers_slim%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
      },
      {
        id: 411,
        precio: 35000,
        nombre: "Sudadera",
        src: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F48%2F73%2F4873ac8d8732bbcf00acaf80e747f4bcf96f6bd8.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_girl8y_jumperscardigans_hoodiessweatshirts%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
      },
      {
        id: 421,
        precio: 65000,
        nombre: "Conjunto de 2 piezas",
        src: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fc2%2F09%2Fc20966d9f15beef4664a32348ae86ca2ca863f9a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_girl8y_dressesskirts_skirts%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]"
      },
      {
        id: 431,
        precio: 30000,
        nombre: "Sudadera corazones",
        src: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F38%2Fd8%2F38d86ed575b07187f0bd81056a9bc6a9b6febc10.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_girl8y_jumperscardigans_hoodiessweatshirts%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
      },
      {
        id: 441,
        precio: 42000,
        nombre: "Vestido con falda de tul",
        src: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F6d%2F26%2F6d264cf782cc61246ca381a835096cf34ce625f6.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_girl8y_dressesskirts_dresses%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
      },
      {
        id: 451,
        precio: 75000,
        nombre: "Vestido sudadera",
        src: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F0a%2F86%2F0a86670d0bae84063ef349f983fc09c4019ac853.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_girl8y_dressesskirts_dresses%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
      },
      {
        id: 461,
        precio: 55000,
        nombre: "Sudadera motivo-estampado",
        src: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F73%2F58%2F7358437998ff824e8625c27a2de62baa9a85beca.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_girl8y_jumperscardigans_hoodiessweatshirts%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
      },
      {
        id: 471,
        precio: 71000,
        nombre: "Sudadera con capucha-motivo",
        src: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ffc%2Fc1%2Ffcc1872bc712efdbaac753de49180fd7bd098ddf.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_boys14y_jumperscardigans_hoodiessweatshirts%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
      },
      {
        id: 481,
        precio: 48000,
        nombre: "Pack de 3 leggings vaqueros",
        src: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F32%2Fd6%2F32d6c2ee79bebbbeb22bca899fe902cddbcb6cdb.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_girl8y_jeans%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
      },

    ],


    cart: []
  },
  mutations: {
    IPCM(state, item) {
      item.cantidad++
    },
    APC(state, productos) {
      state.cart.push({
        id: productos.id,
        cantidad: 1
      })
    },
    removeProduct(state, index){
      state.cart.splice(index, 1)
    },
    updateField,

  },

  actions: {
    APM(context, productos) {
      const item = context.state.cart.find(item => item.id === productos.id)
      if (item) {
        context.commit('IPCM', item)
      } else {
        context.commit('APC', productos)
      }
    },
    removeProduct(context, index){
      const item = context.state.cart[index]
      context.commit('removeProduct', item)
    }


  },
  getters: {
    getField,
    PCM(state){
      return state.cart.map(item => {
        const product = state.productos.find(product => product.id === item.id)
        return {
          id: product.id,
          nombre: product.nombre,
          precio: product.precio,
          src: product.src,
          cantidad: item.cantidad,
          cart:state.cart
        }
      })
    },
    cartTotal(state, getters){
        return getters.PCM.reduce((total, current) => total + current.precio * current.cantidad, 0)
    },
    idProd(state, getters){
      return getters.PCM.reduce((id, current)=>current.id, 0)
    },
    cantProd(state, getters){
      return getters.PCM.reduce((cantidad, current)=>current.cantidad, 0)
    },
    carrito(state, getters){
      return getters.PCM.reduce((cart, current)=>current.cart, 0)
    }
  }
})