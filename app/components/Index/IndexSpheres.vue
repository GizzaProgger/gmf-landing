<template>
  <PageSection class="index-spheres">
    <template #header>
      <div class="index-spheres__header">
        <div class="index-spheres__header-left">
          <UiTitle level="2" class="index-spheres__title">
            <span class="index-spheres__title-line">СФЕРЫ </span>
            <span class="index-spheres__title-line index-spheres__title-line--gold"
              >MUSLIM GLOBAL
            </span>
            <span class="index-spheres__title-line index-spheres__title-line--gold">FINANCE</span>
          </UiTitle>
        </div>
        <div class="index-spheres__header-right">
          <p class="index-spheres__subtitle">
            наши направления охватывают ключевые потребности мусульманского бизнеса в современных
            реалиях
          </p>
        </div>
      </div>
    </template>
    <div class="index-spheres__grid">
      <IndexSphereCard
        v-for="sphere in spheres"
        :key="sphere.title"
        :title="sphere.title"
        :to="sphere.to"
        :image-url="sphere.imageUrl"
        :image-src-set="sphere.imageSrcSet"
      />
    </div>
  </PageSection>
</template>

<script setup lang="ts">
import IndexSphereCard from '~/components/Index/IndexSphereCard.vue'
import PageSection from '~/components/Share/PageSection.vue'
import UiTitle from '~/components/UI/UiTitle.vue'

const base = (id: string, w: number, q = 80) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=${q}`

const spheres = [
  {
    title: 'Экономика',
    to: '#economy',
    imageUrl: base('1611974789855-9c2a0a7236a3', 800),
    imageSrcSet: `${base('1611974789855-9c2a0a7236a3', 400)} 400w, ${base('1611974789855-9c2a0a7236a3', 800)} 800w`
  },
  {
    title: 'Культура и искусство',
    to: '#culture',
    imageUrl: base('1567620905732-2d1ec7ab7445', 800),
    imageSrcSet: `${base('1567620905732-2d1ec7ab7445', 400)} 400w, ${base('1567620905732-2d1ec7ab7445', 800)} 800w`
  },
  {
    title: 'Транспорт',
    to: '#transport',
    imageUrl: base('1544620347-c4fd4a3d5957', 800),
    imageSrcSet: `${base('1544620347-c4fd4a3d5957', 400)} 400w, ${base('1544620347-c4fd4a3d5957', 800)} 800w`
  },
  {
    title: 'Инвестиции и экспорт',
    to: '#investments',
    imageUrl: base('1526304640581-d334cdbbf45e', 800),
    imageSrcSet: `${base('1526304640581-d334cdbbf45e', 400)} 400w, ${base('1526304640581-d334cdbbf45e', 800)} 800w`
  },
  {
    title: 'Образование',
    to: '#education',
    imageUrl: base('1481627834876-b7833e8f5570', 800),
    imageSrcSet: `${base('1481627834876-b7833e8f5570', 400)} 400w, ${base('1481627834876-b7833e8f5570', 800)} 800w`
  },
  {
    title: 'Форумы и встречи',
    to: '#forums',
    imageUrl: base('1515187029135-18ee286d815b', 800),
    imageSrcSet: `${base('1515187029135-18ee286d815b', 400)} 400w, ${base('1515187029135-18ee286d815b', 800)} 800w`
  },
  {
    title: 'Информационные технологии',
    to: '#it',
    imageUrl: base('1461749280684-dccba630e2f6', 800),
    imageSrcSet: `${base('1461749280684-dccba630e2f6', 400)} 400w, ${base('1461749280684-dccba630e2f6', 800)} 800w`
  },
  {
    title: 'Здравоохранение',
    to: '#healthcare',
    imageUrl: base('1576091160399-112ba8d25d1f', 800),
    imageSrcSet: `${base('1576091160399-112ba8d25d1f', 400)} 400w, ${base('1576091160399-112ba8d25d1f', 800)} 800w`
  },
  {
    title: 'Искусственный интеллект',
    to: '#ai',
    imageUrl: base('1677442136019-21780ecad995', 800),
    imageSrcSet: `${base('1677442136019-21780ecad995', 400)} 400w, ${base('1677442136019-21780ecad995', 800)} 800w`
  }
]
</script>

<style lang="scss" scoped>
@use '~/assets/scss/vars' as *;
@use '~/assets/scss/mixins' as *;

.index-spheres__header {
  display: grid;
  grid-template-columns: 465px 1fr;
  gap: 2rem;
  align-items: center;

  @include below($bp-tablet) {
    grid-template-columns: 1fr;
  }
}

.index-spheres__title {
  text-transform: uppercase;
  letter-spacing: 0.02em;
}

.index-spheres__title-line {
  &--gold {
    color: var(--main-color);
  }
}

.index-spheres__subtitle {
  font-size: var(--title-h3-size);
  line-height: 1.5;
  color: #fff;
  margin: 0;
  text-align: right;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}

.index-spheres__grid {
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
</style>
