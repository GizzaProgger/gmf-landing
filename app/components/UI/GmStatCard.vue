<template>
  <GmCard :variant="variant" class="gm-stat-card" :class="`gm-stat-card--${variant}`">
    <span class="gm-stat-card__indicator">
      <svg
        width="16"
        height="13"
        viewBox="0 0 16 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 0L16 13H0L8 0Z"
          :fill="variant === 'gradient' ? 'black' : 'var(--success-color)'"
          :fill-opacity="variant === 'gradient' ? '0.58' : '1'"
        />
      </svg>

      {{ indicator }}
    </span>
    <span class="gm-stat-card__value">{{ value }}</span>
    <span class="gm-stat-card__label">{{ label }}</span>
  </GmCard>
</template>

<script setup lang="ts">
import GmCard from '~/components/UI/GmCard.vue'

withDefaults(
  defineProps<{
    indicator?: string
    value?: string
    label?: string
    variant?: 'default' | 'gradient'
  }>(),
  {
    indicator: '',
    value: '',
    label: '',
    variant: 'default'
  }
)
</script>

<style lang="scss" scoped>
@use '~/assets/scss/vars' as *;

.gm-stat-card {
  display: flex;
  flex-direction: column;

  &--default {
    background: var(--body-background);
  }

  &__indicator {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    font-size: 14px;
    color: var(--success-color);
    margin-bottom: 4px;
  }

  &--gradient {
    .gm-stat-card__indicator {
      color: rgba(0, 0, 0, 0.58);
    }
    .gm-stat-card__value {
      color: #000;
    }
    .gm-stat-card__label {
      color: rgba(0, 0, 0, 0.85);
    }
  }

  &__value {
    font-size: var(--title-h2-size);
    font-weight: 700;
    color: #fff;
    text-align: left;
  }

  &__label {
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.85);
    line-height: 1.3;
    text-align: left;
  }
}
</style>
