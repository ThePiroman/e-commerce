<script setup lang="ts">

</script>

<template>
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

body {
    background-color: darkslategrey;
}
</style>