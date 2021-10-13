<template>
<div class="v-catalog">

  <h2>Каталог</h2>
  <div class="v-catalog-item__item">
  <v-catalog-item
    v-for="product in Products"
    :key="product.article"
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

    }
  },
  methods:{
    ...mapActions([
        'ADD_TO_CART'
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


  }
}
</script>


<style>
.v-catalog{
  flex:1 1 auto;
}
</style>