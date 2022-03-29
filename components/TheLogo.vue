<template>
  <nuxt-link title="Главная страница" to="/" class="logo">
    <picture>
      <source
        type="image/avif"
        srcset="~/assets/img/avatar.avif 1x, ~/assets/img/avatar@2x.avif 2x"/>
      <source
        type="image/webp"
        srcset="~/assets/img/avatar.webp 1x, ~/assets/img/avatar@2x.webp 2x"/>
      <img
        src="~/assets/img/avatar.jpg"
        srcset="~/assets/img/avatar.jpg 1x, ~/assets/img/avatar@2x.jpg 2x"
        alt=""
        class="logo__img"
    /></picture>
  </nuxt-link>
</template>

<script>
export default {
  name: 'TheLogo'
}
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
