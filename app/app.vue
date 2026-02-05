<script setup lang="ts">
import { ref, onMounted } from 'vue';

let products = ref<any[]>([]);

onMounted(async () => {
  products.value = await $fetch('/Products', {method: "GET"});
});

console.log(products.value)

</script>

<template>
  <div v-for="product in products" :key="product.name">
    <img :src="product.image"/>
    <h3>Здесь должно быть имя: {{ product.name }} </h3>
    <p>А здесь описание: {{ product.description }}</p>
  </div>
</template>