<template>
<div class="v-auth-register">
  <h1>Регистрация</h1>
  <h2 class="v-auth-register__res_true" v-if="registertrue">{{textregister}}</h2>
  <h2 class="v-auth-register__res_false" v-else-if="registerfalse">{{textregister}}</h2>
  <h2 v-else>Пожалуйста введите данные</h2>
  <div class="v-auth-register__form">
<form class="v-auth-register__registration_form" name="registration_form" @submit.prevent="" >
      <div><input name="name" type="text" placeholder="Имя" v-model="user.name" required></div>
      <div><input name="surname" type="text" placeholder="Фамилия" v-model="user.surname" required></div>
      <div><input name="nickname" type="text" placeholder="Логин" v-model="user.username" required></div>
      <div><input name="email" type="email" placeholder="Email" v-model="user.email" required></div>
      <div class="v-auth-register__registration_form_radio" required>Пол:
      <div> Мужской:<input name="male" type="radio" value="Мужской" v-model="user.male"></div>
      <div>Женский:<input name="male" type="radio" value="Женский" v-model="user.male"></div>
      <div>Не важно:<input name="male" type="radio" value="Не важно" v-model="user.male"></div>
      </div>
      <div class="v-auth-register__registration_form_pass"><input name="password" type="password" placeholder="Пароль"
                                                                  required v-model="user.password"></div>
      <div><button type="submit" @click="submitRegisterForm">Зарегестрироваться</button></div>
</form>
  </div>
</div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      registertrue: false,
      registerfalse: false,
      textregister:'',
      user:{
        name: '',
        surname: '',
        username: '',
        email: '',
        male: '',
        password: '',
      }

    }
  },
  methods:{
    submitRegisterForm(){
      console.log(this.user.male)
      // let registerFormData =new FormData
      // registerFormData.append('name',this.name)
      // registerFormData.append('surname', this.surname)
      // registerFormData.append('username',this.username)
      // registerFormData.append('email',this.email)
      // registerFormData.append('male', this.male)
      // registerFormData.append('password',this.password)
      axios.post('http://localhost:3000/auth/register',this.user)
      .then(response=>{

        console.log(response)
        if(response.status == 201){
          this.registertrue=true;
          this.registerfalse=false;
          this.textregister='Спасибо за регистрацию'


        }
        else {
          this.registerfalse=true;
          this.registertrue=false;
          this.textregister=response.data
        }
            this.user.name='',
            this.user.username='',
            this.user.surname='',
            this.user.password='',
            this.user.email=''

          }
      )
    }
  }
}
</script>

<style scoped>

</style>