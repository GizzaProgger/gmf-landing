<template>
  <section class="index-programs-support">
    <p class="index-programs-support__title">Программы и поддержка</p>
    <p class="index-programs-support__subtitle">
      Помощь и развитие для каждого участника<br />
      Мы не просто объединяем мусульман — мы помогаем расти.
    </p>
    <div class="index-programs-support__grid">
      <div
        v-for="item in items"
        :key="item.text"
        class="index-programs-support__card"
      >
        <div class="index-programs-support__icon">
          <CheckIcon class="index-programs-support__check" />
        </div>
        <p class="index-programs-support__text" v-html="item.text"></p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CheckIcon from '~/components/Icons/CheckIcon.vue'

const items = [
  { text: 'Менторство и обучение начинающих предпринимателей' },
  { text: 'Поддержка стартапов <br>и социальных инициатив' },
  { text: 'Консультации по бизнесу,маркетингу<br> и шариатскому комплаенсу' },
  { text: 'Помощь в регистрации компаний <br> и юридических вопросах' },
  { text: 'Возможность участия <br> в акселерационной программе' }
]
</script>

<style lang="scss" scoped>
@use '~/assets/scss/vars' as *;
@use '~/assets/scss/mixins' as *;

$gold-gradient: linear-gradient(38deg, #cc8a11 -0.96%, #f9d161 50.37%, #dea530 96.56%);

.index-programs-support {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0;
}

.index-programs-support__title {
  color: #fff;
  text-align: center;
  font-family: Sora, var(--font-family);
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 123.5%;
  margin: 0;

  @include below($bp-tablet) {
    font-size: 28px;
  }

  @include below($bp-mobile) {
    font-size: 24px;
  }
}

.index-programs-support__subtitle {
  color: #fff;
  text-align: center;
  font-family: Sora, var(--font-family);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
  margin: 16px 0 89px;
}

.index-programs-support__grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 88px 1.5rem;
  width: 100%;
  max-width: 1200px;

  @include below($bp-tablet) {
    gap: 32px 1rem;
  }

  @include below($bp-mobile) {
    gap: 32px;
  }
}

.index-programs-support__card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 32px 14px 32px;
  gap: 0;
  border-radius: 20px;
  border: 1px solid #cc8a11;
  background: #212121;
  box-shadow: 0 15px 45px 0 #000;
  width: 384px;
  max-width: 100%;
  height: 180px;
  box-sizing: border-box;
  overflow: visible;

  @include below($bp-desktop) {
    width: min(384px, 100%);
  }

  @include below($bp-mobile) {
    padding: 0 1.5rem 14px;
    height: auto;
    min-height: 180px;
  }
}

.index-programs-support__icon {
  display: flex;
  width: 80.262px;
  height: 80.262px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 50%;
  background: $gold-gradient;
  margin-top: -40.131px;
  margin-bottom: 1rem;
}

.index-programs-support__check {
  width: 47px;
  height: 47px;
  flex-shrink: 0;
}

.index-programs-support__text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: auto;
  width: 100%;
  color: #fff;
  text-align: center;
  font-family: Sora, var(--font-family);
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 25.5px;
  margin:1.5rem 0 0 0;
  font-feature-settings: 'liga' off, 'clig' off;
}
</style>
