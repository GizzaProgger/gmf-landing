<template>
  <GmContainer>
    <header class="app-header">
      <NuxtLink to="/" class="app-header__logo" aria-label="Muslim Global Finance — на главную">
        <IconsMainLogo class="app-header__logo-img" />
      </NuxtLink>

      <nav class="app-header__nav" aria-label="Основное меню">
        <NuxtLink to="/" class="app-header__link">{{ navItems[0] }}</NuxtLink>
        <NuxtLink to="/about" class="app-header__link">{{ navItems[1] }}</NuxtLink>
        <NuxtLink to="/projects" class="app-header__link">{{ navItems[2] }}</NuxtLink>
        <NuxtLink to="/strategies" class="app-header__link">{{ navItems[3] }}</NuxtLink>
        <NuxtLink to="/useful-people" class="app-header__link">{{ navItems[4] }}</NuxtLink>
        <NuxtLink to="/news" class="app-header__link">{{ navItems[5] }}</NuxtLink>
        <NuxtLink to="/contacts" class="app-header__link">{{ navItems[6] }}</NuxtLink>
      </nav>

      <div class="app-header__actions">
        <button type="button" class="app-header__lang" aria-label="Выбор языка или региона">
          <IconsWorldIcon class="app-header__lang-icon" />
        </button>
        <GmButton to="/join" class="app-header__cta" size="mini">
          Вступить в MGF <IconsProfileIcon class="app-header__profile-icon" />
        </GmButton>
      </div>
    </header>
  </GmContainer>
</template>

<script setup lang="ts">
import GmContainer from './UI/GmContainer.vue'
import GmButton from './UI/GmButton.vue'

const navItems = [
  'ГЛАВНАЯ',
  'О НАС',
  'ПРОЕКТЫ',
  'СТРАТЕГИИ',
  'ПОЛЕЗНЫЕ ЛЮДИ',
  'НОВОСТИ',
  'КОНТАКТЫ'
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

  &__logo {
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

  &__logo-img {
    width: 134px;
    height: 46px;
    object-fit: contain;
  }

  &__nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: clamp(0.75rem, 2vw, 2rem);
    flex: 1;
    max-width: 720px;
    margin: 0 auto;
  }

  &__link {
    font-size: 0.8125rem;
    font-weight: 500;
    letter-spacing: 0.02em;
    color: rgba(255, 255, 255, 0.9);
    text-decoration: none;
    white-space: nowrap;
    transition: color 0.2s ease;

    &:hover {
      color: var(--main-color);
    }

    &.router-link-active {
      color: var(--main-color);
    }

    &:focus-visible {
      outline: 2px solid var(--main-color);
      outline-offset: 2px;
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-shrink: 0;
  }

  &__lang {
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

  &__lang-icon {
    width: 42px;
    height: 42px;
  }

  &__cta {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1.25rem 0.75rem 1.5rem;
    border-radius: 9999px;
    background: var(--main-background);
    color: #fff;
    font-size: 0.9375rem;
    font-weight: 500;
    text-decoration: none;
    box-shadow: var(--default-shadow);
    transition:
      box-shadow 0.2s ease,
      transform 0.2s ease;

    &:hover {
      box-shadow:
        0 4px 20px rgba(204, 138, 17, 0.45),
        0 0 24px rgba(232, 196, 99, 0.2);
      transform: translateY(-1px);
    }

    &:focus-visible {
      outline: 2px solid var(--main-color);
      outline-offset: 2px;
    }
  }

  :deep(.app-header__cta) {
    padding-top: 4px;
    padding-bottom: 4px;
  }

  &__cta-text {
    flex-shrink: 0;
  }

  &__cta-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.25);
    flex-shrink: 0;
  }
}
</style>
