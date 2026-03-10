<template>
  <section class="index-development-plans">
    <p class="index-development-plans__title">Развитие, планы и проекты</p>

    <div class="index-development-plans__progress-list">
      <div
        v-for="item in progressItems"
        :key="item.text"
        class="index-development-plans__progress-row"
      >
        <div class="index-development-plans__progress-header">
          <p class="index-development-plans__progress-text">{{ item.text }}</p>
          <span class="index-development-plans__progress-percent">{{ item.percent }}%</span>
        </div>
        <div class="index-development-plans__progress-bar-wrap">
          <div
            class="index-development-plans__progress-bar-fill"
            :style="{ width: `${item.percent}%` }"
          />
        </div>
      </div>
    </div>

    <div class="index-development-plans__featured">
      <div class="index-development-plans__featured-image-wrap">
        <NuxtPicture
          src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600&q=80"
          alt=""
          loading="lazy"
          class="index-development-plans__featured-image"
        />
      </div>
      <div class="index-development-plans__featured-content">
        <p class="index-development-plans__featured-status">Закрытый проект</p>
        <p class="index-development-plans__featured-title">
          Открытие и полное сопровождение компании в Египте
        </p>
        <p class="index-development-plans__featured-desc">
          Мы помогли запустить и структурировать бизнес в Египте: <br> от регистрации компании и
          получения необходимых разрешений <br>— до налаживания операционных процессов,
          шариат- <br>консультирования и выхода на локальный рынок. Проект включал <br>юридическое
          сопровождение, подбор специалистов и организацию <br>бизнес-инфраструктуры «под ключ».
        </p>
        <GmButton to="#projects" variant="primary" class="index-development-plans__cta">
          Подробнее о проектах MGF
          <template #after>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              class="index-development-plans__cta-arrow"
            >
              <path
                d="M0.901574 8.14581C0.96295 8.15665 1.02506 8.16165 1.08721 8.16077L11.6694 8.16077L11.4387 8.27758C11.2131 8.39376 11.0079 8.55188 10.8323 8.74478L7.86477 11.9743C7.47394 12.3804 7.40827 13.0335 7.70915 13.5219C8.05933 14.0424 8.73088 14.1554 9.20914 13.7743C9.24778 13.7435 9.2845 13.7099 9.31902 13.6738L14.6852 7.83373C15.1046 7.37784 15.105 6.63831 14.6861 6.18191L9.31902 0.340947C8.89931 -0.114542 8.21978 -0.113519 7.80122 0.343245C7.76828 0.379198 7.73753 0.417449 7.70915 0.457746C7.40828 0.946157 7.47394 1.59933 7.86477 2.00536L10.8269 5.24075C10.9844 5.4123 11.1654 5.55615 11.3635 5.66707L11.6855 5.82475L1.14627 5.82475C0.598016 5.8026 0.116999 6.21939 0.0140015 6.80588C-0.0808805 7.44263 0.316489 8.04251 0.901574 8.14581Z"
                fill="white"
              />
            </svg>
          </template>
        </GmButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import GmButton from '~/components/UI/GmButton.vue'

const progressItems = [
  { text: '1. Запуск платформы', percent: 100 },
  { text: '2. Формирование шариатского совета', percent: 50 },
  {
    text: '3. Подключение стран-участников — 7 стран, идёт расширение',
    percent: 75
  },
  { text: '4. Запуск программы поддержки бизнесов', percent: 20 },
  { text: '5. AI-интеграция для проверки сделок', percent: 80 },
  { text: '6. Международные офисы', percent: 0 }
]
</script>

<style lang="scss" scoped>
@use '~/assets/scss/vars' as *;
@use '~/assets/scss/mixins' as *;

$gold-gradient: linear-gradient(38deg, #cc8a11 -0.96%, #f9d161 50.37%, #dea530 96.56%);
$silver-gradient: linear-gradient(
  91deg,
  rgba(255, 255, 255, 0.85) 8.27%,
  #fff 8.27%,
  #b1b1b1 48.13%,
  #fff 86.35%
);

.index-development-plans {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.index-development-plans__title {
  color: #fff;
  text-align: center;
  font-family: Sora, var(--font-family);
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 123.5%;
  margin: 0 0 48px;

  @include below($bp-tablet) {
    font-size: 28px;
    margin-bottom: 2rem;
  }

  @include below($bp-mobile) {
    font-size: 24px;
  }
}

.index-development-plans__progress-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 76px;
}

.index-development-plans__progress-row {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.index-development-plans__progress-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.index-development-plans__progress-text {
  color: #fff;
  font-family: Sora, var(--font-family);
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  margin: 0;

  @include below($bp-tablet) {
    font-size: 20px;
  }

  @include below($bp-mobile) {
    font-size: 16px;
  }
}

.index-development-plans__progress-bar-wrap {
  width: 100%;
  height: 34px;
  border-radius: 17px;
  border: 3px solid #cc8a11;
  background: rgba(255, 255, 255, 0.08);
  overflow: hidden;
}

.index-development-plans__progress-bar-fill {
  height: 100%;
  background: $gold-gradient;
  border-radius: 12px;
  transition: width 0.3s ease;
}

.index-development-plans__progress-percent {
  flex-shrink: 0;
  color: transparent;
  background: $silver-gradient;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: Sora, var(--font-family);
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;

  @include below($bp-mobile) {
    font-size: 28px;
  }
}

.index-development-plans__featured {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 2rem;
  align-items: start;

  @include below($bp-desktop) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  @include below($bp-mobile) {
    gap: 1rem;
  }
}

.index-development-plans__featured-image-wrap {
  width: 440px;
  max-width: 100%;
  height: 425px;
  flex-shrink: 0;

  @include below($bp-mobile) {
    height: 280px;
  }
  border-radius: 17px;
  background: $gold-gradient;
  padding: 4px;
  overflow: hidden;
}

.index-development-plans__featured-image {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 13px;
  background: var(--body-background);

  :deep(img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 13px;
  }
}

.index-development-plans__featured-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.index-development-plans__featured-status {
  color: #aeaeae;
  font-family: Sora, var(--font-family);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 123.5%;
  margin: 0;
}

.index-development-plans__featured-title {
  color: #fff;
  font-family: Sora, var(--font-family);
  font-size: 36px;

  @include below($bp-tablet) {
    font-size: 28px;
  }

  @include below($bp-mobile) {
    font-size: 22px;
  }
  font-style: normal;
  font-weight: 700;
  line-height: 123.5%;
  margin: 0;
}

.index-development-plans__featured-desc {
  color: #fff;
  font-family: Sora, var(--font-family);
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
  margin: 0px 0 40px;
}

.index-development-plans__cta {
  :deep(.gm-button__text) {
    color: #101015;
    font-family: Sora, var(--font-family);
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 101.5%;
  }
}

.index-development-plans__cta-arrow {
  display: block;
  width: 15px;
  height: 14px;
}
</style>
