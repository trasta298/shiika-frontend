<script setup lang="ts">
import { ref } from 'vue';
import Header from '../components/Header.vue'
import Card from '../components/Card.vue'
import apis, { RequestKaminoku } from '../lib/apis'

const first = ref('')
const second = ref('')
const third = ref('')

const onClick = () => {
  try {
    const req: RequestKaminoku = {
      content: {
        first: first.value,
        second: second.value,
        third: third.value
      }
    }
    const res = apis.postKaminoku(req, { withCredentials: true })
    console.log(res)
  } catch (e) {
    console.log(e)
    window.alert('投稿に失敗しました')
  }
}
</script>


<template>
  <Header />
  <div class="Container">
    <div class="LeftContainer">
      <input class="PostTextbox" v-model="first" type="text" autocomplete="off" placeholder="初句">
      <input class="PostTextbox" v-model="second" type="text" autocomplete="off" placeholder="二句">
      <input class="PostTextbox" v-model="third" type="text" autocomplete="off" placeholder="三句">
      <button class="PostButton" type="submit" v-on:click="onClick">投稿</button>
    </div>
    <div class="RightContainer">
      <div class="PreviewCard">
        <Card :first="first" :second="second" :third="third" />
      </div>
    </div>
  </div>
</template>


<style>
.Container {
  margin: 10px auto;
  max-width: 800px;
  display: flex;
  padding-top: 100px;
}

.LeftContainer {
  width: 300px;
  height: 400px;
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  align-items: center;
}

.RightContainer {
  width: 300px;
  height: 400px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  place-content: center;
}

.PreviewCard {
  width: 120px;
  height: 180px;
}

.PostTextbox {
  width: 300px;
  height: 40px;
  margin-bottom: 50px;
  border: 1px solid rgba(247, 250, 252, 0.3);
  opacity: .3;
  color: #000;
  opacity: 1.0;
  border-radius: 10px;
  font-size: 16px;
  outline: none;
  background-color: rgba(162, 177, 202, 0.3);
  padding: 2px 10px;
}

.PostTextbox:focus {
  background-color: rgba(162, 177, 202, 0.5);
}

.PostButton {
  background: #AE2B2D;
  color: #fff;
  border-radius: 5px;
  border: none;
  padding: 0.7rem 2.8rem;
  margin: 0 auto;
}

.PostButton:active {
  background: #852324;
  color: #fff;
  border-radius: 5px;
  border: none;
  padding: 0.7rem 2.8rem;
}
</style>