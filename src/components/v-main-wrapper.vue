<template>
<div class="v-main-wrapper">
  <v-header/>
  <v-nav-bar/>
  <transition name="fade" mode="out-in">
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
  </transition>
  <v-footer/>

</div>
</template>

<script>
import vNavBar from '../components/navbar/v-nav-bar'
import vHeader from '../components/layouts/v-header'
import vFooter from '../components/layouts/v-footer'
export default {
components:{
  vNavBar,
  vHeader,
  vFooter
}
}
</script>

<style lang="scss">
.v-main-wrapper{
  min-height: 721px;
  display: flex;
  flex-direction: column;
}
.fade-enter-active, .fade-leave-active{
  transition-duration: .2s;
  transition-timing-function: ease-out;
  transform: translateX(0%);
}
.fade-enter, {
  transition-duration:.1s ;
  transition-timing-function: ease-out;
  transform: translateX(-100%);
}
.fade-leave-to{
  transition-duration:.2s ;
  transition-timing-function: ease-in;
  transform: translateX(100%);
}
</style>