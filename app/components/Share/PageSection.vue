<template>
    <section class="page-section">
        <h2 class="page-section__title">{{ title }}</h2>
        <p class="page-section__subtitle">{{ subtitle }}</p>
        <slot />
    </section>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    }
})
</script>

<style scoped lang="scss">

</style>