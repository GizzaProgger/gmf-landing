<template>
  <div>
    <GmContainer>
      <HeroIndex />
    </GmContainer>
  </div>
</template>

<script setup>
import HeroIndex from '~/components/Index/HeroIndex.vue'
import GmContainer from '~/components/UI/GmContainer.vue'

definePageMeta({
  layout: 'default'
})
</script>
