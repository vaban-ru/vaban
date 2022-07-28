<template>
  <base-page class="hobby">
    <base-container>
      <base-title>
        Вишлист
      </base-title>
      <div class="hobby__grid">
        <div>
          <base-subtitle tag="h3">
            Настольные игры
          </base-subtitle>
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
                href="https://www.mosigra.ru/Face/Show/karkasson_kupcy_i_zodchie/"
                rel="noopener"
                target="_blank"
                >Каркассон. Купцы и зодчие</a
              >
            </li>
            <li>
              <a
                href="https://www.mosigra.ru/Face/Show/karkasson_princessa_i_drakon/"
                rel="noopener"
                target="_blank"
                >Каркассон. Принцесса и дракон</a
              >
            </li>
            <li>
              <a
                href="https://www.mosigra.ru/Face/Show/karkasson_mosty_zamki_bazary/"
                rel="noopener"
                target="_blank"
                >Каркассон. Мосты, замки и базары</a
              >
            </li>
            <li>
              <a
                href="https://www.mosigra.ru/karkasson-graf-korol-i-kult/"
                rel="noopener"
                target="_blank"
                >Каркассон. Граф, король и культ</a
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
                href="https://www.mosigra.ru/Face/Show/catan/"
                rel="noopener"
                target="_blank"
                >Колонизаторы
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
          <base-subtitle tag="h3">
            Компьютерные игры
          </base-subtitle>
          <ul>
            <li>
              <a
                href="https://store.playstation.com/ru-ru/product/EP9000-PPSA01474_00-RATCHETCLANKRIFT"
                rel="noopener"
                target="_blank"
                >Ratchet & Clank: Сквозь миры</a
              >
            </li>
            <li>
              <a
                href="https://www.playstation.com/ru-ru/games/god-of-war-ragnarok/"
                rel="noopener"
                target="_blank"
                >God of War Рагнарёк</a
              >
            </li>
          </ul>
          <base-subtitle tag="h3">
            Комиксы / Графические романы
          </base-subtitle>
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
                href="https://www.chitai-gorod.ru/catalog/book/814270"
                rel="noopener"
                target="_blank"
                >The Sandman. Песочный человек</a
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
          <base-subtitle tag="h3">
            Книги
          </base-subtitle>
          <ul>
            <li>
              <a
                href="https://www.chookandgeek.ru/product/varkraft-hroniki-entsiklopediya-2"
                rel="noopener"
                target="_blank"
                >Варкрафт: Хроники. Энциклопедия. Том 2</a
              >
            </li>
            <li>
              <a
                href="https://www.chookandgeek.ru/product/varkraft-hroniki-entsiklopediya-tom-3"
                rel="noopener"
                target="_blank"
                >Варкрафт: Хроники. Энциклопедия. Том 3</a
              >
            </li>
          </ul>
        </div>
      </div>
    </base-container>
  </base-page>
</template>

<script>
import BasePage from '@/components/ui/BasePage'
import BaseContainer from '@/components/ui/BaseContainer'
import BaseTitle from '@/components/ui/BaseTitle'
import BaseSubtitle from '@/components/ui/BaseSubtitle'
export default {
  name: 'PageAbout',
  components: { BaseSubtitle, BaseTitle, BaseContainer, BasePage },
  head() {
    return {
      title: 'Вишлист'
    }
  }
}
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
