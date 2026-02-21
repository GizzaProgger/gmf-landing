<script setup lang="ts">
import { resolveComponent } from 'vue'

withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary'
    disabled?: boolean
    /** Показывать иконку стрелки в круге справа */
    icon?: boolean
    type?: 'button' | 'submit' | 'reset'
    /** Если задано — рендерится как NuxtLink */
    to?: string
  }>(),
  {
    variant: 'primary',
    disabled: false,
    icon: true,
    type: 'button',
    to: undefined
  }
)
</script>

<template>
  <component
    :is="to ? resolveComponent('NuxtLink') : 'button'"
    :to="to"
    :type="to ? undefined : type"
    class="gm-button"
    :class="[`gm-button--${variant}`, { 'gm-button--disabled': disabled }]"
    :disabled="to ? undefined : disabled"
  >
    <span class="gm-button__text">
      <slot />
    </span>
    <span v-if="icon" class="gm-button__icon" aria-hidden="true">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 6L16 12L10 18"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </span>
  </component>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/vars' as *;

.gm-button {
  --btn-radius: 9999px;
  --btn-padding-x: 1.5rem;
  --btn-padding-y: 0.875rem;
  --btn-gap: 0.75rem;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--btn-gap);
  padding: var(--btn-padding-y) var(--btn-padding-x);
  border-radius: var(--btn-radius);
  border: var(--default-border-width) var(--default-border-style) transparent;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.25;
  cursor: pointer;
  transition:
    box-shadow 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease;

  &__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    flex-shrink: 0;
    border-radius: 50%;

    svg {
      width: 1rem;
      height: 1rem;
    }
  }

  &__text {
    color: var(--main-text-color);
  }

  // Primary: золотой градиент, тёмный текст, чёрный круг + белая стрелка
  &--primary {
    background: var(--main-background);
    color: #1a1a1a;

    .gm-button__icon {
      background: #000;
      color: #fff;
    }

    &:hover:not(.gm-button--disabled) {
      box-shadow:
        0 0 20px rgba(232, 196, 99, 0.5),
        0 0 40px rgba(232, 196, 99, 0.25);
    }
  }

  // Secondary: тёмный фон, золотая обводка, белый текст, белый круг + чёрная стрелка
  &--secondary {
    background: var(--body-background);
    color: #fff;
    border-color: var(--default-border-color);

    .gm-button__icon {
      background: #fff;
      color: #000;
    }

    &:hover:not(.gm-button--disabled) {
      border-color: var(--main-color);
      box-shadow: 0 0 0 1px var(--main-color);
    }
  }

  &--disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}
</style>
