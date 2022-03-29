<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BaseContainer'
}
</script>

<style scoped>
.container {
  max-width: 1400px;
  margin: 0 auto;
  height: 100%;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
