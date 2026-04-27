<script setup lang="ts">
useHead({
    title: "E-commerce"
})
</script>

<template>
    <h1>Начальная страница E-commerce</h1>
    <LinkHolder>
        <NuxtLink class="testroute__link" to="testroute">To test route</NuxtLink>
    </LinkHolder>
</template>

<style>

.testroute__link {
    text-decoration: none;
    color:inherit;
    background-color: aliceblue;
}

</style>