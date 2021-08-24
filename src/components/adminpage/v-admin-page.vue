<template>
<div class="admin-page">

  <div class="admin-page__name">
    <p>Название:</p>
     <p><input type="text" v-model="name"></p>
  </div>
  <div class="admin-page__quantity">
    <p>Кол-во цветоносов:</p>
    <p><input type="text" v-model="quantityFlo"></p>
  </div>
  <div class="admin-page__description">
    <p>Описание:</p>
    <p><input type="text" v-model="description"></p>
  </div>
  <div class="admin-page__price">
    <p>Цена:</p>
    <p><input type="number" v-model="price"></p>
  </div>

 <div>
   <p>Фото:<input type="file" id="file" ref="file" v-on:change="handleFileUploud()" /></p>

 </div>
  <button class="btn_submit" @click="submitFile()">Добавить</button>
</div>
</template>

<script>
export default {
  data(){
    return{

      price:'',
      name:'',
      file:'',
      quantityFlo:'',
      description:'',

    }
  },
 methods:{
   handleFileUploud(){
    this.file=this.$refs.file.files[0];
    console.log(this.file)
   },
   submitFile(){

   },
 }


}
</script>

<style lang="scss">

</style>