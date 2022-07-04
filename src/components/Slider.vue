<template>
    <div class="content">
        <div class="box" v-for="(image, index) in Images" :key="index">
            <img :src="image.url" :alt="image.alt" />
        </div>
    </div>
</template>

<style scoped>
.content {
  display: flex;
  animation: move 22s infinite linear;
  width: 100vw;
}

.box {
  flex: 0 0 auto;
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box img {
  width: 500px;
  height: 500px;
}

@keyframes move {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-100%);
  }
}
</style>

<script setup lang="ts">
 const Images = [
     {
         url: "https://www.ventasdealtooctanaje.com/wp-content/uploads/2019/03/Disen%CC%83o-de-PAginas-Web-Industriales-1.jpeg",
         alt:"image1"
     },
     {
         url: "https://www.ventasdealtooctanaje.com/wp-content/uploads/2019/03/Disen%CC%83o-de-PAginas-Web-Industriales-1.jpeg",
         alt: "image2"
     },
     {
         url: "https://venecyartgt.com/wp-content/uploads/2020/07/65.jpg",
         alt: "image3"
     },
     {
         url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpj56ICp3GpLEdDuuvqntNgxFKDvYkbhy2eiKauw2cQ9IvZJ2I4ll6_BsnPs9tnHtZ4XI&usqp=CAU",
         alt: "image4"
     },
     {
         url: "https://www.ventasdealtooctanaje.com/wp-content/uploads/2019/03/Disen%CC%83o-de-PAginas-Web-Industriales-1.jpeg",
         alt: "image2"
     },
 ];
</script>
