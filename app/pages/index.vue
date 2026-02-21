<template>
  <GmContainer class="index-page">
    <HeroIndex />
    <IndexOpportunities />
  </GmContainer>
</template>

<script setup>
import GmContainer from '~/components/UI/GmContainer.vue'
import HeroIndex from '~/components/Index/HeroIndex.vue'
import IndexOpportunities from '~/components/Index/IndexOpportunities.vue'

definePageMeta({
  layout: 'default'
})
</script>

<style lang="scss" scoped>
.index-page {
  display: flex;
  flex-direction: column;
  gap: 150px;
  padding-bottom: 4rem;
}
</style>
