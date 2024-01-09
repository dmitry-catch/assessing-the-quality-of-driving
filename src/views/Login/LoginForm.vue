<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/store/auth.js'
import Surface from '@/ui/Surface.vue'
import Input from '@/ui/Input.vue'
import Button from '@/ui/Button.vue'

const auth = useAuthStore()

const username = ref('')
const password = ref('')
const error = ref('')

/* temporary stub */
const login = async () => {
  error.value = ''
  if (username.value === 'admin' && password.value === 'admin') {
    auth.setToken('faketoken123')
    sessionStorage.setItem('token', auth.token)
    alert(`\n - - - Авторизация прошла успешно!!! - - - \n \n (токен записан в sessionStorage)`)
  } else {
    error.value = 'Введены неверные данные'
  }
}
/* */
</script>

<template>
  <Surface class="LoginForm">
    <form @submit.prevent="login" class="LoginForm__form">
      <h2 class="LoginForm__header">Авторизация</h2>
      <Input v-model="username" placeholder="Эл.почта" />
      <Input v-model="password" type="password" placeholder="Пароль" />
      <Button type="submit">Вход</Button>
      <p v-if="error" class="warning">{{ error }}</p>
    </form>
  </Surface>
</template>

<style>
.LoginForm {
  width: 400px;
  margin: 0 auto;
}

.LoginForm__form {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.LoginForm__header {
  text-align: center;
  padding: 24px;
}
</style>
