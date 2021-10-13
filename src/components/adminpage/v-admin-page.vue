<template>
<div class="admin-page">
<div class="admin-page__add_item">
  <h2>Добавить товар</h2>
  <form id="uploadForm" name="uploadForm" enctype="multipart/form-data">
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
    <p><input type="file" name="file" ref="files" v-on:change="handleUploadFile()" multiple></p>
      <button class="btn_submit " type="button" @click="submitForm()">Добавить</button>
    </div>
  </form>
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
import axios from 'axios'
import swal from 'sweetalert2'

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
      file:{},
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
   handleUploadFile(){
     this.file = this.$refs.files.files[0];
   },
   submitForm(){
     let formData = new FormData();
     formData.append('file', this.file);
     formData.append('name', this.newproduct.name)
     formData.append('price', this.newproduct.price)
     formData.append('article', this.newproduct.article)


     console.log(formData)

     axios.post('http://localhost:3000/upload',formData)
         .then(response => {
           if(response.data == "Файл загружен"){
           swal.fire({

             position: 'top',
             icon: 'success',
             title: 'Файл успешно добавлен',
             showConfirmButton: 'false',
             timer: 1500,
           })
           }
           else {
             swal.fire({

               position: 'top',
               icon: 'error',
               title: 'error',
               showConfirmButton: 'false',
               timer: 1500,
           })
           }
         })

         .catch(error => {
           console.log(error.response)
         })
   },



   deleteItemFromCatalog(newproduct){
    this.DELETE_ITEM_FROM_CATALOG(newproduct)

   }


 },



}
</script>

<style lang="scss">

</style>