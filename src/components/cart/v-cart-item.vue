<template>
  <div class="cart-item">


      <img class="cart-item__image" :src="require('../../../../serverorchidshop/uploads/'+cart_item_data.image)" alt="img">

<div class="cart-item__name">
  <p>{{cart_item_data.name}}</p>
</div>
  <div class="cart-item__price">
    <p>Цена:{{cart_item_data.price}}₴</p>
  </div>
    <div><button class="btn_cart_delete" @click="deleteItem">Удалить</button> </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data(){
    return{

    }
  },
  props:{
    cart_item_data:{
      type:Object,
      default() {
        return {};
      }
    }
  },
  methods:{
    deleteItem(){
      this.$emit('deleteItem')
    }
  },
  computed:{
    ...mapGetters([
        'CART'
    ])
  }
}

</script>

<style scoped>

</style>