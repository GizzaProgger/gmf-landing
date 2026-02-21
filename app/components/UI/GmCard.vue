<template>
    <div class="gm-card">
        <slot />
    </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.gm-card {
    background: var(--secondary-background);
    border: 1px solid var(--default-border-color);
    border-radius: var(--default-border-radius);
    padding: 32px 24px;
}
</style>