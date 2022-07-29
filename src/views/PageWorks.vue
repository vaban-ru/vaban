<template>
  <base-page>
    <base-container>
      <base-title>Работы в которых я принимал участие</base-title>
      <works-list>
        <works-item
          v-for="(work, index) in worksItems"
          :key="index"
          :work="work"
        />
      </works-list>
    </base-container>
  </base-page>
</template>

<script setup lang="ts">
import BasePage from "@/components/ui/BasePage.vue";
import BaseContainer from "@/components/ui/BaseContainer.vue";
import BaseTitle from "@/components/ui/BaseTitle.vue";
import WorksList from "@/components/ui/works/WorksList.vue";
import WorksItem from "@/components/ui/works/WorksItem.vue";
import { onMounted } from "vue";

const worksItems = [
  {
    link: "https://event.top/",
    id: 22,
    title: "Event Top",
    desc: ["nuxt", "vuejs"],
  },
  {
    link: "https://yoxbe.com/",
    id: 13,
    title: "Yoxbe",
    desc: ["vuejs"],
  },
  {
    link: "https://shop.casio.ru/",
    id: 14,
    title: "CASIO",
    desc: ["html", "css", "jquery"],
  },
  {
    link: "https://www.neoart.ru/",
    id: 21,
    title: "Neoart",
    desc: ["html", "css", "jquery"],
  },
  {
    link: "https://www.vodoparad.ru/",
    id: 20,
    title: "VodoParad",
    desc: ["html", "css", "jquery"],
  },
  {
    link: "https://ambassador-manufaktura.ru/",
    id: 19,
    title: "Ambassador Manufaktura",
    desc: ["html", "css", "jquery"],
  },
  {
    link: "https://tecdoc.moscow/",
    id: 16,
    title: "TecAlliance",
    desc: ["html", "css", "jquery"],
  },
  {
    link: "https://fbgames.ru/",
    id: 18,
    title: "Фабрика игр",
    desc: ["html", "css", "jquery"],
  },
  {
    link: "http://www.fraikinrus.ru/",
    id: 12,
    title: "Fraikin",
    desc: ["html", "css", "jquery"],
  },
  {
    link: "https://seococktail.ru/",
    id: 9,
    title: "SEO Cocktail",
    desc: ["html", "css", "jquery"],
  },
  {
    link: "https://xn----7sbpnjfffbnak8ag2q.xn--p1ai/",
    id: 1,
    title: "Потолочный Десант",
    desc: ["html", "css", "vuejs"],
  },
  {
    link: "https://xn----jtbkofbaeckeini.xn--p1ai/",
    id: 2,
    title: "Простой Ремонт",
    desc: ["html", "css", "jquery"],
  },
  {
    link: "https://5iz5.ru/",
    id: 3,
    title: "Пять из Пяти",
    desc: ["html", "css", "jquery"],
  },
  {
    link: "http://uralenergosnab.com/",
    id: 6,
    title: "УралЭнергоСнаб",
    desc: ["html", "css", "jquery"],
  },
  {
    link: "http://yamakasi56.ru/",
    id: 10,
    title: "Ямакаси",
    desc: ["html", "css", "jquery"],
  },
  {
    link: "http://dhd.su/",
    id: 7,
    title: "DA VINCHI",
    desc: ["html", "css", "jquery"],
  },
  {
    link: "https://novamsk.ru/",
    id: 8,
    title: "НОВА",
    desc: ["html", "css", "jquery"],
  },
];

onMounted(() => {
  document.title = "Работы";
});
</script>
