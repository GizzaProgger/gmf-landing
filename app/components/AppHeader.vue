<template>
  <GmContainer>
    <header class="app-header">
      <NuxtLink to="/" class="app-header__logo" aria-label="Muslim Global Finance — на главную">
        <IconsMainLogo class="app-header__logo-img" />
      </NuxtLink>

      <GmMenu :items="menuItems">
        <template #actions>
          <button type="button" class="app-header__lang" aria-label="Выбор языка или региона">
            <IconsWorldIcon class="app-header__lang-icon" />
          </button>
          <GmButton to="/join" class="app-header__cta" size="mini" variant="primary-inverted">
            Вступить в MGF <IconsProfileIcon class="app-header__profile-icon" />
          </GmButton>
        </template>
      </GmMenu>
    </header>
  </GmContainer>
</template>

<script setup lang="ts">
import GmContainer from './UI/GmContainer.vue'
import GmMenu from './UI/GmMenu.vue'
import GmButton from './UI/GmButton.vue'

const menuItems = [
  { label: 'ГЛАВНАЯ', to: '/' },
  { label: 'О НАС', to: '/about' },
  { label: 'ПРОЕКТЫ', to: '/projects' },
  { label: 'СТРАТЕГИИ', to: '/strategies' },
  { label: 'ПОЛЕЗНЫЕ ЛЮДИ', to: '/useful-people' },
  { label: 'НОВОСТИ', to: '/news' },
  { label: 'КОНТАКТЫ', to: '/contacts' }
]
</script>

<style lang="scss" scoped>
@use '~/assets/scss/vars' as *;

.app-header {
  --header-height: 72px;
  --header-padding-x: clamp(1rem, 4vw, 2.5rem);

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  min-height: var(--header-height);
  padding: 0 var(--header-padding-x);
  min-width: 0;
  overflow-x: hidden;

  @include below($bp-desktop) {
    justify-content: space-between;
    width: 100%;

    .app-header__logo {
      margin-right: auto;
    }
  }
}

.app-header__logo {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;

  &:focus-visible {
    outline: 2px solid var(--main-color);
    outline-offset: 4px;
  }
}

.app-header__logo-img {
  width: 134px;
  height: 46px;
  object-fit: contain;

  @include below($bp-desktop) {
    width: 120px;
    height: 41px;
  }
}

.app-header__lang {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
  color: var(--main-color);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 16px rgba(232, 196, 99, 0.3);
  }

  &:focus-visible {
    outline: 2px solid var(--main-color);
    outline-offset: 2px;
  }
}

.app-header__lang-icon {
  width: 42px;
  height: 42px;
}
</style>
