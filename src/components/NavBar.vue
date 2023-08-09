<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <router-link :to="{ name: 'home' }" class="navbar-brand">
                <img src="../assets/deliveboo-white.png" alt="Logo" class="d-inline-block align-text-top"
                    style="max-width: 200px ;">
            </router-link>
        </div>
        <div class="container-fluid">
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link" href="#">Active</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                        aria-expanded="false">Tutti i prodotti</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Link 1</a></li>
                        <li><a class="dropdown-item" href="#">Link 2</a></li>
                        <li><a class="dropdown-item" href="#">Link 3</a></li>
                        <li><a class="dropdown-item" href="#">Link 4</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
            </ul>
        </div>
        <div class="container-fluid">
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link" href="#">Profilo</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Carrello</a>
                </li>
            </ul>

        </div>
    </nav>
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