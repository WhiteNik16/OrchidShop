<template>
<div class="v-catalog-item">
    <div class="v-catalog-item__name">{{product_data.name}}</div>
    <img :src="require('../../assets/images/catalogimages/'+product_data.image)" alt="img">
    <div class="v-catalog-item__price">Цена:{{product_data.price}}₴</div>
    <div><button class="v-catalog-item__btn_add" @click="addToCart(product_data.index)">Купить</button></div>

</div>
</template>

<script>
export default {
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      }
    },
  },
  methods:{
    addToCart(){
      this.$emit('addToCart', this.product_data)

}
  }


}
</script>

<style >

</style>