<template>

      <div class="logo_container">
            <a href="/" rel="noopener">WBW</a>

      </div>

</template>
<style scoped>

.logo_container {
      width: 200px;
      /* height: 100%; */
      background: transparent;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      /* background: #000; */
}

@media(max-width: 620px) {
      .logo_container {
            justify-content: start;
            padding-left: 1em;
      }
}
</style>