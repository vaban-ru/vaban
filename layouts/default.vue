<template>
  <div>
    <the-header />
    <nuxt />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
export default {
  components: { TheHeader }
}
</script>

<style>
body {
  font-family: 'Ubuntu', sans-serif;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s;
}
.page-enter,
.page-leave-active {
  opacity: 0;
}
</style>
