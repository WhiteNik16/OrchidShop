<template>
  <div id="app">
<v-main-wrapper/>
  </div>
</template>

<script>

import vMainWrapper from './components/v-main-wrapper'
import {mapActions} from "vuex";

export default {

  name: 'App',
  components: {
    vMainWrapper


  },
  methods:{
    ...mapActions([
      'GET_USER_INFO'
  ])},
  mounted() {
    if(localStorage.jwt){
    this.GET_USER_INFO(localStorage.jwt)
  }
  }

}
</script>
<style src="../src/assets/styles/app.scss" lang="scss">


</style>
