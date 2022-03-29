<template>
  <h1 class="title">
    <slot></slot>
  </h1>
</template>

<script>
export default {
  name: 'BaseTitle'
}
</script>

<style scoped>
.title {
  font-size: 36px;
  font-weight: 700;
  color: var(--black);
  line-height: 1.1;
  margin-bottom: 40px;
}
@media (max-width: 768px) {
  .title {
    font-size: 24px;
  }
}
</style>
