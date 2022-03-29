<template>
  <base-page class="about">
    <base-container>
      <base-title>
        Обо мне
      </base-title>
      <p>
        Привет, меня зовут Владимир Бандуристов. Мне {{ age }}, живу в Москве,
        разрабатываю фронтенд в <br />
        <a
          target="_blank"
          rel="noopener"
          class="disabled"
          href="https://seococktail.ru/"
          >SEO Cocktail</a
        >
        →
        <a
          target="_blank"
          rel="noopener"
          class="disabled"
          href="https://rang56.ru/"
          >RANG</a
        >
        →
        <a
          target="_blank"
          rel="noopener"
          class="disabled"
          href="https://webit.ru"
          >Webit</a
        >
        →
        <a target="_blank" rel="noopener" href="https://norvikbank.ru/"
          >Норвик Банк</a
        >
      </p>
      <div class="about__exp">
        <h2>
          Технологии (Frontend)
        </h2>
        <ul>
          <li>Большой опыт в верстке HTML5, CSS3;</li>
          <li>Большой опыт работы с препроцессорами LESS, SASS;</li>
          <li>Для сборки верстки использую Gulp;</li>
          <li>Для небольших сайтов Parcel или Webpack;</li>
          <li>Хорошо владею jQuery и чуть хуже чистым JS;</li>
          <li>
            Владею основами Vuejs, Vuex, Nuxt, имею опыт в коммерческой
            разработке;
          </li>
          <li>
            Способен настроить Gulp, Parcel и скрипты в npm/yarn, почти не
            матерясь;
          </li>
          <li>Стараюсь оптимизировать Frontend для быстрой загрузки.</li>
        </ul>
      </div>

      <div class="about__exp">
        <h2>
          Технологии (Backend)
        </h2>
        <ul>
          <li>На базовом уровне владею PHP, MySQL, шаблонизатором Smarty;</li>
          <li>Знаком с основами NodeJs;</li>
          <li>
            На базовом уровне знаком со следующими CMS: Wordpress, Joomla,
            Drupal, Bitrix, Netcat, Diafan.
          </li>
        </ul>
      </div>

      <div class="about__exp">
        <h2>
          Дизайн
        </h2>
        <ul>
          <li>
            Владею Photoshop, Figma, Avocode, Sketch на уровне правок и нарезки
            макетов;
          </li>
          <li>Имею базовые навыки 3ds Max, Corona Render.</li>
        </ul>
      </div>

      <div class="about__exp">
        <h2>Другие навыки</h2>
        <ul>
          <li>Внимателен к мелочам в своем и чужом коде;</li>
          <li>
            Называю функции и классы понятными не только для себя именами;
          </li>
          <li>
            Комментирую код со ссылками на сторонние документации для
            последующей поддержки;
          </li>
          <li>
            Много читаю, имею опыт в менторстве, постоянно учусь сам и могу
            обучать других;
          </li>
          <li>Стараюсь посещать профильные и не только конференции, митапы.</li>
        </ul>
      </div>
    </base-container>
  </base-page>
</template>

<script>
import BasePage from '@/components/ui/BasePage'
import BaseContainer from '@/components/ui/BaseContainer'
import BaseTitle from '@/components/ui/BaseTitle'
export default {
  name: 'PageAbout',
  components: { BaseTitle, BaseContainer, BasePage },
  computed: {
    age() {
      return (
        ((new Date().getTime() - new Date('1991-08-03')) /
          (24 * 3600 * 365.25 * 1000)) |
        0
      )
    }
  },
  head() {
    return {
      title: 'Обо мне'
    }
  }
}
</script>

<style scoped>
.about {
  font-size: 18px;
}
.about a {
  font-weight: 500;
  color: var(--primary);
  transition: 0.4s;
}

.about a:hover {
  color: var(--black);
  text-decoration: none;
}

.about a.disabled {
  color: gray;
  text-decoration: line-through;
}

.about li {
  margin-bottom: 5px;
}

.about h2 {
  font-size: 22px;
  font-weight: 500;
}

.about__exp:first-child {
  margin-top: 40px;
}

.about__exp + .about__exp {
  margin-top: 40px;
}
@media (max-width: 640px) {
  .about {
    font-size: 16px;
  }
  .about h2 {
    font-size: 18px;
  }
}
</style>
