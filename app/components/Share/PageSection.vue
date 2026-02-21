<template>
  <section class="page-section">
    <slot name="header" />
    <slot />
  </section>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
@use '~/assets/scss/vars' as *;

.page-section {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}
</style>
