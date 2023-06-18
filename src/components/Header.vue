<template>
  <div class="HeaderContainer">
    <div class="HeaderInContainer">
      <div class="title">
        <router-link to="/">
          <img class="logo-picture" alt="Shiika" src="./../assets/Shiikai_logo8.png">
        </router-link>
      </div>
      <div class="HeaderButton">
        <div class="PostButton" v-on:click="onClick">投稿する</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import apis from '../lib/apis';

const router = useRouter()

const onClick = async () => {
  try {
    await apis.userKaminokuGet({ withCredentials: true })
    router.push('/post')
  } catch (e) {
    router.push('/login')
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
