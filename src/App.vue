<template>
  <div class="box">
    <VueChatEmojiComponent
      :open="open"
      :width="width"
      :height="height"
      @toggle="showOrHide"
      @handle="selectedEmoji"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { VueChatEmojiComponent } from "@nguyenvanlong/vue3-chat-emoji";
import "../dist/index.mjs.css";

const open = ref(true);
const width = ref("96%");
const height = "250px";

function showOrHide() {
  this.open = !this.open;
}

function selectedEmoji(args) {
  console.log(args); /* return {...}*/
}
</script>

<style lang="scss">
#app {
  margin-top: 60px;
  .box {
    width: 400px;
    position: relative;
    height: 300px;
  }
}
</style>
