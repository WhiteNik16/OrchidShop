<template>
<div class="v-header">
  <router-link :to="{name:'mainPage'}">
<img class="logo-img" src="../../assets/images/logo.png" alt="logo">
  </router-link>
 <div>
   <router-link :to="{name:'register'}"><button class="v-header-button-reg">Регистрация</button></router-link>
    <router-link :to="{name:'login'}"><button class="v-header-button-reg">Вход</button></router-link>
 </div>
</div>
</template>

<script>
export default {
  name: "v-header"
}
</script>

<style lang="scss">

</style>