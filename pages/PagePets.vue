<template>
  <base-page>
    <base-container>
      <base-title>Домашние проекты</base-title>
      <works-list>
        <works-item v-for="(pet, index) in petsList" :key="index" :work="pet" />
      </works-list>
    </base-container>
  </base-page>
</template>
<script>
import BasePage from '@/components/ui/BasePage'
import BaseContainer from '@/components/ui/BaseContainer'
import BaseTitle from '@/components/ui/BaseTitle'
import WorksList from '@/components/ui/works/WorksList'
import WorksItem from '@/components/ui/works/WorksItem'
export default {
  components: { WorksItem, WorksList, BaseTitle, BaseContainer, BasePage },
  data() {
    return {
      petsList: [
        {
          link: 'https://github.com/vaban-ru/vue-bottom-sheet',
          id: 23,
          title: 'Vue Bottom Sheet',
          desc: ['vuejs']
        },
        {
          link: 'https://play.google.com/store/apps/details?id=ru.metod365.app',
          id: 24,
          title: 'Копилка 365 - Накопить за год легко',
          desc: ['vuejs', 'capacitor']
        }
      ]
    }
  },
  head() {
    return {
      title: 'Домашние проекты'
    }
  }
}
</script>
