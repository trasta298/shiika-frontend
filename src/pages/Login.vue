<template>
  <Header />
  <div class="Container">
    <form class="LoginForm" @submit="onSubmit">
      <input class="LoginInput" v-model="username" type="text" placeholder="username">
      <input class="LoginInput" v-model="password" type="password" placeholder="password">
      <button class="LoginButton">login</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Header from '../components/Header.vue'
import apis, { Login } from '../lib/apis'

const username = ref('')
const password = ref('')

const onSubmit = async (e: Event) => {
  console.log('submit')
  e.preventDefault()
  try {
    const req: Login = {
      userid: username.value,
      password: password.value,
    }
    const res = await apis.postLogin(req)
    console.log(res)
  } catch (e) {
  }
}
</script>

<style scoped>
.Container {
  max-width: 1024px;
  margin: 20px auto;
}
.LoginForm {
  display: flex;
  flex-flow: column;
  align-items: center;
}

.LoginInput {
  width: 200px;
  margin: 10px;
}

.LoginButton {
  width: 200px;
  margin: 10px;
}
</style>
