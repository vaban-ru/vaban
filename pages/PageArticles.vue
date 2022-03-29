<template>
  <base-page class="articles">
    <base-container>
      <base-title>Статьи</base-title>
      <p
        v-for="article in articles"
        :key="`article-${article.id}`"
        class="articles__paragraph"
      >
        <span class="articles__link-date">
          {{ article.date }}
        </span>
        <a
          class="articles__link"
          target="_blank"
          rel="noopener"
          :href="article.url"
          :title="article.name"
          >{{ article.name }}</a
        >
      </p>
    </base-container>
  </base-page>
</template>
<script>
import BasePage from '@/components/ui/BasePage'
import BaseContainer from '@/components/ui/BaseContainer'
import BaseTitle from '@/components/ui/BaseTitle'
export default {
  name: 'PageArticles',
  components: { BaseTitle, BaseContainer, BasePage },
  data() {
    return {
      articles: [
        {
          id: 1,
          name: 'Приёмы и хитрости, которые упростят жизнь разработчика',
          url: 'https://tproger.ru/articles/programmers-lifehacks/',
          date: '22.01.2020'
        },
        {
          id: 2,
          name: 'CSS переменные (пользовательские CSS-свойства) за 5 минут',
          url: 'http://bit.ly/2XXimIP',
          date: '22.07.2019'
        },
        {
          id: 3,
          name: 'Создание скроллбара с эффектом загрузки на Vue.js',
          url: 'http://bit.ly/2Jtneg7',
          date: '12.02.2019'
        },
        {
          id: 4,
          name:
            'Создание чертовски простого макета календаря с помощью CSS Grid, Moment.js и Vue.js',
          url: 'http://bit.ly/2GvGiIr',
          date: '26.06.2019'
        },
        {
          id: 5,
          name: 'Удаление Emoji из строки с помощью PHP',
          url: 'http://bit.ly/2Le363x',
          date: '10.06.2019'
        },
        {
          id: 6,
          name:
            '5 Vuex плагинов которые вы можете использовать в своем следующем Vue.js проекте',
          url: 'http://bit.ly/2XFgd4k',
          date: '26.06.2018'
        }
      ]
    }
  },
  head() {
    return {
      title: 'Статьи'
    }
  }
}
</script>

<style>
.articles__paragraph {
  margin-bottom: 36px;
}
.articles__link {
  font-weight: 400;
  font-size: 20px;
  color: var(--black);
  text-decoration: underline;
  transition: 0.4s;
}
.articles__link:hover {
  color: var(--primary);
  text-decoration: none;
}
.articles__link-date {
  color: gray;
  font-size: 16px;
  display: block;
}
</style>
