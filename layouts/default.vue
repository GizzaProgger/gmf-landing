<template>
  <div>
    <nav>
      <NuxtLink to="/">Главная</NuxtLink>
      <NuxtLink to="/about">О нас</NuxtLink>
      <NuxtLink to="/contact">Контакты</NuxtLink>
      <NuxtLink to="/page">Page</NuxtLink>
    </nav>
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup>
</script>

<style scoped>
nav {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid #eee;
}
nav a {
  color: inherit;
  text-decoration: none;
}
nav a.router-link-active {
  font-weight: bold;
}
main {
  padding: 1rem;
}
</style>
