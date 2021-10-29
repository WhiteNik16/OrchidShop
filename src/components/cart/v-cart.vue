<template>
<div class="v-cart">
  <div>
    <p class="v-cart__noitems" v-if="!CART.length">Нет товаров(((</p>
  <v-cart-item class="v-cart-item"

      v-for="(item,index) in CART"
      :key="item.article"
      :cart_item_data="item"
      @deleteItem="deleteItem(index)"
/>

</div>
<div class="v-cart__total">
  <router-link to="/order"><button> order</button></router-link>
  <p>Сумма:{{cartTotalCost}}₴</p>
</div>
</div>
</template>

<script>
import vCartItem from './v-cart-item'
import {mapGetters, mapActions} from 'vuex'
export default {
  components: {
    vCartItem
  },
  data() {
    return {}

  },
  methods: {
    ...mapActions([
        'DELETE_ITEM'
    ]),
    deleteItem(index){
    this.DELETE_ITEM(index)
    }
  },
  computed: {
    ...mapGetters([
      'CART'
    ]),
    cartTotalCost() {
      let result = []
      if (this.CART.length) {
        for (let item of this.CART) {
          result.push(item.price*1)
        }
        result = result.reduce(function (sum, el) {
          return sum + el;
        })
        return result;
      } else {
        return 0;
      }
    }
  }
}

</script>


<style scoped>

</style>