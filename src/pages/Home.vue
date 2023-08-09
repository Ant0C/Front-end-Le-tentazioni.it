<template>
    <Structure>
        <Jumbotron></Jumbotron>
    </Structure>
</template>

<script>
import Structure from '../layouts/Structure.vue';
import Jumbotron from '../components/Jumbotron.vue';

export default {
    components: {
        Structure,
        Jumbotron
    },
}
</script>

<style lang="scss" scoped>
@use '../style/general.scss' as *;
@use '../style/partials/color.scss' as *;
</style>