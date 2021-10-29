<template>
<div class="v-header">
  <router-link :to="{name:'mainPage'}">
<img class="logo-img" src="../../assets/images/logo.png" alt="logo">
  </router-link>
  <div class="auth_complete_text" v-if="this.$store.state.userinfo.name">
    <p>Добро пожаловать,{{this.$store.state.userinfo.name}}</p>
  <button class="btn bg-primary" @click="unlogin_user">Выйти</button>
  </div>
 <div class="btn-group  " role="group" aria-label="Basic example" v-if="!this.$store.state.userinfo.name">
   <router-link :to="{name:'register'}"><button type="button" class="btn btn-primary">Регистрация</button></router-link>
    <router-link :to="{name:'login'}"><button class="btn btn-primary">Вход</button></router-link>
 </div>
</div>
</template>

<script>

import {mapActions} from "vuex";

export default {
  name: "v-header",
data(){
    return{}
},
  methods:{
  ...mapActions([
      'UNLOGIN_USER'
  ]),
    unlogin_user(){
    this.UNLOGIN_USER()
      localStorage.jwt=''
      localStorage.admin=false

      window.location.reload()
    }
  }
}
</script>

<style lang="scss">

</style>