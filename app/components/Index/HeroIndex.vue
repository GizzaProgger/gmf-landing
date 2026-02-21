<template>
  <section class="hero-index">
    <div class="hero-index__content">
      <UiTitle :level="1" variant="brand" class="hero-index__brand">MGF</UiTitle>
      <UiTitle :level="1" class="hero-index__title">
        Международная деловая<br />
        экосистема мусульман
      </UiTitle>
      <p class="hero-index__lead">
        Объединяем предпринимателей, инвесторов и экспертов, создающих халяльный бизнес ради
        довольства Аллаха.
      </p>
      <p class="hero-index__desc">
        Среда для партнёрства, сделок и совместного роста в духе исламских ценностей.
      </p>
      <div class="hero-index__actions">
        <GmButton class="hero-index__button" variant="primary" to="#join">
          <span class="hero-index__button-text"> Присоединиться </span>
          <template #after>
            <ArrowRightIcon />
          </template>
        </GmButton>
        <GmButton class="hero-index__button" variant="secondary" to="#partner">
          <span class="hero-index__button-text"> Стать партнером </span>
          <template #after>
            <ArrowRightIcon />
          </template>
        </GmButton>
        <GmButton class="hero-index__button" variant="secondary" to="#more">
          <span class="hero-index__button-text"> Узнать больше </span>
          <template #after>
            <ArrowRightIcon />
          </template>
        </GmButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ArrowRightIcon from '~/components/Icons/ArrowRightIcon.vue'
import GmButton from '~/components/UI/GmButton.vue'
import UiTitle from '~/components/UI/UiTitle.vue'
</script>

<style lang="scss" scoped>
@use '~/assets/scss/vars' as *;

.hero-index {
  margin-top: 140px;
  position: relative;
  display: flex;
  align-items: center;
  padding: 2rem 1.5rem 4rem;
  overflow: hidden;
  max-width: 1038px;
}

.hero-index__content {
  position: relative;
  z-index: 1;
}

.hero-index__brand {
  margin-bottom: 0.5em;
}

.hero-index__title {
  margin-bottom: 8px;
}

.hero-index__lead {
  font-size: 35px;
  font-weight: 400;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.85);
  margin: 0 0 20px;
}

.hero-index__desc {
  font-size: 30px;
  font-weight: 400;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.75);
  margin: 0 0 2rem;
}

.hero-index__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.hero-index__button-text {
  font-weight: 500;
  font-size: 20px;
}
</style>
