<template>
  <div class="icon-list">
    <base-icon v-for="(tec, index) in techs" :key="index" :icon="tec" />
  </div>
</template>

<script setup lang="ts">
import BaseIcon from "./BaseIcon.vue";
const techs = ["html", "css", "sass", "js", "vuejs", "gulp", "nodejs", "git"];
</script>

<style scoped>
.icon-list {
  margin-top: 60px;
  display: flex;
}
@media (max-width: 768px) {
  .icon-list {
    flex-wrap: wrap;
    margin-top: 30px;
  }
}
@media (prefers-color-scheme: dark) {
  .icon-list {
    opacity: 0.6;
  }
}
</style>
