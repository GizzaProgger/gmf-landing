<template>
  <section class="index-partners">
    <p class="index-partners__title">Наши топ партнеры</p>
    <NuxtPicture
      src="/assets/imgs/partner.png"
      alt="Партнёры MGF"
      class="index-partners__image"
    />
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@use '~/assets/scss/vars' as *;
@use '~/assets/scss/mixins' as *;

.index-partners {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.index-partners__title {
  color: #fff;
  font-family: Sora, var(--font-family);
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 123.5%;
  margin: 0 0 60px;

  @include below($bp-tablet) {
    font-size: 28px;
    margin-bottom: 2rem;
  }

  @include below($bp-mobile) {
    font-size: 24px;
    margin-bottom: 1.5rem;
  }
}

.index-partners__image {
  display: block;
  width: 100%;

  :deep(img) {
    width: 100%;
    height: auto;
    display: block;
  }
}
</style>
