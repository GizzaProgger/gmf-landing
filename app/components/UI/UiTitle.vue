<template>
  <component
    :is="tag"
    class="ui-title"
    :class="[`ui-title--h${levelNum}`, { 'ui-title--brand': variant === 'brand' }]"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    level?: 1 | 2 | 3 | 4 | 5 | 6 | string
    variant?: 'default' | 'brand'
  }>(),
  { level: 1, variant: 'default' }
)

const levelNum = computed(() => {
  const n = Number(props.level)
  return (n >= 1 && n <= 6 ? n : 1) as 1 | 2 | 3 | 4 | 5 | 6
})

const tag = computed(() => `h${levelNum.value}`)
</script>

<style lang="scss" scoped>
@use '~/assets/scss/vars' as *;

.ui-title {
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
  color: #fff;

  &--h1 {
    font-size: var(--title-h1-size);
  }

  &--h2 {
    font-size: var(--title-h2-size);
  }

  &--h3 {
    font-size: var(--title-h3-size);
  }

  &--h4 {
    font-size: var(--title-h4-size);
  }

  &--h5 {
    font-size: var(--title-h5-size);
  }

  &--h6 {
    font-size: var(--title-h6-size);
  }

  &--brand {
    font-size: var(--title-brand-size);
    background: var(--main-background);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
}
</style>
