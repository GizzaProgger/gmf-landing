<template>
  <div class="gm-menu" :class="{ 'gm-menu--open': isOpen }">
    <nav class="gm-menu__nav" aria-label="Основное меню">
      <NuxtLink
        v-for="item in items"
        :key="item.to"
        :to="item.to"
        class="gm-menu__link"
        @click="close"
      >
        {{ item.label }}
      </NuxtLink>
    </nav>

    <div v-if="$slots.actions" class="gm-menu__actions">
      <slot name="actions" />
    </div>

    <button
      type="button"
      class="gm-menu__burger"
      :aria-label="isOpen ? 'Закрыть меню' : 'Открыть меню'"
      :aria-expanded="isOpen"
      @click="toggle"
    >
      <span class="gm-menu__burger-line" />
      <span class="gm-menu__burger-line" />
      <span class="gm-menu__burger-line" />
    </button>
  </div>

  <Transition name="gm-menu-overlay">
    <div v-show="isOpen" class="gm-menu__overlay" aria-hidden="true" @click="close" />
  </Transition>

  <Transition name="gm-menu-panel">
    <aside
      v-show="isOpen"
      class="gm-menu__panel"
      aria-label="Мобильное меню"
      role="dialog"
      aria-modal="true"
    >
      <button type="button" class="gm-menu__close" aria-label="Закрыть меню" @click="close">
        <span class="gm-menu__close-line" />
        <span class="gm-menu__close-line" />
      </button>
      <nav class="gm-menu__panel-nav" aria-label="Основное меню">
        <NuxtLink
          v-for="item in items"
          :key="item.to"
          :to="item.to"
          class="gm-menu__panel-link"
          @click="close"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>
      <div v-if="$slots.actions" class="gm-menu__panel-actions">
        <slot name="actions" />
      </div>
    </aside>
  </Transition>
</template>

<script setup lang="ts">
export interface GmMenuItem {
  label: string
  to: string
}

defineProps<{
  items: GmMenuItem[]
}>()

const isOpen = ref(false)

function toggle() {
  isOpen.value = !isOpen.value
}

function close() {
  isOpen.value = false
}

watch(isOpen, (open) => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = open ? 'hidden' : ''
  }
})

const route = useRoute()
watch(() => route.path, close)

defineExpose({ close })
</script>

<style lang="scss" scoped>
@use '~/assets/scss/vars' as *;

.gm-menu {
  display: contents;
}

.gm-menu__nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(0.75rem, 2vw, 2rem);
  flex: 1;
  min-width: 0;
  max-width: 720px;
  margin: 0 auto;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

.gm-menu__link {
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

.gm-menu__actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
}

.gm-menu__burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  width: 44px;
  height: 44px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  color: var(--main-color);
  transition: color 0.2s ease;

  &:hover {
    color: rgba(232, 196, 99, 0.9);
  }

  &:focus-visible {
    outline: 2px solid var(--main-color);
    outline-offset: 2px;
  }
}

.gm-menu__burger-line {
  display: block;
  width: 24px;
  height: 2px;
  background: currentColor;
  border-radius: 1px;
  transition:
    transform 0.25s ease,
    opacity 0.2s ease;
}

.gm-menu--open .gm-menu__burger-line {
  &:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }
  &:nth-child(2) {
    opacity: 0;
  }
  &:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
}

.gm-menu__overlay {
  position: fixed;
  inset: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
}

.gm-menu__panel {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 101;
  width: min(320px, 85vw);
  padding: calc(var(--header-height, 72px) + 1rem) 1.5rem 1.5rem;
  background: var(--secondary-background);
  border-left: 1px solid rgba(232, 196, 99, 0.2);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow-x: hidden;
  overflow-y: auto;
}

.gm-menu__close {
  position: absolute;
  top: 40px;
  right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  color: var(--main-color);
  transition: color 0.2s ease;

  &:hover {
    color: rgba(232, 196, 99, 0.9);
  }

  &:focus-visible {
    outline: 2px solid var(--main-color);
    outline-offset: 2px;
  }
}

.gm-menu__close-line {
  position: absolute;
  width: 20px;
  height: 2px;
  background: currentColor;
  border-radius: 1px;

  &:nth-child(1) {
    transform: rotate(45deg);
  }
  &:nth-child(2) {
    transform: rotate(-45deg);
  }
}

.gm-menu__panel-nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.gm-menu__panel-link {
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
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

.gm-menu__panel-actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: auto;
  padding-top: 1rem;
}

@include below($bp-desktop) {
  .gm-menu__nav,
  .gm-menu__actions {
    display: none;
  }

  .gm-menu__burger {
    display: flex;
    margin-left: auto;
  }
}

.gm-menu-overlay-enter-active,
.gm-menu-overlay-leave-active {
  transition: opacity 0.25s ease;
}
.gm-menu-overlay-enter-from,
.gm-menu-overlay-leave-to {
  opacity: 0;
}

.gm-menu-panel-enter-active,
.gm-menu-panel-leave-active {
  transition: transform 0.3s ease;
}
.gm-menu-panel-enter-from,
.gm-menu-panel-leave-to {
  transform: translateX(100%);
}
</style>
