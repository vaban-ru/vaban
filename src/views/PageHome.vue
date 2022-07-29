<template>
  <base-page>
    <base-container>
      <base-hero>
        <h1>Владимир Бандуристов</h1>
        <h2>Frontend Developer</h2>
        <base-icon-list />
      </base-hero>
    </base-container>
  </base-page>
</template>

<script setup lang="ts">
import BaseContainer from "@/components/ui/BaseContainer.vue";
import BaseHero from "@/components/TheHero.vue";
import BasePage from "@/components/ui/BasePage.vue";
import BaseIconList from "@/components/ui/icons/BaseIconList.vue";
import { onMounted } from "vue";

onMounted(() => {
  document.title = "Владимир Бандуристов - Frontend Developer";
});
</script>

<style></style>
