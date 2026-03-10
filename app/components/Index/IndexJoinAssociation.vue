<template>
  <section class="index-join-association">
    <p class="index-join-association__title">
      Хотите стать частью бизнесс ассоциации <br>
      <span class="index-join-association__title-accent">Muslim Global Finance ?</span>
    </p>
    <p class="index-join-association__subtitle">
      Отправьте заявку, и мы свяжемся с Вами в течении рабочего дня
    </p>
    <div class="index-join-association__buttons-row">
      <NuxtLink to="#apply" class="index-join-association__button">
        <span class="index-join-association__button-text">Оставить заявку на вступление</span>
        <ArrowCircleIcon class="index-join-association__button-icon" />
      </NuxtLink>
      <NuxtLink to="#membership" class="index-join-association__button">
        <span class="index-join-association__button-text">Подробнее о членстве в MGF</span>
        <ArrowCircleIcon class="index-join-association__button-icon" />
      </NuxtLink>
    </div>
    <NuxtLink to="#bonus" class="index-join-association__button index-join-association__button--full">
      <span class="index-join-association__button-text">
        Бонус — только для участников основного бизнес пакета
      </span>
      <ArrowCircleIcon class="index-join-association__button-icon" />
    </NuxtLink>
  </section>
</template>

<script setup lang="ts">
import ArrowCircleIcon from '~/components/Icons/ArrowCircleIcon.vue'
</script>

<style lang="scss" scoped>
@use '~/assets/scss/vars' as *;
@use '~/assets/scss/mixins' as *;

.index-join-association {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
}

.index-join-association__title {
  color: #fff;
  text-align: center;
  font-family: Sora, var(--font-family);
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 123.5%;
  margin: 0 0 30px;

  @include below($bp-tablet) {
    font-size: 28px;
  }

  @include below($bp-mobile) {
    font-size: 22px;
  }

  &-accent {
    background: linear-gradient(38deg, #cc8a11 -0.96%, #f9d161 50.37%, #dea530 96.56%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

.index-join-association__subtitle {
  color: #fff;
  text-align: center;
  font-family: Sora, var(--font-family);
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
  margin: 0 0 44px;
}

.index-join-association__buttons-row {
  display: flex;
  gap: 26px;
  width: 100%;
  margin-bottom: 26px;

  @include below($bp-tablet) {
    flex-direction: column;
    gap: 1rem;
  }
}

.index-join-association__button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 16px 34px 16px 32px;
  flex: 1;
  min-width: 0;
  box-sizing: border-box;
  border: 1px solid #cc8a11;
  border-radius: 9999px;
  background: var(--secondary-background);
  text-decoration: none;
  transition: background 0.2s ease, border-color 0.2s ease;

  &:hover {
    border-color: var(--main-color);
    background: rgba(204, 138, 17, 0.1);
  }

  &--full {
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    align-self: stretch;
  }
}

.index-join-association__button-text {
  color: #fff;
  font-family: Sora, var(--font-family);
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 101.5%;
}

.index-join-association__button-icon {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
}
</style>
