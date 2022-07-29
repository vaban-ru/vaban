<template>
  <base-page>
    <base-container>
      <h1>404 Страница не найдена</h1>
      <router-link to="/">Вернуться на главную страницу</router-link>
    </base-container>
  </base-page>
</template>

<script setup lang="ts">
import BasePage from "@/components/ui/BasePage.vue";
import BaseContainer from "@/components/ui/BaseContainer.vue";
import { RouterLink } from "vue-router";
import { onMounted } from "vue";

onMounted(() => {
  document.title = "Страница не найдена";
});
</script>
