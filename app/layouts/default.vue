<template>
  <div class="layout">
    <div class="layout__bg" aria-hidden="true" />
    <AppHeader class="app-header" />
    <main>
      <slot />
    </main>
    <div class="layout__footer">
      <GmContainer>
        <AppFooter />
      </GmContainer>
    </div>
  </div>
</template>

<script setup>
import GmContainer from '~/components/UI/GmContainer.vue'
import AppFooter from '~/components/AppFooter.vue'
</script>

<style lang="scss" scoped>
@use '~/assets/scss/vars' as *;

.layout {
  position: relative;
  overflow-x: hidden;
}

.layout__bg {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 65%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  background-color: var(--body-background);
  background-image: url('/assets/imgs/bg.png');
  background-size: cover;
  background-position: right top;
  background-repeat: no-repeat;
  background-blend-mode: exclusion;
}

.app-header,
main {
  position: relative;
  z-index: 1;
}

.app-header {
  margin-top: 67px;

  @include below($bp-desktop) {
    margin-top: 24px;
  }
}

.layout__footer {
  position: relative;
  z-index: 1;
}
</style>
