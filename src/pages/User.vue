<template>
  <Header />

  <div class="container">
    <div class="UserTitle">自分の投稿した句一覧</div>
    <!--「上の句」の画像を貼るところ-->
    <div class="kaminoku_itiran_png">
      <img class="fit-picture" alt="上の句 一覧" src="./../assets/kaminoku_ichiran.png">
    </div>

    <div class="cards"> <!-- コンテナ -->
      <Card first="あいうえお" second="かきくけこここ" third="さしすせそ"></Card>
      <Card v-for="kaminoku in userKaminokus" :first="kaminoku.content.first" :second="kaminoku.content.second"
        :third="kaminoku.content.third" :key="kaminoku.id"></Card>
    </div>
    <!-- <div class="parent_of_more_info_button">
        <div class="more_info_button" v-on:click="">↓さらに表示</div>
      </div> -->

    <!--「作品」の画像を貼るところ-->
    <div class="sakuhin_itiran_png">
      <img class="fit-picture" alt="作品一覧" src="./../assets/sakuhin_ichiran.png">
    </div>

    <div class="cards">
      <TankaCard first="ちはやぶる" second="神代も聞かず" third="竜田川" fourth="から紅に" fifth="水くくるとは"></TankaCard>
      <TankaCard v-for="tanka in userTankas" :first="tanka.kaminoku.content.first" :second="tanka.kaminoku.content.second"
        :third="tanka.kaminoku.content.third" :fourth="tanka.simonoku.content.fourth"
        :fifth="tanka.simonoku.content.fifth" :key="tanka.simonoku.id"></TankaCard>
    </div>

    <!-- <div class="parent_of_more_info_button"> 
        <div class="more_info_button" v-on:click="">↓さらに表示</div>
      </div> -->
  </div>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue'
import Card from '../components/Card.vue'
import TankaCard from '../components/TankaCard.vue'
import apis, { Kaminoku, Tanka } from '../lib/apis'
import { ref, watchEffect } from 'vue';

const userKaminokus = ref<Kaminoku[]>([])
const userTankas = ref<Tanka[]>([])

watchEffect(async () => {
  const res = await apis.userKaminokuGet({ withCredentials: true })
  userKaminokus.value = res.data
  const res2 = await apis.userSimonokuGet({ withCredentials: true })
  userTankas.value = res2.data
})

</script>


<style scoped>
.UserTitle {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.container .cards {
  display: grid;
  /* グリッドレイアウト */
  place-content: center;
  /* grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); */
  grid-auto-rows: 225px;
  grid-template-columns: repeat(auto-fill, 150px);
  gap: 25px;
  margin-top: 20px;
}

.container {
  height: 70%;
  justify-items: center;
  place-items: center;
  margin: 50px auto;
  max-width: 800px;
}

.parent_of_more_info_button {
  margin-bottom: 30px;
}

.more_info_button {
  margin: 0 auto;
  margin-top: 30px;
  width: 100px;
  text-align: center;
  font-size: 15px;
  color: #fff;
  padding: 1px 2px;
  background-color: #A1B1CA;
  border-radius: 0.1rem;
  text-decoration: none;
}

.kaminoku_itiran_png img {
  width: 170px;
  margin-top: 20px;
}

.sakuhin_itiran_png img {
  width: 160px;
  margin: 70px auto 0;
}
</style>
