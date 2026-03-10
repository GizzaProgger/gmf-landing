<template>
  <section class="index-news-events">
    <p class="index-news-events__title">Новости, события, СМИ</p>
    <div class="index-news-events__grid">
      <div v-for="event in events" :key="event.id" class="index-news-events__item">
        <div class="index-news-events__card" />
        <p class="index-news-events__text" v-html="event.text" />
        <NuxtLink :to="event.to" class="index-news-events__button">
          Подробности события
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const events = [
  {
    id: 1,
    text: 'Карточка какого то события<br>произошедшего или планируемого<br>и кнопка для регистрации на него',
    to: '#event-1'
  },
  {
    id: 2,
    text: 'Карточка какого то события<br>произошедшего или планируемого<br>и кнопка для регистрации на него',
    to: '#event-2'
  },
  {
    id: 3,
    text: 'Карточка какого то события<br>произошедшего или планируемого<br>и кнопка для регистрации на него',
    to: '#event-3'
  }
]
</script>

<style lang="scss" scoped>
@use '~/assets/scss/vars' as *;
@use '~/assets/scss/mixins' as *;

.index-news-events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.index-news-events__title {
  color: #fff;
  text-align: center;
  font-family: Sora, var(--font-family);
  font-size: 36px;
  font-weight: 700;
  line-height: 123.5%;
  margin: 0 0 74px;

  @include below($bp-tablet) {
    font-size: 28px;
    margin-bottom: 2rem;
  }

  @include below($bp-mobile) {
    font-size: 24px;
    margin-bottom: 1.5rem;
  }
}

.index-news-events__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  width: 100%;

  @include below($bp-desktop) {
    grid-template-columns: repeat(2, 1fr);
  }

  @include below($bp-tablet) {
    grid-template-columns: 1fr;
  }
}

.index-news-events__item {
  display: flex;
  flex-direction: column;
  align-items: center;

  @include below($bp-desktop) {
    justify-self: center;
  }
}

.index-news-events__card {
  width: 382px;
  max-width: 100%;
  height: 425px;

  @include below($bp-mobile) {
    height: 320px;
  }
  border-radius: 24px;
  border: 2px solid #cc8a11;
  background: var(--secondary-background);
  flex-shrink: 0;
  box-sizing: border-box;
}

.index-news-events__text {
  width: 382px;
  max-width: 100%;
  color: #fff;
  text-align: center;
  font-family: Sora, var(--font-family);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 143%;
  margin: 20px 0 0;
  padding: 0;
}

.index-news-events__button {
  display: flex;
  width: 382px;
  max-width: 100%;
  min-width: 0;
  height: 40px;
  margin: 20px 0 0;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: Sora, var(--font-family);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.56px;
  text-transform: uppercase;
  text-decoration: none;
  border: 2px solid #cc8a11;
  border-radius: 12px;
  background: transparent;
  transition: background 0.2s ease, border-color 0.2s ease;

  &:hover {
    background: rgba(204, 138, 17, 0.2);
  }
}
</style>
