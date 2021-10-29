<template>
  <div>
  <transition name="modal-fade">
  <div class="v-pop-up__back">
    <div class="v-pop-up">
      <header class="v-pop-up__header">
      <slot name="header">


        <button type="button" class="btn_close" @click="close()">x</button>

      </slot>
      </header>


        <section class="v-pop-up__body">
      <slot name="body">
        <div class="v-pop-up__title">{{products.name}}</div>
        <div ><img class="img__pop-up" :src="require('../../../../serverorchidshop/uploads/'+products.image)" alt="img"></div>
        <div class="v-pop-up__text">Описание:{{products.description}}</div>
        <div class="v-pop-up__text">Количестов цветоносов:{{products.quantityFlo}}</div>
        <div class="v-pop-up__text">Цена:{{products.price}} грн</div>
      </slot>
        </section>
      <footer class="v-pop-up__footer">
      <slot name="footer">


          <button
              type="button"
              class="btn-green"
              @click="close">
            Закрыть
          </button>

        </slot>
      </footer>

      </div>

  </div>
</transition>
  </div>
</template>

<script>
export default {
  data(){
    return{}
  },
  props: {
    products: {
      type: Object,
      default(){
        return{}
      }
    }
  },

methods: {

  close() {
    this.$emit('close');
  },
}
}
</script>

<style scoped>

</style>