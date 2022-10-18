<template>
  <component :is="tag" class="subtitle">
    <slot />
  </component>
</template>

<script setup lang="ts">
interface IBaseSubtitle {
  tag: string;
}

withDefaults(defineProps<IBaseSubtitle>(), {
  tag: "h2",
});
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
