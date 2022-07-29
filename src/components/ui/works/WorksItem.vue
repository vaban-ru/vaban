<template>
  <div class="works-item">
    <picture>
      <source type="image/avif" :data-srcset="src('avif')" />
      <source type="image/webp" :data-srcset="src('webp')" />
      <img
        width="318"
        height="318"
        :data-src="src('single')"
        :data-srcset="src('jpg')"
        :alt="work.title"
        class="works-item__img lazyload"
    /></picture>
    <div class="works-item__desc">
      <p class="works-item__title">
        {{ work.title }}
      </p>
      <div class="works-item__tag-list">
        <p
          v-for="(tag, index) in work.desc"
          :key="`tag-${index}`"
          class="works-item__tag"
        >
          {{ tag }}
        </p>
      </div>
    </div>
    <a
      :title="work.alt"
      target="_blank"
      rel="noopener"
      :href="work.link"
      class="works-item__link"
    ></a>
  </div>
</template>

<script setup lang="ts">
import "lazysizes";
interface IWorksItemProps {
  work: {
    link: string;
    id: number;
    title: string;
    desc: string[];
    alt?: string;
  };
}
const props = defineProps<IWorksItemProps>();

const src = (ext: string) => {
  if (!props.work.id) {
    return;
  }
  if (ext !== "single") {
    return `${
      new URL(
        `../../../assets/img/works/${props.work.id}.${ext}`,
        import.meta.url
      ).href
    } 1x, ${
      new URL(
        `../../../assets/img/works/${props.work.id}@2x.${ext}`,
        import.meta.url
      ).href
    } 2x`;
  }
  return new URL(
    `../../../assets/img/works/${props.work.id}.jpg`,
    import.meta.url
  ).href;
};
</script>

<style scoped>
.works-item {
  position: relative;
  min-height: 318px;
}
.works-item:hover .works-item__img {
  filter: grayscale(0);
}
.works-item:hover .works-item__desc {
  background: rgba(0, 0, 0, 0.4);
}
.works-item__desc {
  transition: 0.4s;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
}
.works-item__img {
  width: 100%;
  filter: grayscale(100%);
}
.works-item__title {
  color: #fff;
  font-weight: 500;
  font-size: 20px;
  display: block;
  margin-bottom: 8px;
}
.works-item__tag-list {
  display: flex;
  flex-wrap: wrap;
}
.works-item__tag {
  display: inline-block;
  font-weight: 600;
  background: var(--yellow);
  border-radius: 13.5px;
  font-size: 10px;
  line-height: 1;
  color: #000000;
  padding: 5px 8px;
  margin-bottom: 8px;
}
.works-item__tag + .works-item__tag {
  margin-left: 8px;
}
.works-item__link {
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
