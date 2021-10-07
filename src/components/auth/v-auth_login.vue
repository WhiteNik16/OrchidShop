<template>
<div class="v-auth-login">
  <div class="v-auth-login__form">
    <form class="v-auth-register__registration_form" name="registration_form" >
      <h2>Введите данные</h2>
      <div><input name="nickname" type="text" placeholder="Логин" v-model="login"></div>
      <div class="v-auth-register__registration_form_pass"><input name="password" type="password" placeholder="Пароль" v-model="password"></div>
      <div><button type="button" @click="submitLoginForm">Войти</button>
      </div>
       <div><a href="/#/register">Нет профиля? Регистрация</a></div>
    </form>
  </div>
</div >
</template>

<script>
export default {
  data(){
    return{
      login:'',
      password:'',
    }
  },
  methods:{
    submitLoginForm(){
      console.log(this.login, this.password)
    }
  }
}
</script>

<style scoped>

</style>