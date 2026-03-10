<template>
  <footer class="app-footer">
    <NuxtPicture
      src="/assets/imgs/foother_icon.png"
      alt="Muslim Global Finance"
      class="app-footer__logo"
    />
    <nav class="app-footer__nav">
      <NuxtLink
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        class="app-footer__link"
      >
        {{ item.label }}
      </NuxtLink>
    </nav>
    <div class="app-footer__socials">
      <a
        v-for="social in socials"
        :key="social.name"
        :href="social.href"
        :aria-label="social.name"
        class="app-footer__social"
      >
        <component :is="social.icon" />
      </a>
    </div>
  </footer>
</template>

<script setup lang="ts">
import FooterInstagramIcon from '~/components/Icons/FooterInstagramIcon.vue'
import FooterTelegramIcon from '~/components/Icons/FooterTelegramIcon.vue'
import FooterWhatsAppIcon from '~/components/Icons/FooterWhatsAppIcon.vue'

const navItems = [
  { label: 'Главная', to: '/' },
  { label: 'О нас', to: '#about' },
  { label: 'проекты', to: '#projects' },
  { label: 'Стратегии', to: '#strategies' },
  { label: 'полезные люди', to: '#people' },
  { label: 'новости', to: '#news' },
  { label: 'Контакты', to: '#contacts' }
]

const socials = [
  { name: 'Instagram', href: '#', icon: FooterInstagramIcon },
  { name: 'Telegram', href: '#', icon: FooterTelegramIcon },
  { name: 'WhatsApp', href: '#', icon: FooterWhatsAppIcon }
]
</script>

<style lang="scss" scoped>
@use '~/assets/scss/vars' as *;
@use '~/assets/scss/mixins' as *;

.app-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  min-height: 64px;
  width: 100%;
  gap: 1rem;

  @include below($bp-tablet) {
    flex-wrap: wrap;
    height: auto;
    min-height: 64px;
    padding: 1rem 0;
    gap: 1rem;
  }

  @include below($bp-mobile) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.5rem 0;
    gap: 1rem;
  }
}

.app-footer__logo {
  flex-shrink: 0;
  width: 134px;

  @include below($bp-mobile) {
    order: 1;
  }

  :deep(img) {
    width: 134px;
    height: auto;
    display: block;
  }
}

.app-footer__nav {
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;

  @include below($bp-tablet) {
    gap: 1.5rem;
  }

  @include below($bp-mobile) {
    gap: 1rem;
    order: 3;
    width: 100%;
    justify-content: center;
  }
}

.app-footer__link {
  color: #fff;
  font-family: Sora, var(--font-family);
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 101.5%;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    opacity: 0.9;
  }
}

.app-footer__socials {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-shrink: 0;

  @include below($bp-mobile) {
    order: 2;
  }
}

.app-footer__social {
  display: block;
  width: 32px;
  height: 32px;

  :deep(svg) {
    width: 32px;
    height: 32px;
    display: block;
  }
}
</style>
