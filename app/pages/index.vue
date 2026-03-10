<template>
  <GmContainer class="index-page">
    <HeroIndex />
    <IndexOpportunities />
    <IndexHowItWorks />
    <IndexSpheres />
    <IndexWhyMgf />
    <IndexUsefulPeople />
    <IndexJoinClub />
    <IndexProgramsSupport />
    <IndexDevelopmentPlans />
    <IndexNewsEvents />
    <IndexPartners />
    <IndexJoinAssociation />
    <IndexContact />
    <IndexFooterQuote />
  </GmContainer>
</template>

<script setup>
import GmContainer from '~/components/UI/GmContainer.vue'
import HeroIndex from '~/components/Index/HeroIndex.vue'
import IndexHowItWorks from '~/components/Index/IndexHowItWorks.vue'
import IndexJoinClub from '~/components/Index/IndexJoinClub.vue'
import IndexOpportunities from '~/components/Index/IndexOpportunities.vue'
import IndexDevelopmentPlans from '~/components/Index/IndexDevelopmentPlans.vue'
import IndexNewsEvents from '~/components/Index/IndexNewsEvents.vue'
import IndexContact from '~/components/Index/IndexContact.vue'
import IndexFooterQuote from '~/components/Index/IndexFooterQuote.vue'
import IndexJoinAssociation from '~/components/Index/IndexJoinAssociation.vue'
import IndexPartners from '~/components/Index/IndexPartners.vue'
import IndexProgramsSupport from '~/components/Index/IndexProgramsSupport.vue'
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
