<template>
    <header class="bg-dark py-5">
        <div class="container px-4 px-lg-5 my-5">
            <div class="text-center text-white">
                <h1 class="display-4 fw-bolder">Shop in style</h1>
                <p class="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
        };
    }
}
</script>
<style lang="scss" scoped>
@use '../style/partials/reset.scss' as *;
@use '../style/partials/color.scss' as *;
@use '../style/general.scss' as *;

img {
    max-width: 100%;
}

a {
    text-decoration: none;
    color: currentColor;
}

.description {
    max-width: 700px;
}

@media screen and (max-width: 768px) {
    .text {
        column-count: 2;
    }
}

.card {
    border-radius: 1rem;
}

.img-hover-zoom--colorize img {
    width: 150px;
    margin-top: 20px;
    padding: 1px;
    transition: transform .5s;
    filter: grayscale(100%);
}

.img-hover-zoom--colorize:hover img {
    filter: grayscale(0);
    transform: scale(1.05);
}

.box {
    display: flex;
    align-items: center;
    justify-content: center;
}

.background {
    background-color: gray;
}
</style>