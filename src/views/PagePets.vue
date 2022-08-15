<template>
  <base-page>
    <base-container>
      <base-title>Open Source</base-title>
      <works-list>
        <works-item v-for="(pet, index) in petsList" :key="index" :work="pet" />
      </works-list>
    </base-container>
  </base-page>
</template>

<script setup lang="ts">
import BasePage from "@/components/ui/BasePage.vue";
import BaseContainer from "@/components/ui/BaseContainer.vue";
import BaseTitle from "@/components/ui/BaseTitle.vue";
import WorksList from "@/components/ui/works/WorksList.vue";
import WorksItem from "@/components/ui/works/WorksItem.vue";
import { onMounted } from "vue";

const petsList = [
  {
    link: "https://github.com/vaban-ru/vue-bottom-sheet",
    id: 23,
    title: "Vue Bottom Sheet",
    desc: ["vuejs"],
  },
  {
    link: "https://github.com/NorvikIT/nuxt-utm-adder",
    id: 25,
    title: "Nuxt UTM Adder",
    desc: ["vuejs", "nuxt"],
  },
  {
    link: "https://github.com/NorvikIT/utm-aska",
    id: 26,
    title: "UTM Aska",
    desc: ["js"],
  },
  {
    link: "https://github.com/NorvikIT/vue-cookies-consent",
    id: 27,
    title: "Vue Cookies Consent",
    desc: ["vue.js"],
  },
];

onMounted(() => {
  document.title = "Open Source";
});
</script>
