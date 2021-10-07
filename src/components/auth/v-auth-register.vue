<template>
<div class="v-auth-register">
  <h1>Регистрация</h1>
  <h2>Пожалуйста введите данные</h2>
  <div class="v-auth-register__form">
<form class="v-auth-register__registration_form" name="registration_form" >
      <div><input name="name" type="text" placeholder="Имя" v-model="name"></div>
      <div><input name="surname" type="text" placeholder="Фамилия" v-model="surname"></div>
      <div><input name="nickname" type="text" placeholder="Логин" v-model="nickname"></div>
      <div><input name="email" type="email" placeholder="Email" v-model="email"></div>
      <div class="v-auth-register__registration_form_radio" >Пол:
      <div> Мужской:<input name="male" type="radio" value="Мужской" v-model="male"></div>
      <div>Женский:<input name="male" type="radio" value="Женский" v-model="male"></div>
      <div>Не важно:<input name="male" type="radio" value="Не важно" v-model="male"></div>
      </div>
      <div class="v-auth-register__registration_form_pass"><input name="password" type="password" placeholder="Пароль" v-model="password"></div>
      <div><button type="button" @click="submitRegisterForm">Зарегестрироваться</button></div>
</form>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      surname: '',
      nickname: '',
      email: '',
      male: '',
      password: '',

    }
  },
  methods:{
    submitRegisterForm(){
      console.log(this.male, this.name)
    }
  }
}
</script>

<style scoped>

</style>