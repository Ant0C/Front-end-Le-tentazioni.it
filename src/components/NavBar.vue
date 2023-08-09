<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <router-link :to="{ name: 'home' }" class="navbar-brand">
                    <img src="../assets/deliveboo-white.png" alt="Logo" class="d-inline-block align-text-top"
                        style="max-width: 200px ;">
                </router-link>
                <h1>HEADER</h1>
            </div>
        </nav>
    </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@use '../style/partials/color.scss' as *;

img {
    width: 100%;
    max-width: 250px;
    padding: 10px;
    margin-left: 5px;
}

header {
    background-color: gray;
}


@media screen and (min-width: 2560px) {
    img {
        max-width: 400px;
    }

}
</style>