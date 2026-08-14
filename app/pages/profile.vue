<script setup lang="ts">
import Button from '~/components/ui/button/Button.vue';


const { userName, logout }  = useAuth();

useHead({
  title: 'Личный кабинет',
});

</script>

<template>
  <ClientOnly>
    <h1>Личный кабинет</h1>
    <span v-if="userName">Привет, {{ userName }}!</span>
    
    <Button @click="logout">Выйти</Button>
  </ClientOnly>
</template>

<style>
</style>