<template>
<div class="v-main-page">

  <div class="v-main-page__title">
    <h1 class="v-main-page__title-text"><span>{{title}}</span></h1>
  </div>
  <div class="v-main-page__catalog">
  <v-catalo-item/>
  </div>
</div>
</template>

<script>
import vCataloItem from '../catalog/v-catalog-item'
export default {
  components:{
    vCataloItem
  },
  data(){
    return{
      title: 'Прекрасные орхидеи'
    }

  }
}
</script>


<style lang="scss">

</style>