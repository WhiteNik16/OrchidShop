<template>
<div class="v-directory">
  <h2 class="v-directory__title">Справочник информации</h2>
 <div class="v-directory-list">

  <router-link :to="{name:'page1'}"> <p class="v-directory-list">Что такое орхидея?</p> </router-link>
   <router-link :to="{name:'page2'}"> <p class="v-directory-list" >Как создать коллекцию орхидей?</p> </router-link>
   <router-link :to="{name:'page3'}"> <p class="v-directory-list" >3</p> </router-link>
   <router-link :to="{name:'page4'}"> <p class="v-directory-list" >4</p> </router-link>
   <router-link :to="{name:'page5'}"> <p class="v-directory-list" > 5</p> </router-link>


  </div>

</div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>