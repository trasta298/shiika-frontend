<template>
  <div class="HeaderContainer">
    <div class="HeaderInContainer">
      <div class="title">
        <router-link to="/">
          <img class="logo-picture" alt="Shiika" src="./../assets/Shiikai_logo8.png">
        </router-link>
      </div>
      <div class="HeaderButton">
        <div class="MoveMyPage" v-on:click="onClick('/user')">マイページ</div>
        <div class="PostButton" v-on:click="onClick('/post')">投稿する</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import Axios from 'axios';
import apis from '../lib/apis';

const router = useRouter()

const onClick = async (path: string) => {
  try {
    const res = await apis.userKaminokuGet({ withCredentials: true })
    console.log(res)
    router.push(path)
  } catch (e) {
    if (Axios.isAxiosError(e) && e.response && e.response.status === 404) router.push(path)
    else router.push('/login')
  }
}
</script>

<style scoped>
.HeaderContainer {
  height: 60px;
  background-color: #eceff4;
}

.HeaderInContainer {
  display: flex;
  align-items: center;
  height: 60px;
  max-width: 1200px;
  margin: 0 auto;
}

.logo-picture {
  width: 80px;
  justify-content: center;
  margin-left: 30px;
}

.HeaderButton {
  margin-left: auto;
  margin-right: 20px;
  display: flex;
}

.MoveMyPage {
  margin-right: 20px;
  text-decoration: none;
  color: #000;
  padding-top: 10px;
}

.PostButton {
  background: #AE2B2D;
  color: #fff;
  border-radius: 5px;
  border: none;
  padding: 0.7rem 1.2rem;
  margin: 0 auto;
  text-decoration: none;
}

.PostButton:active {
  background: #852324;
  color: #fff;
  border-radius: 5px;
  border: none;
  padding: 0.7rem 2.8rem;
}
</style>
