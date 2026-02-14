<script setup lang="ts">
const { data: products } = await useFetch('/api/products')
</script>

<template>
  <div v-for="product in products" :key="product.id">
    <h2>{{ product.name }}</h2>
    <p>{{ product.price?.centAmount }}</p>
    <img :src = product.image>
  </div>
</template>
