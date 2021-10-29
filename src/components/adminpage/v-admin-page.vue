<template>
<div class="admin-page">
<div class="admin-page__add_item">
  <h2>Добавить товар</h2>
  <form id="uploadForm" name="uploadForm" enctype="multipart/form-data">
  <div class="admin-page__name">
    <p>Название:</p>
     <p><input type="text" v-model="product.name"></p>
  </div>
  <div class="admin-page__quantity">
    <p>Кол-во цветоносов:</p>
    <p><input type="text" v-model="product.quantityFlo"></p>
  </div>

  <div class="admin-page__price">
    <p>Цена:</p>
    <p><input type="number" v-model="product.price"></p>
  </div>
  <div class="admin-page__price">
    <p>Артикль:</p>
    <p><input type="number" v-model="product.article"></p>
  </div>
    <div class="admin-page__description">
      <p>Описание:</p>
      <p><input type="textarea" v-model="product.description"></p>
    </div>
    <div class="admin-page__image">
      <p>Фото:</p>
    <input type="file" name="file" ref="files" v-on:change="handleUploadFile()" multiple>
      <button class="btn_submit " type="button" @click="submitForm()">Добавить</button>
    </div>
  </form>
</div>


  <div class="admin-page__remove_item">
    <h2>Удалить товар</h2>
    <p>Введите артикль:</p>
  <div><input type="number" v-model="articledelete"></div>
    <div ><button class="btn_delete" @click="delete_item(articledelete)">Удалить</button></div>
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
      articledelete:'',
       product: {
        name: '',
        price: '',

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
   delete_item(){ let formdelete =  new FormData()
   formdelete.append('article', this.articledelete)
      axios.post('http://localhost:3000/api/delete', formdelete)
      .then(response =>{
        if(response.status == 200){
          swal.fire({

            position: 'top',
            icon: 'success',
            title: 'Файл успешно  удален',
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
   },
   handleUploadFile(){
     this.file = this.$refs.files.files[0];
   },
   submitForm(){
      let formdata = new FormData()
       formdata.append('name',this.product.name)
       formdata.append('price',this.product.price)
       formdata.append('article',this.product.article)
       formdata.append('quantityFlo',this.product.quantityFlo)
       formdata.append('description',this.product.description)

       formdata.append('file', this.file)

     axios.post('http://localhost:3000/api/addorchid',formdata)
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


 },



}
</script>

<style lang="scss">

</style>