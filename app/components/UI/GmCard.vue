<template>
  <div class="gm-card" :class="`gm-card--${variant}`">
    <slot />
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'default' | 'gradient'
  }>(),
  { variant: 'default' }
)
</script>

<style scoped lang="scss">
@use '~/assets/scss/vars' as *;

.gm-card {
  border-radius: var(--default-border-radius);
  padding: 32px 24px;

  &--default {
    background: var(--secondary-background);
    border: 1px solid var(--default-border-color);
  }

  &--gradient {
    background: var(--main-background);
    border: none;
    color: #fff;
  }
}
</style>