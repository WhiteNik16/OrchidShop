<template>
<div class="v-directory">
  <h2 class="v-directory__title">Справочник информации</h2>
 <div class="v-directory-list">

  <router-link :to="{name:'page1'}"> <li class="v-directory-list__element">Что такое орхидея?</li> </router-link>
   <router-link :to="{name:'page2'}"> <li class="v-directory-list__element" >Как создать коллекцию орхидей?</li> </router-link>
   <router-link :to="{name:'page3'}"> <li class="v-directory-list__element" >Горячий душ для орхидей - польза или вред?</li> </router-link>
   <router-link :to="{name:'page4'}"> <li class="v-directory-list__element" >4</li> </router-link>
   <router-link :to="{name:'page5'}"> <li class="v-directory-list__element" > 5</li> </router-link>


  </div>

</div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>