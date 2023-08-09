<template>
    <div class="background d-flex flex-column min-vh-100">
        <header>
            <NavBar></NavBar>
        </header>
        <main class="prova flex-grow-1">
            <slot />
        </main>
        <footer class="background">
            <Footer></Footer>
        </footer>
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';
export default {
    components: {
        NavBar,
        Footer,
    }
}
</script>

<style lang="scss" scoped>
.prova {
    min-height: 0;
}

.background {
    background-color: white;
}
</style>