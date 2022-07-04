<template>
    <nav class="mid_navigation">
        <a href="#about">About</a>
        <a href="#projects">Features</a>
        <a href="#">Text3</a>
        <a href="#">Text4</a>
        <a href="#footer">Contact</a>

        <!-- <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/register">Register</RouterLink>
        <RouterLink to="/dashboard">Dashboard</RouterLink> -->
    </nav>
    <!-- <RouterView /> -->
</template>

<style scoped>


.mid_navigation {
    width: 100%;
    /* height: 100%; */
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
}

.mid_navigation a {
    color: silver;
    margin: 0 5px;
}

.mid_navigation a:hover {
    color: white;
}
@media(max-width: 620px){
    .mid_navigation{
        display: none;
    }
}
</style>