<template>
  <div class="layout">
    <AppHeader class="app-header" />
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@use '~/assets/scss/vars' as *;

.layout {
  overflow-x: hidden;
}

.app-header {
  margin-top: 67px;

  @include below($bp-desktop) {
    margin-top: 24px;
  }
}
</style>
