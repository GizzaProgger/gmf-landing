<template>
  <section class="index-footer-quote">
    <p
      class="index-footer-quote__text"
      v-html="text"
    />
  </section>
</template>

<script setup lang="ts">
const text =
  'Всё, что мы делаем — ради довольства Аллаха.<br/>Мы стремимся объединить мусульман из разных стран, поддержать братьев, помочь им<br />развиваться и открыть новые пути.<br />Мы не конкурируем — мы сотрудничаем.<br />Мы не просто строим бизнес — мы строим умму.'
</script>

<style lang="scss" scoped>
@use '~/assets/scss/vars' as *;
@use '~/assets/scss/mixins' as *;

.index-footer-quote {
  display: flex;
  justify-content: center;
  width: 100%;
}

.index-footer-quote__text {
  color: #fff;
  text-align: center;
  font-family: Sora, var(--font-family);
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  margin: 0;
  padding: 0 1rem;

  @include below($bp-tablet) {
    font-size: 20px;
  }

  @include below($bp-mobile) {
    font-size: 18px;
  }
}
</style>
