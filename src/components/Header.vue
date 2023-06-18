<template>
  <div class="HeaderContainer">
    <div class="title">
      <router-link to="/">
        <img class="logo-picture" alt="Shiika" src="./../assets/Shiikai_logo8.png">
      </router-link>
    </div>
    <div class="HeaderButton">
      <router-link to="/login">ログイン</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.HeaderContainer {
  display: flex;
  height: 60px;
  align-items: center;
  background-color: #eceff4;
}
.logo-picture {
  width:80px;
  justify-content: center;
  margin-left: 30px;
}

.HeaderButton {
  margin-left: auto;
  margin-right: 20px;
}
</style>
