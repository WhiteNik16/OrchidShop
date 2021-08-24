<template>
  <div class="v-nav-bar">
    <router-link :to="{name:'mainPage'}">
      <div class="link_to_catalog btn_link">Главная</div>
    </router-link>
    <router-link :to="{name:'catalog'}">
     <div class="link_to_catalog btn_link">Каталог</div>
    </router-link>
    <div class="link_to_cart btn_link">Корзина</div>
   <router-link to="/v-directory"> <div class="link_to_cart_directory btn_link">Справочник</div></router-link>
    <router-link :to="{name:'adminPage'}"><div class="link_to_cart_admin btn_link">admin</div> </router-link>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss">

</style>