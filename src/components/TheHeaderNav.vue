<template>
  <nav class="header-nav">
    <the-logo />
    <router-link
      title="Обо мне"
      class="header-nav__link"
      :to="{ name: 'about' }"
      >Обо мне</router-link
    >
    <router-link title="Работы" class="header-nav__link" :to="{ name: 'works' }"
      >Работы</router-link
    >
    <router-link
      title="Open Source"
      class="header-nav__link"
      :to="{ name: 'pets' }"
      >Open Source</router-link
    >
    <router-link
      title="Статьи"
      class="header-nav__link"
      :to="{ name: 'articles' }"
      >Статьи</router-link
    >
    <router-link
      title="Контакты"
      class="header-nav__link"
      :to="{ name: 'contacts' }"
      >Контакты</router-link
    >
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import TheLogo from "@/components/TheLogo.vue";
</script>

<style scoped>
.header-nav {
  display: flex;
  align-items: center;
}
.header-nav__link {
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--primary);
  transition: 0.4s;
  margin-right: 70px;
}
.header-nav__link:hover,
.header-nav__link.router-link-exact-active {
  color: var(--black);
  text-decoration: none;
}
.header-nav__link:last-child {
  margin-right: 0;
}

@media (max-width: 768px) {
  .header-nav {
    flex-wrap: wrap;
  }
  .header-nav__link {
    margin-right: 12px;
  }
}
</style>
