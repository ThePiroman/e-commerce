<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute()

const { data: product, error } = await useFetch(`/api/${route.params.id}`)

</script>

<template>
    <p>CARD PAGE</p>
    <ProductCard :productId = product?.id :name = product?.name :price = product?.price.centAmount :image = product?.image></ProductCard>
    <LinkHolder>
        <NuxtLink class="testroute__link" to="testroute">To test route</NuxtLink>
    </LinkHolder>
</template>


<style>
</style>