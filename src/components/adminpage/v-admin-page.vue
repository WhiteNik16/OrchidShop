<template>
<div class="admin-page">
<div class="admin-page__add_item">
  <h2>Добавить товар</h2>
  <div class="admin-page__name">
    <p>Название:</p>
     <p><input type="text" v-model="newproduct.name"></p>
  </div>
  <div class="admin-page__quantity">
    <p>Кол-во цветоносов:</p>
    <p><input type="text" v-model="newproduct.quantityFlo"></p>
  </div>
  <div class="admin-page__description">
    <p>Описание:</p>
    <p><input type="text" v-model="newproduct.description"></p>
  </div>
  <div class="admin-page__price">
    <p>Цена:</p>
    <p><input type="number" v-model="newproduct.price"></p>
  </div>
  <div class="admin-page__price">
    <p>Артикль:</p>
    <p><input type="number" v-model="newproduct.article"></p>
  </div>
    <div class="admin-page__image">
      <p>Фото:</p>
    <p><input type="text" v-model="newproduct.image" ></p>
      <button class="btn_submit " @click="submitForm(newproduct)">Добавить</button>
    </div>
</div>
  <div class="admin-page__remove_item">
    <h2>Удалить товар</h2>
    <p>Введите артикль:</p>
  <div><input type="text" v-model="newproduct.article"></div>
    <div ><button class="btn_delete" @click="deleteItemFromCatalog(newproduct)">Удалить</button></div>
  </div>
</div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'

export default {
  data(){
    return {
       newproduct: {
        name: '',
        price: '',
        image: '',
        article:'',
        quantityFlo: '',
        description: '',

      },
      deleteArticle:''
    }
  },

  computed:{
    ...mapGetters([
      'Products'
    ])
  },

 methods:{
    ...mapActions([
        'SUBMIT_FORM',
        'DELETE_ITEM_FROM_CATALOG'
    ]),
   submitForm(newproduct){

     return this.SUBMIT_FORM(newproduct)


    // return this.SUBMIT_FORM(product).then(() => {
    //   this.product.name = ''
    //   this.product.price = ''
    //   this.product.image = ''
    //   this.product.article = ''
    //   this.product.description = ''
    //   this.product.quantityFlo = ''
    // })
   },
   deleteItemFromCatalog(newproduct){
    this.DELETE_ITEM_FROM_CATALOG(newproduct)

   }


 },



}
</script>

<style lang="scss">

</style>