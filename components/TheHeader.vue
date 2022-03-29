<template>
  <div class="header">
    <base-container>
      <the-header-nav />
    </base-container>
  </div>
</template>
<script>
import TheHeaderNav from '@/components/TheHeaderNav'
import BaseContainer from '@/components/ui/BaseContainer'
export default {
  name: 'TheHeader',
  components: { BaseContainer, TheHeaderNav }
}
</script>

<style scoped>
.header {
  padding-top: 50px;
}

@media (max-width: 1024px) {
  .header {
    padding-top: 40px;
  }
}

@media (prefers-color-scheme: dark) {
  .header {
    background-color: #171c20;
  }
}
</style>
