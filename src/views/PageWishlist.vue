<template>
  <base-page class="hobby">
    <base-container>
      <base-title> Вишлист </base-title>
      <div class="hobby__grid">
        <div>
          <base-subtitle tag="h3"> Настольные игры </base-subtitle>
          <ul>
            <li>
              <a
                href="https://nizagams.ru/product/pokorenie_marsa_terraforming_mars/"
                rel="noopener"
                target="_blank"
                >Покорение Марса</a
              >
            </li>
            <li>
              <a
                href="https://nizagams.ru/product/zvezdnie_imperii_2_izdanie/"
                rel="noopener"
                target="_blank"
                >Звёздные империи</a
              >
            </li>
            <li>
              <a
                href="https://www.mosigra.ru/Face/Show/malenkiy_mir_nebesnye_ostrova/"
                rel="noopener"
                target="_blank"
                >Small World. Небесные острова</a
              >
            </li>
            <li>
              <a
                href="https://hobbygames.ru/smallworld-podzemnij-mir"
                rel="noopener"
                target="_blank"
                >Small World. Подземный мир</a
              >
            </li>
            <li>
              <a
                href="https://hobbygames.ru/fluxx-zombi"
                rel="noopener"
                target="_blank"
                >Fluxx: Зомби</a
              >
            </li>
            <li>
              <a
                href="https://www.mosigra.ru/kotiki/"
                rel="noopener"
                target="_blank"
                >Котики</a
              >
            </li>
            <li>
              <a
                href="https://www.mosigra.ru/7-wonders/"
                rel="noopener"
                target="_blank"
                >7 чудес
              </a>
            </li>
            <li>
              <a
                href="https://www.mosigra.ru/Face/Show/hobby_dominion//"
                rel="noopener"
                target="_blank"
                >Доминион
              </a>
            </li>
          </ul>
        </div>
        <div>
          <base-subtitle tag="h3"> Комиксы / Графические романы </base-subtitle>
          <ul>
            <li>
              <a
                href="https://www.chookandgeek.ru/product/betmen-smert-semi-endshpil"
                rel="noopener"
                target="_blank"
                >Бэтмен. Смерть семьи. Эндшпиль</a
              >
            </li>
            <li>
              <a
                href="https://www.chookandgeek.ru/product/betmen-sverhtyazhest-rastsvet-36-6919"
                rel="noopener"
                target="_blank"
                >Бэтмен. Сверхтяжесть. Расцвет</a
              >
            </li>
            <li>
              <a
                href="https://book24.ru/product/transmetropoliten-kn-1-snova-v-gorode-zhazhda-zhizni-5805415/"
                rel="noopener"
                target="_blank"
                >Трансметрополитен</a
              >
            </li>
          </ul>
          <base-subtitle tag="h3"> Всякое разное</base-subtitle>
          <ul>
            <li>
              <a
                href="https://market.yandex.ru/product--umnaia-kolonka-yandex-stantsiia-lait/962050067?cpa=1"
                rel="noopener"
                target="_blank"
                >Яндекс Станция Лайт</a
              >
            </li>
          </ul>
        </div>
      </div>
    </base-container>
  </base-page>
</template>

<script setup lang="ts">
import BasePage from "@/components/ui/BasePage.vue";
import BaseContainer from "@/components/ui/BaseContainer.vue";
import BaseTitle from "@/components/ui/BaseTitle.vue";
import BaseSubtitle from "@/components/ui/BaseSubtitle.vue";
import { onMounted } from "vue";

onMounted(() => {
  document.title = "Вишлист";
});
</script>

<style scoped>
.hobby {
  font-size: 18px;
}
.hobby__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
}

@media (max-width: 640px) {
  .hobby__grid {
    grid-template-columns: auto;
    gap: 32px;
  }
}
</style>
