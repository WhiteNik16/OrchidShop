<template>
<div class="v-catalog-item">

  <v-pop-up v-if="ispopupvisiable" @close="ispopuotrue" v-bind:products="product_data"/>
    <img :src="require('../../../../serverorchidshop/uploads/'+product_data.image)" alt="img">
    <div class="v-catalog-item__name">{{product_data.name}}</div>
    <div class="v-catalog-item__price">Цена:{{product_data.price}}₴</div>
    <div><button class="btn bg-info"  @click="ispopuotrue()">Инфо</button>
    <button class="btn v-catalog-item__btn_add" @click="addToCart(product_data.index)">Купить</button></div>

</div>
</template>

<script>
import VPopUp from "@/components/v-pop-up/v-pop-up";
export default {

  components: {VPopUp},

  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      }
    },
  },
  data(){
    return{
    ispopupvisiable: false,


    }
},
  methods:{
    addToCart(){
      this.$emit('addToCart', this.product_data)

},
    ispopuotrue(){
      this.ispopupvisiable=!this.ispopupvisiable;
    },
  }


}
</script>

<style >

</style>