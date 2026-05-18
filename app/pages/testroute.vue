<script setup lang="ts">

const fetchResult = await fetchProducts();
const products = fetchResult.products;

useHead({
  title: 'Каталог товаров',
})

</script>

<template>
    <h1>Каталог товаров</h1>
    <div class="flex">
        <ProductCard v-for="product in products as unknown as ProductCard[]" :key="product.id" :productId = product.id :name = product.name :price = product.price :image = product.images[0]>
        </ProductCard>
    </div>
    <LinkHolder>
        <NuxtLink class="text-none text-inherit bg-[aliceblue]" to="/">To index</NuxtLink>
    </LinkHolder>
</template>

<style>
</style>