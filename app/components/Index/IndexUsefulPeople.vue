<template>
  <section class="index-useful-people">
    <div class="index-useful-people__intro">
      <UiTitle level="2" class="index-useful-people__title">ПОЛЕЗНЫЕ ЛЮДИ</UiTitle>
      <p class="index-useful-people__text">
        Эксперты, объединённые общей целью — делиться опытом, знаниями и поддержкой. Каждый из них
        может стать вашим надёжным партнёром, наставником или коллегой, помогая укреплять ваш бизнес
        и открывать новые перспективы для роста.
      </p>
    </div>
    <div class="index-useful-people__grid">
      <EmployeeCard
        v-for="person in specialists"
        :key="person.name"
        :name="person.name"
        :role="person.role"
        :rating="person.rating"
        :description="person.description"
      />
    </div>
    <NuxtLink to="/specialists" class="index-useful-people__all">
      <span class="index-useful-people__all-text">Все специалисты</span>
      <ArrowRightIcon class="index-useful-people__all-arrow" />
    </NuxtLink>
  </section>
</template>

<script setup lang="ts">
import ArrowRightIcon from '~/components/Icons/ArrowRightIcon.vue'
import EmployeeCard from '~/components/Share/EmployeeCard.vue'
import UiTitle from '~/components/UI/UiTitle.vue'

const specialists = [
  {
    name: 'Артур Хайретдинов',
    role: 'Ui/Ux Дизайнер',
    rating: 4,
    description:
      'Профессиональный веб-дизайнер с более чем 5-летним опытом в создании эффективных сайтов для бизнеса.'
  },
  {
    name: 'Марат Ибрагимов',
    role: 'Финансовый консультант',
    rating: 4,
    description:
      'Специалист по исламским финансам с опытом структурирования сделок и шариатского аудита.'
  },
  {
    name: 'Айгуль Сафина',
    role: 'Юрист',
    rating: 5,
    description:
      'Эксперт в области корпоративного права и международных контрактов для бизнеса.'
  },
  {
    name: 'Руслан Каримов',
    role: 'IT-архитектор',
    rating: 4,
    description:
      'Разработка и внедрение IT-решений для масштабирования бизнес-процессов.'
  },
  {
    name: 'Динара Мустафина',
    role: 'Маркетолог',
    rating: 4,
    description:
      'Стратегии продвижения и брендинга с фокусом на этичный маркетинг и партнёрства.'
  },
  {
    name: 'Ильдар Закиров',
    role: 'Бизнес-аналитик',
    rating: 5,
    description:
      'Анализ рынков, due diligence и подготовка инвестиционных проектов.'
  },
  {
    name: 'Лейла Хакимова',
    role: 'HR-консультант',
    rating: 4,
    description:
      'Подбор команд и построение корпоративной культуры в растущих компаниях.'
  },
  {
    name: 'Тимур Гарифуллин',
    role: 'Логистика и поставки',
    rating: 4,
    description:
      'Организация международных поставок и оптимизация цепочек снабжения.'
  }
]
</script>

<style lang="scss" scoped>
@use '~/assets/scss/vars' as *;
@use '~/assets/scss/mixins' as *;

.index-useful-people {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.index-useful-people__intro {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.index-useful-people__title {
  text-transform: uppercase;
  letter-spacing: 0.02em;
}

.index-useful-people__text {
  font-family: var(--font-family);
  font-size: 1rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  max-width: 720px;
}

.index-useful-people__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;

  @include below($bp-wide) {
    grid-template-columns: repeat(3, 1fr);
  }

  @include below($bp-desktop) {
    grid-template-columns: repeat(2, 1fr);
  }

  @include below($bp-tablet) {
    grid-template-columns: 1fr;
  }
}

.index-useful-people__all {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  align-self: center;
  padding: 1rem 2rem;
  border-radius: var(--default-border-radius);
  border: 1px solid var(--default-border-color);
  background: var(--secondary-background);
  font-family: var(--font-family);
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-color: var(--main-color);
    box-shadow: 0 0 0 1px var(--main-color);
  }
}

.index-useful-people__all-arrow {
  flex-shrink: 0;
}
</style>
