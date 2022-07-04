<template>
    <section id="projects">
        <Tag text="Features" />
        <div class="card" v-for="({title, desc}, index) in features">
            <div class="top">{{ title }}</div>
            <br />
            <div class="bottom">{{desc}}</div>
        </div>
    </section>
</template>

<style scoped>

section {
    width: 100vw;
    min-height: 100vh;
    background: #1c1c1c;
    color: #1c1c1c;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.card {
    width: 300px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    margin: 0.5em;
    padding: 0.5em;
    border-radius: .5em;
    background: hsla(0, 0%, 95%, 0.877);
    border: 3px solid white;
}
.card:hover{
    cursor: pointer;
    background-color: white;
}
@media(max-width:300px){
    .card{
        width: 100%;
    }
}
</style>

<script  setup lang="ts">
import Tag from './Tag.vue';
const features = [
    {
        title: "WEB OPTIMIZATION",
        desc: "A startup company (startup or start-up) is an entrepreneurial venture typically describing newly emerged, fast-growing business.",
    },
    {
        title: "MONEY SAVING",
        desc: "A startup company (startup or start-up) is an entrepreneurial venture typically describing newly emerged, fast-growing business.",
    },
    {
        title: "SERVER SECURITY",
        desc: "A startup company (startup or start-up) is an entrepreneurial venture typically describing newly emerged, fast-growing business.",
    },
    {
        title: "CLOUD COMPUTING",
        desc: "A startup company (startup or start-up) is an entrepreneurial venture typically describing newly emerged, fast-growing business.",
    },
];


</script>
