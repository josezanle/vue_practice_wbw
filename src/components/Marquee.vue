<template>
    <div class="marquee">
        <div class="img_container">
            <img src="../assets/images/megafono.svg" class="block h-6 w-6" />
        </div>
        <h3>Disfruta el nuevo sitio que hicimos para ti.</h3>
    </div>
</template>

<!-- Styles -->
<style scoped>

.marquee {
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    z-index: 110;
}

.img_container  {
    background:#1c1c1c;
    z-index: 112;
    width: 50px;
    padding-left: 1em;
}

.marquee h3 {
    width: 100%;
    z-index: 110;
    color: #f1f1f1;
    -moz-transform: translateX(100%);
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
    /* Apply animation to this element */
    -moz-animation: example1 20s linear infinite;
    -webkit-animation: example1 20s linear infinite;
    animation: example1 20s linear infinite;
    text-align: center;
}

@keyframes example1 {
    0% {
        -moz-transform: translateX(100%);
        -webkit-transform: translateX(100%);
        transform: translateX(100%);
    }

    100% {
        -moz-transform: translateX(-100%);
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%);
    }
}
</style>
