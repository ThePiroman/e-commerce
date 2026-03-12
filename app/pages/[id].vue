<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

const { data: product } = await useFetch(`/api/${route.params.id}`);

useHead({
  title: `Купить`,
})

</script>

<template>
    <h1>Товар</h1>
    <ProductCard :productId = product?.id :name = product?.name :price = product?.price.centAmount :image = product?.image></ProductCard>
    <LinkHolder>
        <NuxtLink class="testroute__link" to="testroute">To test route</NuxtLink>
    </LinkHolder>
</template>


<style>
</style>