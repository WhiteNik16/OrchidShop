<template>
<div class="v-main-page">

  <div class="v-main-page__title">
    <h1 class="v-main-page__title-text"><span>{{title}}</span></h1>
  </div>

  <div class="v-main-page__catalog">
<!--    <div> <img class="v-main-page__img" src="../../assets/images/new.png"> </div>-->

  <v-catalog-item class="v-catalog-item__mp"
      v-for="product in Products.slice(Products.length-4)"
      :key="product.article"
      v-bind:product_data="product"/>

  </div>

  <div>

  </div>
</div>
</template>

<script>
import vCatalogItem from '../catalog/v-catalog-item'
import {mapActions, mapGetters} from "vuex";
export default {
  components:{
    vCatalogItem
  },
  data(){
    return{
      title: 'Прекрасные орхидеи',
      items: {},
    }

  },
  methods:{
    ...mapActions([

      'GET_PRODUCTS_FROM_API',
    ]),
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


<style lang="scss">

</style>