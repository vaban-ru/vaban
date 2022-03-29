<template>
  <div class="icon">
    <svg width="40px" height="40px">
      <use :xlink:href="`/sprite.svg#${icon}`"></use>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'BaseIcon',
  props: {
    icon: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.icon {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary);
  margin-right: 16px;
  border: 1px solid var(--primary);
  transition: 0.4s;
}

.icon:hover {
  background-color: #fff;
}

.icon:hover svg {
  fill: var(--primary);
}

.icon svg {
  fill: #fff;
  transition: 0.4s;
}

@media (max-width: 1024px) {
  .icon {
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }
  .icon svg {
    width: 30px;
    height: 30px;
  }
}
</style>
