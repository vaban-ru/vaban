<template>
  <div class="works-list">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'WorksList'
}
</script>

<style scoped>
.works-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
}

@media (max-width: 1024px) {
  .works-list {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
}
@media (max-width: 700px) {
  .works-list {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 15px;
    grid-row-gap: 15px;
  }
}
@media (max-width: 500px) {
  .works-list {
    grid-template-columns: 1fr;
    grid-column-gap: 15px;
    grid-row-gap: 15px;
  }
}
</style>
