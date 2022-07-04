<template>
    <div class="user_container">
        <RouterLink to="/login">
            <img src="../../assets/images/user.svg" alt="" class="user">
        </RouterLink>
        <img src="../../assets/images/menu.svg" alt="" class="menu">
    </div>

    <!-- Mobile Menu  -->
    <!-- <div class=""></div> -->
</template>

<style scoped>
.user_container {
    width: 200px;
    background: transparent;
    display: flex;
    align-items: center;
}

.user_container .user {
    width: 30px;
    height: 30px;
}

.user_container .menu {
    display: none;
    width: 30px;
    height: 30px;
}

@media(max-width: 620px) {
    .user_container {
        justify-content: flex-end;
        padding-right: 1em;
    }

    .user_container .user {
        display: none;
    }

    .user_container .menu {
        display: block;
    }
}
</style>