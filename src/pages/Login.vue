<template>
  <Header />
  <div class="Container">
    <form class="LoginForm" @submit="onSubmit">
      <input class="LoginInput" v-model="username" type="text" placeholder="username">
      <input class="LoginInput" v-model="password" type="password" placeholder="password">
      <button class="LoginButton">ログイン</button>
    </form>
    <div>
      初めて登録する場合
      <router-link to="/register">新規登録</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Header from '../components/Header.vue'
import apis, { Login } from '../lib/apis'
import { useRouter } from 'vue-router';

const router = useRouter()
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
    const res = await apis.postLogin(req, { withCredentials: true })
    console.log(res)
    router.push('/')
  } catch (e) {
  }
}
</script>

<style scoped>
.Container {
  max-width: 800px;
  margin: 20px auto;
  text-align: center;
  display: flex;
  flex-direction: column;
}

.LoginForm {
  display: flex;
  flex-flow: column;
  align-items: center;
  font-size: 2rem;
  margin: 100px 0 30px;
}

.LoginInput {
  width: 200px;
  margin: 10px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #f5f5f5;
  outline: none;
  font-size: 1.1rem;
}

.LoginButton {
  width: 220px;
  margin: 20px auto;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  transition-duration: 0.4s;
  cursor: pointer;
  background: #5C7AEA;
  border-radius: 5px;
  padding: 10px;
}

.LoginButton:hover {
  background: #6a8af1;
}
</style>
