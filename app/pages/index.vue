<template>
  <GmContainer class="index-page">
    <HeroIndex />
    <IndexOpportunities />
    <IndexHowItWorks />
    <IndexSpheres />
    <IndexWhyMgf />
    <IndexUsefulPeople />
  </GmContainer>
</template>

<script setup>
import GmContainer from '~/components/UI/GmContainer.vue'
import HeroIndex from '~/components/Index/HeroIndex.vue'
import IndexHowItWorks from '~/components/Index/IndexHowItWorks.vue'
import IndexOpportunities from '~/components/Index/IndexOpportunities.vue'
import IndexSpheres from '~/components/Index/IndexSpheres.vue'
import IndexUsefulPeople from '~/components/Index/IndexUsefulPeople.vue'
import IndexWhyMgf from '~/components/Index/IndexWhyMgf.vue'

definePageMeta({
  layout: 'default'
})
</script>

<style lang="scss" scoped>
.index-page {
  display: flex;
  flex-direction: column;
  gap: var(--gap-15);
  padding-bottom: 4rem;
}
</style>
