<template>
  <section class="index-why-mgf">
    <div class="index-why-mgf__intro">
      <div class="index-why-mgf__intro-left">
        <UiTitle level="2" class="index-why-mgf__title">ПОЧЕМУ НУЖНО БЫТЬ С MGF?</UiTitle>
      </div>
      <div class="index-why-mgf__intro-divider" aria-hidden="true" />
      <div class="index-why-mgf__intro-right">
        <p class="index-why-mgf__text">
          Все сделки, проекты и партнёрства на платформе проходят шариатскую проверку. Каждый проект
          может быть одобрен исламскими экспертами, если в этом есть необходимость.
        </p>
      </div>
    </div>

    <div class="index-why-mgf__content">
      <div class="index-why-mgf__cards">
        <GmCard
          v-for="item in items"
          :key="item.title"
          variant="default"
          class="index-why-mgf__card"
        >
          <GroupIcon class="index-why-mgf__icon" />
          <h3 class="index-why-mgf__card-title">{{ item.title }}</h3>
          <span class="index-why-mgf__link">{{ item.details }}</span>
        </GmCard>
      </div>
      <GmCard variant="default" class="index-why-mgf__image-card">
        <NuxtPicture
          class="index-why-mgf__image"
          src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&q=80"
          alt=""
          loading="lazy"
        />
      </GmCard>
    </div>
  </section>
</template>

<script setup lang="ts">
import GmCard from '~/components/UI/GmCard.vue'
import UiTitle from '~/components/UI/UiTitle.vue'
import GroupIcon from '../Icons/GroupIcon.vue'

const items = [
  { title: 'Запрет риба', details: 'подробности об этом в кратце' },
  { title: 'Прозрачность и доверие', details: 'подробности' },
  { title: 'Совместное участие', details: 'подробности об этом в кратце' },
  { title: 'Этичное ведение бизнеса', details: 'подробности' },
  {
    title: 'Ответственность перед Аллахом и обществом',
    details: 'подробности об этом в кратце'
  }
]
</script>

<style lang="scss" scoped>
@use '~/assets/scss/vars' as *;
@use '~/assets/scss/mixins' as *;

.index-why-mgf {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.index-why-mgf__intro {
  display: grid;
  grid-template-columns: 277px auto 1fr;
  gap: 2rem;
  align-items: start;

  @include below($bp-tablet) {
    grid-template-columns: 1fr;
  }
}

.index-why-mgf__intro-divider {
  width: 5px;
  min-height: 80px;
  background: var(--default-border-color);

  @include below($bp-tablet) {
    display: none;
  }
}

.index-why-mgf__title {
  text-transform: uppercase;
  letter-spacing: 0.02em;
}

.index-why-mgf__text {
  font-family: var(--font-family);
  font-size: 1rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
}

.index-why-mgf__content {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 1.5rem;
  align-items: stretch;

  @include below($bp-desktop) {
    grid-template-columns: 1fr;
  }
}

.index-why-mgf__cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  .index-why-mgf__card:nth-child(5) {
    grid-column: 1 / -1;
  }

  @include below($bp-tablet) {
    grid-template-columns: 1fr;
  }
}

.index-why-mgf__card {
  display: flex;
  flex-direction: column;
  border-radius: var(--default-border-radius);
}

.index-why-mgf__icon {
  color: var(--main-color);
  margin-bottom: var(--gap-6);
}

.index-why-mgf__group-svg {
  width: 40px;
  height: 40px;
}

.index-why-mgf__card-title {
  font-family: var(--font-family);
  font-size: var(--title-h4-size);
  font-weight: 700;
  color: var(--main-color);
  margin: 0;
  line-height: 1;
}

.index-why-mgf__link {
  font-family: var(--font-family);
  font-size: 0.9375rem;
  color: rgba(255, 255, 255, 0.85);
  margin-top: auto;
}

.index-why-mgf__image-card {
  padding: 0;
  overflow: hidden;
  border-radius: var(--default-border-radius);
  min-height: 280px;
  height: 100%;
  display: flex;
  flex-direction: column;

  @include below($bp-desktop) {
    min-height: 240px;
  }
}

.index-why-mgf__image {
  display: block;
  flex: 1;
  min-height: 0;
  width: 100%;
  height: 100%;
  position: relative;

  :deep(img) {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
}
</style>
