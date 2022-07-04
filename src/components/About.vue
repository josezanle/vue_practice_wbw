<template>
  <section id="about">
    <Tag text="Welcome" />
    <div class="text">
      <h4>La libertad de crear la Página Web que quieras</h4>
    </div>

    <div class="text">
      <p>
        Diseña y crea tu propia página web con calidad profesional. Ya sea que estés
        promocionando tu negocio, mostrando tu trabajo, abriendo tu tienda online o
        comenzando un blog, puedes hacerlo todo con el creador de páginas web de Wix.
      </p>
    </div>
  </section>
</template>

<style scoped>
section {
  background-image: linear-gradient(to top, hsla(0, 0%, 11%, 0.8), hsla(0, 0%, 11%, 1)),
    url("../assets/images/mountain.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.text {
  width: 600px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1em;
}

h4 {
  font-size: 3em;
}

p {
  font-size: 1.5em;
  line-height: 1.5em;
}
</style>

<script setup lang="ts">
import Tag from './Tag.vue';</script>
