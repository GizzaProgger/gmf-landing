<template>
  <div>
    <AppHeader class="app-header" />
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup></script>

<style scoped>
.app-header {
  margin-top: 67px;
}
</style>
