<template>
  <component :is="tag" class="subtitle">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'BaseSubtitle',
  props: {
    tag: {
      type: String,
      default: 'h2'
    }
  }
}
</script>

<style scoped>
h2.subtitle {
  font-size: 24px;
  font-weight: 500;
}
h3.subtitle {
  font-size: 20px;
  font-weight: 500;
}
</style>
