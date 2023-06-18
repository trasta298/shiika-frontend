<template>
    <Header />
    <div class="Container">
        <form class="RegisterForm" @submit="onSubmit">
            <input class="RegisterInput" v-model="username" type="text" placeholder="username">
            <input class="RegisterInput" v-model="password" type="password" placeholder="password">
            <button class="RegisterButton">新規登録</button>
        </form>
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
        const res = await apis.postRegister(req, { withCredentials: true })
        console.log(res)
        const req2: Login = {
          userid: username.value,
          password: password.value,
        }
        const res2 = await apis.postLogin(req2, { withCredentials: true })
        console.log(res2)
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

.RegisterForm {
  display: flex;
  flex-flow: column;
  align-items: center;
  font-size: 2rem;
  margin: 100px 0 30px;
}

.RegisterInput {
  width: 200px;
  margin: 10px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #f5f5f5;
  outline: none;
  font-size: 1.1rem;
}

.RegisterButton {
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

.RegisterButton:hover {
  background: #6a8af1;
}
</style>
  