<!-- Card: 上の句のカード
上の句一覧で表示する -->

<script setup lang="ts">
import { useRouter } from 'vue-router';

const props = defineProps({
  first: {
    type: String,
    required: true
  },
  second: {
    type: String,
    required: true
  },
  third: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: false
  },
})
const router = useRouter()

const onClick = () => {
  if (props.id == null) {
    return
  }
  router.push(`/kaminoku/${props.id}`)
}
</script>

<template>
  <div class="frame" v-on:click="onClick">
    <!-- 左からflexの子要素が配置され、俳句は右から左に書くので以下のように逆になる。 -->
    <div class="line">
      {{ third }}
    </div>
    <div class="line">
      {{ second }}
    </div>
    <div class="line">
      {{ first }}
    </div>
  </div>
</template>

<style scoped>
.frame {
  display: flex;
  justify-content: center;
  position: relative;
  height: 100%;
  width: 100%;
  border: solid 4px #A78F6B;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .2);
  /*アニメーションの設定*/
  transition: all .3s;
  text-decoration: none;
}

.frame:hover {
  top: -3px;
  box-shadow: 0 8px 10px 0 rgba(0, 0, 0, .2);
  cursor: pointer;

}

.line {
  font-size: 20px;
  writing-mode: vertical-rl;
  text-align: left;
  margin-top: 20px;
}
</style>
