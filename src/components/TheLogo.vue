<template>
  <router-link title="Главная страница" to="/" class="logo">
    <picture>
      <source
        type="image/avif"
        :srcset="`${AvatarAvif} 1x, ${AvatarAvif2X} 2x`"
      />
      <source
        type="image/webp"
        :srcset="`${AvatarWebP} 1x, ${AvatarWebP2x} 2x`"
      />
      <img
        alt="Владимир Бандуристов"
        :src="AvatarJpg"
        :srcset="`${AvatarJpg} 1x, ${AvatarJpg2x} 2x`"
        class="logo__img"
      />
    </picture>
  </router-link>
</template>

<script setup lang="ts">
import AvatarAvif from "@/assets/img/avatar.avif";
import AvatarAvif2X from "@/assets/img/avatar@2x.avif";
import AvatarWebP from "@/assets/img/avatar.webp";
import AvatarWebP2x from "@/assets/img/avatar@2x.webp";
import AvatarJpg from "@/assets/img/avatar.jpg";
import AvatarJpg2x from "@/assets/img/avatar@2x.jpg";
import { RouterLink } from "vue-router";
</script>

<style scoped>
.logo {
  margin-right: 70px;
  display: block;
  width: 52px;
  height: 52px;
  border-radius: 100%;
  border: 2px solid transparent;
  transition: 0.4s;
}
.logo:hover,
.logo.router-link-exact-active {
  border-color: var(--primary);
}
.logo__img {
  border-radius: 100%;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
@media (max-width: 768px) {
  .logo {
    display: none;
  }
}
</style>
