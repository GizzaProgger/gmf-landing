<template>
  <div class="index-opportunities">
    <section class="index-opportunities__intro">
      <div class="index-opportunities__intro-left">
        <UiTitle level="2">Новые возможности для нового мира MGF</UiTitle>
      </div>
      <div class="index-opportunities__intro-divider" aria-hidden="true" />
      <div class="index-opportunities__intro-right">
        <UiTitle level="3" class="index-opportunities__intro-title">
          Создаём экосистему, объединяющую предпринимателей всего мира ради совместного
          экономического и духовного роста
        </UiTitle>
        <p class="index-opportunities__text">
          Muslim Global Finance позволит собрать в одном месте представителей различных отраслей,
          которые сотрудничают с приоритетом на развитие международных отношений и обмен опытом
          между странами.
        </p>
        <p class="index-opportunities__text">
          Целью которой является — создание глобальной площадки для сотрудничества представителей
          делового сообщества, официальных лиц и международных организаций. Поиск новых возможностей
          для расширения бизнеса и новых рынков сбыта с использованием общих ресурсов и опыта
          международных компаний. Продвижение передовых практик в сфере экономики, IT, финансовых
          услуг.
        </p>
      </div>
    </section>

    <section class="index-opportunities__stats">
      <UiTitle level="3" class="index-opportunities__stats-heading">
        Стратегические показатели MGF
      </UiTitle>
      <p class="index-opportunities__stats-subtitle">
        Основные цифры, которые демонстрируют реальное влияние, рост и ценность нашего сообщества.
      </p>
      <div class="index-opportunities__cards">
        <GmStatCard
          variant="gradient"
          indicator="+12% за последний месяц"
          value="$ 278 000 000"
          label="Совокупный капитал экосистемы MGF"
        />
        <GmStatCard variant="default" indicator="8%" value="20+" label="стран международной сети" />
        <GmStatCard
          variant="default"
          indicator="8%"
          value="120+"
          label="действующих предпринимателей"
        />
        <GmStatCard
          variant="default"
          indicator="8%"
          value="350+"
          label="успешных партнёрств между участниками MGF"
        />
      </div>

      <GmCard variant="gradient" class="index-opportunities__project-card">
        <span class="index-opportunities__project-indicator">
          <ArrowUpIcon />
          +12% за последний месяц
        </span>
        <UiTitle level="2" class="index-opportunities__project-title">
          Главный проект «Фонд поддержки должников»
        </UiTitle>
        <p class="index-opportunities__project-desc">
          Система помощи мусульманам, оказавшимся в финансовой трудности — ради довольства Аллаха и
          укрепления уммы.
        </p>
        <p class="index-opportunities__project-value">Закрыто более $ 8 000 000 задолжностей</p>
      </GmCard>
      <GmButton to="#project" variant="primary" class="index-opportunities__cta">
        Подробнее о проекте
        <template #after>
          <ArrowRightIcon />
        </template>
      </GmButton>
    </section>
  </div>
</template>

<script setup lang="ts">
import ArrowRightIcon from '~/components/Icons/ArrowRightIcon.vue'
import ArrowUpIcon from '~/components/Icons/ArrowUpIcon.vue'
import GmButton from '~/components/UI/GmButton.vue'
import GmCard from '~/components/UI/GmCard.vue'
import GmStatCard from '~/components/UI/GmStatCard.vue'
import UiTitle from '~/components/UI/UiTitle.vue'
</script>

<style lang="scss" scoped>
@use '~/assets/scss/vars' as *;
@use '~/assets/scss/mixins' as *;

.index-opportunities {
  display: flex;
  flex-direction: column;
  gap: 68px;

  &__intro {
    display: grid;
    grid-template-columns: 277px auto 1fr;
    gap: 2rem;
    align-items: center;

    @include below($bp-tablet) {
      grid-template-columns: 1fr;
    }
  }

  &__intro-divider {
    --line-margin-top: 4rem;

    width: 5px;
    min-height: 120px;
    margin-top: calc(var(--line-margin-top) / 2);
    height: calc(100% - var(--line-margin-top));
    background: var(--default-border-color);

    @include below($bp-tablet) {
      display: none;
    }
  }

  &__intro-title {
    margin-bottom: 1rem;
  }

  &__text {
    font-family: var(--font-family);
    font-size: 18px;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.9);
    margin: 0 0 18px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__stats {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  &__stats-heading {
    margin-bottom: 0.5rem;
  }

  &__stats-subtitle {
    font-family: var(--font-family);
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.8);
    margin: 0 0 2rem;
    max-width: 560px;
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    width: 100%;
    margin-bottom: 50px;

    @include below($bp-desktop) {
      grid-template-columns: repeat(2, 1fr);
    }

    @include below($bp-tablet) {
      grid-template-columns: 1fr;
    }
  }

  &__project {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  &__project-card {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 2.5rem;
  }

  &__project-indicator {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.8);
  }

  &__project-title {
    margin: 0;
  }

  &__project-desc {
    font-family: var(--font-family);
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.9);
    margin: 0;
  }

  &__project-value {
    font-size: var(--title-h2-size);
    font-weight: 700;
    color: #fff;
    margin: 0.5rem 0 0;
  }

  &__cta {
    align-self: flex-start;
  }
}
</style>
