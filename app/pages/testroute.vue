<script setup lang="ts">
const { data: products } = await useFetch('/api/products')
useHead({
  title: 'Каталог товаров',
})
</script>

<template>
    <h1>Каталог товаров</h1>
    <div class="display">
        <ProductCard v-for="product in products" :key="product.id" :productId = product.id :name = product.name :price = product.price?.centAmount :image = product.image>
        </ProductCard>
    </div>
    <LinkHolder>
        <NuxtLink class="index__link" to="/">To index</NuxtLink>
    </LinkHolder>
</template>

<style>
body {
    background-color: darkslategrey;
}

.index__link {
    text-decoration: none;
    color:inherit;
    background-color: aliceblue;
}

.display {
    display: flex;
}
</style>