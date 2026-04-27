<script setup lang="ts">
import { fetchProducts } from '~~/server/api/productFetching';

const fetchResult = await fetchProducts();
const products = fetchResult.products;

useHead({
  title: 'Каталог товаров',
})

</script>

<template>
    <h1>Каталог товаров</h1>
    <div class="display">
        <ProductCard v-for="product in products" :key="product.id" :productId = product.id :name = product.name :price = product.price :image = product.images[0]>
        </ProductCard>
    </div>
    <LinkHolder>
        <NuxtLink class="index__link" to="/">To index</NuxtLink>
    </LinkHolder>
</template>

<style>
.index__link {
    text-decoration: none;
    color:inherit;
    background-color: aliceblue;
}

.display {
    display: flex;
}
</style>