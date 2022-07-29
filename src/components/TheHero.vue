<template>
  <div class="hero">
    <div class="hero__wrapper">
      <div class="hero__text">
        <slot></slot>
      </div>
      <div class="hero__video">
        <video width="100%" height="100%" muted autoplay loop playsinline>
          <source :src="`/videos/video${randVideo}.mp4`" type="video/mp4" />
          <source :src="`/videos/video${randVideo}.webm`" type="video/webm" />
          <source :src="`/videos/video${randVideo}.ogg`" type="video/ogg" />
        </video>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const randVideo = ref(1);

onMounted(() => {
  randVideo.value = Math.round(1 - 0.5 + Math.random() * 3);
});
</script>

<style scoped>
.hero {
  min-height: 400px;
}
.hero :deep(h1),
.hero :deep(h2) {
  font-size: 48px;
  font-weight: 700;
  color: var(--black);
  line-height: 1.1;
}
.hero :deep(h2) {
  margin-bottom: 28px;
}
.hero__wrapper {
  justify-content: space-between;
  display: flex;
  align-items: center;
}
.hero__video {
  width: 530px;
}
.hero__video video {
  width: 100% !important;
  height: 100% !important;
}

@media (max-width: 1280px) {
  .hero :deep(h1),
  .hero :deep(h2) {
    font-size: 44px;
  }
}

@media (max-width: 1024px) {
  .hero :deep(h1),
  .hero :deep(h2) {
    font-size: 34px;
  }
}

@media (max-width: 768px) {
  .hero__video {
    display: none;
  }
  .hero :deep(h1),
  .hero :deep(h2) {
    font-size: 26px;
  }
}

@media (prefers-color-scheme: dark) {
  .hero__video {
    display: none;
  }
}
</style>
