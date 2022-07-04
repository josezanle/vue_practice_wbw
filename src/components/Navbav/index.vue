<template>
    <div class="navbar">
        <Logo />
        <MidNavigation />
        <LoginSection />
    </div>

</template>

<style scoped>

.navbar {
    width: 100vw;
    height: 80px;
    z-index: 200;
    position: fixed;
    top: 0;
    left: 0;
    background-image: linear-gradient(to top, hsla(0, 0%, 11%, 0.5), hsla(0, 0%, 11%, 0.5));
    backdrop-filter: blur(2em);
    display: flex;
    align-items: center;
}

@media(max-width: 620px){
    .navbar{
        justify-content: space-between;
    }
}
</style>

<script setup lang="ts">
import MidNavigation from './MidNavigation.vue';
import LoginSection from './LoginSection.vue';
import Logo from './Logo.vue';






const links = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "About",
        href: "/#about",
    },
    {
        name: "Projects",
        href: "/#projects",
    },
    {
        name: "Faqs",
        href: "/#faqs",
    },
    {
        name: "Contact",
        href: "/#footer",
    },
];
</script>