<template>
  <base-page>
    <base-container>
      <base-hero>
        <h1>Владимир Бандуристов</h1>
        <h2>Frontend Developer</h2>
        <base-icon-list />
      </base-hero>
    </base-container>
  </base-page>
</template>

<script>
import BaseContainer from '@/components/ui/BaseContainer'
import BaseHero from '@/components/TheHero'
import BasePage from '@/components/ui/BasePage'
import BaseIconList from '@/components/ui/icons/BaseIconList'
export default {
  name: 'PageHome',
  components: { BaseIconList, BasePage, BaseHero, BaseContainer },
  head() {
    return {
      title: 'Владимир Бандуристов - Frontend Developer'
    }
  }
}
</script>

<style></style>
