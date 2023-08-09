<template>
    <Structure>
        <Hero></Hero>
        <SectionCategory></SectionCategory>
    </Structure>
</template>

<script>
import Structure from '../layouts/Structure.vue';
import Hero from '../components/Hero.vue';
import SectionCategory from '../components/SectionCategory.vue';

export default {
    components: {
        Structure,
        Hero,
        SectionCategory,
    },
}
</script>

<style lang="scss" scoped>
@use '../style/general.scss' as *;
@use '../style/partials/color.scss' as *;
</style>