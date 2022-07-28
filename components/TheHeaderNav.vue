<template>
  <nav class="header-nav">
    <the-logo />
    <nuxt-link title="Обо мне" class="header-nav__link" to="/about"
      >Обо мне</nuxt-link
    >
    <nuxt-link title="Работы" class="header-nav__link" to="/works"
      >Работы</nuxt-link
    >
    <nuxt-link title="Работы" class="header-nav__link" to="/pets"
      >Open Source</nuxt-link
    >
    <nuxt-link title="Статьи" class="header-nav__link" to="/articles"
      >Статьи</nuxt-link
    >
    <nuxt-link title="Контакты" class="header-nav__link" to="/contacts"
      >Контакты</nuxt-link
    >
  </nav>
</template>

<script>
import TheLogo from '@/components/TheLogo'
export default {
  name: 'TheHeaderNav',
  components: { TheLogo }
}
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
