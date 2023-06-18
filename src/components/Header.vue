<template>
  <div class="HeaderContainer">
    <div class="HeaderInContainer">
      <div class="title">
        <router-link to="/">
          <img class="logo-picture" alt="Shiika" src="./../assets/Shiikai_logo8.png">
        </router-link>
      </div>
      <div class="HeaderButton">
        <router-link to="/login">ログイン</router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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
</style>
