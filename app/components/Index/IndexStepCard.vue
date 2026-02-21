<template>
  <GmCard variant="default" class="index-step-card">
    <div class="index-step-card__stage">{{ step }} этап</div>
    <h3 class="index-step-card__title">{{ title }}</h3>
    <div class="index-step-card__desc">{{ description }}</div>
  </GmCard>
</template>

<script setup lang="ts">
import GmCard from '~/components/UI/GmCard.vue'

withDefaults(
  defineProps<{
    step?: number
    title?: string
    description?: string
  }>(),
  { step: 1, title: '', description: '' }
)
</script>

<style lang="scss" scoped>
@use '~/assets/scss/vars' as *;

.index-step-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  &__stage {
    font-size: var(--title-h4-size);

    font-weight: 500;
    color: #fff;
    margin: 0;
  }

  &__title {
    font-size: var(--title-h3-size);

    font-weight: 700;
    color: var(--main-color);
    margin: 0;
  }

  &__desc {
    font-size: var(--title-h6-size);
    line-height: 1.45;
    color: rgba(255, 255, 255, 0.9);
    margin: 0;
  }
}
</style>
