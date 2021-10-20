<template>
<div class="v-header">
  <router-link :to="{name:'mainPage'}">
<img class="logo-img" src="../../assets/images/logo.png" alt="logo">
  </router-link>
  <div v-if="this.$store.state.userinfo.name"><p>Добро пожаловать,{{this.$store.state.userinfo.name}}</p></div>
 <div class="btn-group  " role="group" aria-label="Basic example">
   <router-link :to="{name:'register'}"><button type="button" class="btn btn-primary">Регистрация</button></router-link>
    <router-link :to="{name:'login'}"><button class="btn btn-primary">Вход</button></router-link>
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