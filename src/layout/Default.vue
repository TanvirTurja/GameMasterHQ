<template>
    <div>
        <Nav />
        <main class="main">
            <slot/>

        </main>
        <Footer />

    </div>
</template>

<script>
import Nav from "../components/Nav.vue";
import Footer from "../components/Footer.vue";
    export default {
    components: { Nav , Footer},
    
}


</script>

<style scoped>
</style>