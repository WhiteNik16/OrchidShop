<template>
<div class="v-auth-login">
  <div class="v-auth-login__form">
    <form class="v-auth-register__registration_form" name="registration_form" >
      <h2 v-if="name.length">{{name}}</h2>
      <h2 v-else>Введите данные</h2>
      <div><input name="nickname" type="text" placeholder="Логин" required  v-model="user.username"></div>
      <div class="v-auth-register__registration_form_pass"><input name="password" required type="password"
                                                                  placeholder="Пароль" v-model="user.password"></div>
      <div><button type="button" @click="submitLoginForm">Войти</button>
      </div>
       <div><a href="/#/register">Нет профиля? Регистрация</a></div>
    </form>
  </div>
</div >
</template>

<script>
import axios from "axios";
import swal from 'sweetalert2'
import {mapActions} from "vuex";
export default {
  data(){
    return{
      user:{
        username: '',
        password: '',

      },
      name:''
      // jwt:''
    }
  },
  methods:{

...mapActions([
  'ADD_JWT'
]),
    submitLoginForm(){
      axios.post('http://localhost:3000/auth/login', this.user)
      .then(res =>{
        console.log(res)
        if(res.status==202){
          let jwt = res.data


          console.log(this.jwt)

            this.ADD_JWT(jwt)

          swal.fire({

              position: 'top',
              icon: 'success',
              title: 'success',
              showConfirmButton: 'false',
              timer: 1500,
        })
        }
        else{
          let msg=res.data
          swal.fire({

              position: 'top',
              icon: 'error',
              title: msg,
              showConfirmButton: 'false',
              timer: 1500,
          })
        }

      })
         this.user.username='',
          this.user.password=''
    }
  },

}

</script>

<style scoped>

</style>