<template>
 <div>
    <label for="username">ユーザー名</label>
    <input type="text" id="username" name="username">
</div>

<div class="password_box">
    <label for="pass">パスワード (8文字以上)</label>
    <input type="password" id="pass" name="password"
           minlength="8" required>
</div>


<input type="submit" value="Sign in"/>

</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    components: {
    },
    setup() {
    },
})
</script>

<style scoped>
label {
    display: block;
    font: 0.9rem helvetica, 'Fira Sans', sans-serif, ;
}

input[type='submit'],
label {
    margin-top: 1rem;
}
</style>
