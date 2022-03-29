<template>
  <base-page>
    <base-container>
      <h1 v-if="error.statusCode === 404">404 Страница не найдена</h1>
      <h1 v-else-if="error.statusCode === 500">500 Произошла ошибка</h1>
      <h1 v-else>Произошла ошибка</h1>
      <nuxt-link to="/">Вернуться на главную страницу</nuxt-link>
    </base-container>
  </base-page>
</template>

<script>
import BasePage from '@/components/ui/BasePage'
import BaseContainer from '@/components/ui/BaseContainer'
export default {
  components: { BaseContainer, BasePage },
  props: {
    error: {
      type: [Array, Object],
      default() {}
    }
  },
  head() {
    return {
      title: 'Страница не найдена'
    }
  }
}
</script>
