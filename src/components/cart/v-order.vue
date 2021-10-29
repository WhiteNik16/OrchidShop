<template>
  <div class="v-order__back">
<div class="v-order">
  <div>
    <v-cart-item class="v-order-item"
                 v-for="(item,index ) in CART"
                 :key="item.article"
                 :cart_item_data="item"
                 @deleteItem="deleteItem(index)"
    />
  </div>
  <form class="row g-3" name="OrderForm">
    <div class="col-md-6">
      <label for="text" class="form-label">Имя</label>
      <input type="text" class="form-control" placeholder="Иван" required v-model="name" >
    </div>
    <div class="col-md-6">
      <label for="text" class="form-label">Фамилия</label>
      <input type="text" class="form-control" placeholder="Иванов"  required v-model="surname">
    </div>
    <div class="col-12">
      <label for="inputAddress" class="form-label">Адрес(Улица)</label>
      <input type="text" class="form-control" id="inputAddress" placeholder="Проспект Ленина" required v-model="address">
    </div>
    <div class="col-12">
      <label for="inputAddress2" class="form-label">Адрес(номер дома)</label>
      <input type="text" class="form-control" id="inputAddress2" placeholder="144а" required v-model="numberhouse">
    </div>
    <div class="col-md-4">
      <label for="inputState" class="form-label">Область</label>
      <input type="text" class="form-control" id="inputRegion" placeholder="Киевская" required v-model="region">

    </div>
    <div class="col-md-6">
      <label for="inputCity" class="form-label">Город</label>
      <input type="text" class="form-control" id="inputCity" placeholder="Киев" required v-model="city">
    </div>

    <div class="col-md-2">
      <label for="inputZip" class="form-label">Индекс</label>
      <input type="text" class="form-control" id="inputZip" placeholder="69120" required v-model="postindex">
    </div>
    <div class="col-12">
      <button type="button" @click="upload_order" class="btn btn-primary">Заказать</button>
    </div>
  </form>
</div>
  </div>
</template>

<script>
import vCartItem from './v-cart-item'
import {mapActions, mapGetters} from "vuex";
import axios from "axios";
import swal from "sweetalert2";
export default {
  data(){
    return{
      name:'',
      surname:'',
      address:'',
      numberhouse:'',
      city:'',
      region:'',
      postindex:'',
      article:'',
    }
  },
  components: {
    vCartItem
  },
  computed: {
    ...mapGetters([
      'CART'
    ])
  },
  methods:{
    ...mapActions([
      'DELETE_ITEM'
    ]),
    deleteItem(index){
      this.DELETE_ITEM(index)
    },

    upload_order() {
      // for(let i=0; i<=this.CART.length;i++) {
      //   let orchid = this.CART[1].article
      // }
    let formOrder = new FormData()
      formOrder.append('name', this.name)
      formOrder.append('surname', this.surname)
      formOrder.append('address', this.address)
      formOrder.append('nummberhouse', this.numberhouse)
      formOrder.append('city', this.city)
      formOrder.append('region', this.region)
      formOrder.append('postindex', this.postindex)
      let articls=[]
      for (let item in this.CART){


       articls.push(this.CART[item].article)

      }
      console.log('item:', articls)
      formOrder.append('article',articls)
      // console.log('article:',article)
      axios.post('http://localhost:3000/api/orderadd',  formOrder)
      .then(res =>{
        if(res.status == 200){
          swal.fire({

            position: 'center',
            icon: 'success',
            title: 'success',
            showConfirmButton: false,
            timer: 1500,
          }),
              this.name='',
              this.surname='',
              this.address='',
              this.numberhouse='',
              this.city='',
              this.region='',
              this.postindex='',
              this.article=''
        }
        else {
          swal.fire({

            position: 'top',
            icon: 'error',
            title:  'Ошибка',
            showConfirmButton: 'false',
            timer: 1500,
        })
        }
      })
    }
  }
}
</script>

<style scoped>

</style>