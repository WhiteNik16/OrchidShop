<template>
<div class="v-catalog">


  <h2>Каталог</h2>
  <div class="v-catalog-item__item">
  <v-catalog-item
    v-for="product in Products"
    :key="product._id"
    v-bind:product_data="product"
    @addToCart="addToCart"
  />
  </div>

</div>
</template>

<script>
import vCatalogItem from './v-catalog-item'

import {mapGetters, mapActions} from 'vuex'

export default {
  components:{


    vCatalogItem,

  },
  data(){
    return{
      ispopupvisiable:false

    }
  },
  methods:{
    ...mapActions([
        'ADD_TO_CART',
        'GET_PRODUCTS_FROM_API',
    ]),

    addToCart(data) {
      this.ADD_TO_CART(data)
    }

  },
  computed:{
    ...mapGetters([
      'Products'
    ]),
  },

  mounted() {
    this.GET_PRODUCTS_FROM_API()


  }
}
</script>


<style>
.v-catalog{
  flex:1 1 auto;
}
</style>