<template>
  <section>
  <Navbav />
    <div class="overlay"></div>
    <div class="text">
      <h2>Webs, Apps y Diseños Deluxe</h2>
      <br />

      <p>En WeBuildWebz nos encargamos de darte un servicio perfecto.</p>
      <br />
    </div>
  </section>
</template>
<style scoped>

section {
  width: 100vw;
  min-height: calc(100vh - 40px);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
section:before {
  position: absolute;
  top: 20%;
  left: 2em;
  content: "";
  width: 350px;
  height: 350px;
  border-radius: 50%;
  background-image: linear-gradient(to top, #ff0040 0%, #aa052f 100%);
  animation: rotating 20s ease-in-out alternate-reverse;
}

@keyframes rotating {
  0% {
    transform: rotate(0deg);
    background-image: linear-gradient(to top, #bb153f 0%, #ff0844 100%);
  }
  50% {
    transform: rotate(0deg);
    background-image: linear-gradient(to top, #ed436d 0%, #c40736 100%);
  }

  100% {
    transform: rotate(360deg);
    background-image: linear-gradient(135deg, #ff0844 0%, #a10e32 100%);
  }
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to top, hsla(0, 0%, 11%, 0.5), hsla(0, 0%, 11%, 0.5));
  backdrop-filter: blur(2em);
  z-index: 10;
}

.text {
  width: 400px;
  margin: 1em;
  padding: 1em;
  z-index: 100;
}

h2 {
  font-variant: small-caps;
  font-size: 1.5em;
}

p {
  font-style: italic;
}
</style>
<script setup lang="ts">
import Navbav from "./Navbav/index.vue";

</script>