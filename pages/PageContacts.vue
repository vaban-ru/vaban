<template>
  <base-page class="contacts">
    <base-container>
      <base-title>Контакты</base-title>
      <p class="contacts__paragraph">
        <span>Основной телефон</span>
        <a rel="noopener" class="contacts__link" href="tel:+79017304970"
          >+7 901 730-49-70</a
        >
      </p>
      <p class="contacts__paragraph">
        <span>Запасной телефон</span>
        <a rel="noopener" class="contacts__link" href="tel:+79198563826"
          >+7 919 856-38-26</a
        >
      </p>
      <p class="contacts__paragraph">
        <span>E-mail</span>
        <a
          rel="noopener"
          class="contacts__link"
          href="mailto:hello@webzlodimir.ru"
          >hello@webzlodimir.ru</a
        >
      </p>
      <p class="contacts__paragraph">
        <span>Ссылки</span>
        <template v-for="(link, index) in links">
          <a
            :key="index"
            target="_blank"
            rel="noopener"
            class="contacts__link contacts__link--underline"
            :href="link.url"
            >{{ link.title }}</a
          ><template v-if="index < links.length - 1">, </template>
        </template>
      </p>
    </base-container>
  </base-page>
</template>
<script>
import BasePage from '@/components/ui/BasePage'
import BaseContainer from '@/components/ui/BaseContainer'
import BaseTitle from '@/components/ui/BaseTitle'
export default {
  name: 'PageContacts',
  components: { BaseTitle, BaseContainer, BasePage },
  data() {
    return {
      links: [
        {
          title: 'Резюме',
          url: 'https://hh.ru/resume/9872b757ff03ffbb140039ed1f6265726f3875'
        },
        {
          title: 'Github',
          url: 'https://github.com/vaban-ru'
        },
        {
          title: 'Gitlab',
          url: 'https://gitlab.com/vaban-ru'
        },
        {
          title: 'Telegram',
          url: 'https://t.me/vaban_ru'
        },
        {
          title: 'Вконтакте',
          url: 'https://vk.com/vaban_ru'
        }
      ]
    }
  },
  head() {
    return {
      title: 'Контакты'
    }
  }
}
</script>

<style>
.contacts__paragraph {
  margin-bottom: 36px;
}
.contacts__link {
  font-size: 20px;
  color: var(--black);
  text-decoration: none;
  transition: 0.4s;
  font-weight: 500;
}
.contacts__link:hover {
  color: var(--primary);
  text-decoration: none;
}
.contacts__link--underline {
  text-decoration: underline;
}
.contacts__paragraph span {
  color: gray;
  font-size: 16px;
  display: block;
}
</style>
