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

function next(userTriggered : boolean = false) {
  currentImageIndex.value = (currentImageIndex.value + 1) % props.images.length;
  if (userTriggered) {
    restartInterval()
  }
}

function prev(userTriggered : boolean = false) {
  currentImageIndex.value = (currentImageIndex.value - 1 + props.images.length) % props.images.length;
  if (userTriggered) {
    restartInterval()
  }
}

function restartInterval() {
  clearInterval(autoInterval);
  if (props.autoScrollTime) {
    autoInterval = setInterval(next, props.autoScrollTime * 1000, false)
  }
}

</script>

<template>
    <div class = "carousel">
        <div class = "carousel__images">
            <NuxtImg v-for="(img, index) in images" class="image" :class="{active: index === currentImageIndex}" :src=img></NuxtImg>
        </div>
        <button class = "carousel__prev" v-on:click="prev(true)"><ChevronLeft></ChevronLeft></button>
        <button class = "carousel__next" v-on:click="next(true)"><ChevronRight></ChevronRight></button>
    </div>
</template>

<style>
.carousel {
  position: relative;
  width: 600px;
  overflow: hidden;
}

.carousel__images {
  position: relative;
  width: 100%;
  height: 400px;
}

.image {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image.active {
  opacity: 1;
}

.carousel__prev, .carousel__next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.5);
  color: #fff;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
}

.carousel__prev { 
    left: 0px; 
}
.carousel__next { 
    right: 0px; 
}

</style>