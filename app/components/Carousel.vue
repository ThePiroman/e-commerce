<script setup lang="ts">
import { ChevronLeft } from 'lucide-vue-next';
import { ChevronRight } from 'lucide-vue-next';

const props = defineProps<{
    images: string[],
    autoScrollTime?: number
}>()

const currentImageIndex = ref(0);
let autoInterval : number;
if (props.autoScrollTime) {
  onMounted(() => {restartInterval()})
}

function carouselNext(userTriggered : boolean = false) {
  currentImageIndex.value = (currentImageIndex.value + 1) % props.images.length;
  if (userTriggered) {
    restartInterval()
  }
}

function carouselPrevious(userTriggered : boolean = false) {
  currentImageIndex.value = (currentImageIndex.value - 1 + props.images.length) % props.images.length;
  if (userTriggered) {
    restartInterval()
  }
}

function restartInterval() {
  clearInterval(autoInterval);
  if (props.autoScrollTime) {
    autoInterval = setInterval(carouselNext, props.autoScrollTime * 1000, false)
  }
}

</script>

<template>
  <div class = "carousel">
      <div class = "carousel__image-container">
        <NuxtImg v-for="(img, index) in images" class="carousel__image" :class="{active: index === currentImageIndex}" :src=img></NuxtImg>
      </div>
      <button class = "carousel__prev-button" v-on:click="carouselPrevious(true)"><ChevronLeft></ChevronLeft></button>
      <button class = "carousel__next-button" v-on:click="carouselNext(true)"><ChevronRight></ChevronRight></button>
  </div>
</template>

<style>
.carousel {
  position: relative;
  width: 600px;
  overflow: hidden;
}

.carousel__image-container {
  position: relative;
  width: 100%;
  height: 400px;
}

.carousel__image {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.carousel__image.active {
  opacity: 1;
}

.carousel__prev-button, .carousel__next-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.5);
  color: #fff;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
}

.carousel__prev-button { 
  left: 0px; 
}
.carousel__next-button { 
  right: 0px; 
}

</style>