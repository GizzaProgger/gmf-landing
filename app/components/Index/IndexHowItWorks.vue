<template>
  <section class="index-how-it-works">
    <UiTitle :level="2" class="index-how-it-works__title">Как это работает</UiTitle>
    <div class="index-how-it-works__grid">
      <IndexStepCard
        :step="1"
        title="Регистрация"
        description="Создаёте личный кабинет, подтверждаете свою личность. Доступ открывается сразу после регистрации."
      />
      <IndexStepCard
        :step="2"
        title="Заполнение анкеты"
        description="Заполняете свои данные. Система формирует ваш подробный профессиональный профиль."
      />
      <IndexStepCard
        :step="3"
        title="Верификация и проверка"
        description="Проверяем данные, чтобы убедиться, что деятельность участника соответствует этическим и халяль нормам."
      />
      <IndexStepCard
        :step="4"
        title="Получаете доступ к платформе"
        description="Открывается доступ к полезным людям, проектам, партнёрам, кругам общения, событиям и возможностям внутри сети."
      />
      <IndexStepCard
        :step="5"
        title="Публикуете проект или запрос"
        description="Можете: найти партнёра, инвестора, объединиться в проект, получить консультацию, предложить услуги и др."
      />
      <IndexStepCard
        :step="6"
        title="Получаете поддержку и растёте"
        description="Предоставляем: менторство, консультации, юр. поддержку, доступ к международным партнёрам, выход на рынок других стран."
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import IndexStepCard from '~/components/Index/IndexStepCard.vue'
import UiTitle from '~/components/UI/UiTitle.vue'
</script>

<style lang="scss" scoped>
@use '~/assets/scss/vars' as *;
@use '~/assets/scss/mixins' as *;

.index-how-it-works {
  &__title {
    margin-bottom: 2rem;
    text-transform: uppercase;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;

    @include below($bp-desktop) {
      grid-template-columns: repeat(2, 1fr);
    }

    @include below($bp-tablet) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
