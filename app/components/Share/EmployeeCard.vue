<template>
  <GmCard variant="default" class="employee-card">
    <div class="employee-card__avatar" aria-hidden="true">
      <slot name="avatar">
        <GroupIcon class="employee-card__avatar-icon" />
      </slot>
    </div>
    <h3 class="employee-card__name">{{ name }}</h3>
    <p class="employee-card__role">{{ role }}</p>
    <div class="employee-card__rating" aria-label="Рейтинг: {{ rating }} из 5">
      <span
        v-for="i in 5"
        :key="i"
        class="employee-card__star"
        :class="{ 'employee-card__star--filled': i <= rating }"
      >
        <StarIcon />
      </span>
    </div>
    <p class="employee-card__desc">{{ description }}</p>
    <GmButton variant="secondary" class="employee-card__cta" :to="ctaTo">
      {{ ctaText }}
    </GmButton>
  </GmCard>
</template>

<script setup lang="ts">
import GroupIcon from '~/components/Icons/GroupIcon.vue'
import GmButton from '~/components/UI/GmButton.vue'
import GmCard from '~/components/UI/GmCard.vue'

const StarIcon = {
  template: `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M8 1l1.8 3.64L14 5.27l-2.5 2.45.59 3.44L8 9.14 3.91 11.16l.59-3.44L2 5.27l4.2-.63L8 1z"/>
    </svg>
  `
}

withDefaults(
  defineProps<{
    name?: string
    role?: string
    rating?: number
    description?: string
    ctaText?: string
    ctaTo?: string
  }>(),
  {
    name: '',
    role: '',
    rating: 0,
    description: '',
    ctaText: 'ПОЛУЧИТЬ КОНТАКТЫ',
    ctaTo: '#'
  }
)
</script>

<style lang="scss" scoped>
@use '~/assets/scss/vars' as *;

.employee-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.75rem;
}

.employee-card__avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
}

.employee-card__avatar-icon {
  width: 80px;
  height: 80px;
}

.employee-card__name {
  font-size: var(--title-h4-size);
  font-weight: 700;
  color: rgba(255, 255, 255, 0.95);
  margin: 0;
  line-height: 1.2;
}

.employee-card__role {
  font-size: 0.875rem;
  color: var(--main-color);
  margin: 0;
}

.employee-card__rating {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
}

.employee-card__star {
  color: rgba(255, 255, 255, 0.25);

  &--filled {
    color: var(--main-color);
  }
}

.employee-card__desc {
  font-family: var(--font-family);
  font-size: 0.875rem;
  line-height: 1.45;
  color: rgba(255, 255, 255, 0.85);
  margin: 0;
  flex: 1;
}

.employee-card__cta {
  margin-top: auto;
  text-transform: uppercase;
  font-size: 0.875rem;
}
</style>
