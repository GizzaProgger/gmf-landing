<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'primary' | 'primary-inverted' | 'secondary'
    size?: 'default' | 'mini'
    disabled?: boolean
    type?: 'button' | 'submit' | 'reset'
    /** Если задано — рендерится как NuxtLink */
    to?: string
  }>(),
  {
    variant: 'primary',
    size: 'default',
    disabled: false,
    type: 'button',
    to: undefined
  }
)
</script>

<template>
  <NuxtLink
    v-if="to"
    :to="to"
    class="gm-button"
    :class="[`gm-button--${variant}`, `gm-button--${size}`, { 'gm-button--disabled': disabled }]"
  >
    <span v-if="$slots.before" class="gm-button__icon" aria-hidden="true">
      <slot name="before" />
    </span>
    <span class="gm-button__text">
      <slot />
    </span>
    <span v-if="$slots.after" class="gm-button__icon" aria-hidden="true">
      <slot name="after" />
    </span>
  </NuxtLink>
  <button
    v-else
    :type="type"
    class="gm-button"
    :class="[`gm-button--${variant}`, `gm-button--${size}`, { 'gm-button--disabled': disabled }]"
    :disabled="disabled"
  >
    <span v-if="$slots.before" class="gm-button__icon" aria-hidden="true">
      <slot name="before" />
    </span>
    <span class="gm-button__text">
      <slot />
    </span>
    <span v-if="$slots.after" class="gm-button__icon" aria-hidden="true">
      <slot name="after" />
    </span>
  </button>
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
  text-decoration: none;
  transition:
    box-shadow 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease,
    transform 0.2s ease;

  &:focus-visible {
    outline: 2px solid var(--main-color);
    outline-offset: 2px;
  }

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
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 500;
  }

  // Primary: золотой градиент, тёмный текст, чёрный круг + белая стрелка
  &--primary {
    background: var(--main-background);
    color: #1a1a1a;

    .gm-button__icon {
      background: #000;
      color: #fff;
    }

    &:not(.gm-button--disabled) {
      transform: translateY(-1px);
    }
  }

  // Primary на тёмном фоне: тот же градиент, белый текст, полупрозрачный круг у иконки
  &--primary-inverted {
    background: var(--main-background);
    color: #fff;

    .gm-button__icon {
      background: rgba(255, 255, 255, 0.25);
      color: #fff;
    }

    &:hover:not(.gm-button--disabled) {
      box-shadow:
        0 4px 20px rgba(204, 138, 17, 0.45),
        0 0 24px rgba(232, 196, 99, 0.2);
      transform: translateY(-1px);
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

  &--mini {
    --btn-padding-x: 16px;
    --btn-padding-y: 4px;
    --btn-gap: 0.5rem;
    font-size: 0.875rem;

    .gm-button__icon {
      width: 1.5rem;
      height: 1.5rem;

      svg {
        width: 0.75rem;
        height: 0.75rem;
      }
    }
  }

  &--disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}
</style>
