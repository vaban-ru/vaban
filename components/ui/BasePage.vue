<template>
  <div class="page">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BasePage'
}
</script>

<style scoped>
.page {
  min-height: 80vh;
  height: 100%;
  padding: 100px 0;
}
@media (max-width: 1600px) {
  .page {
    padding: 40px 0;
  }
}
@media (prefers-color-scheme: dark) {
  .page {
    background-color: #171c20;
  }
}
</style>
