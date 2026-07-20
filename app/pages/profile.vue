<script setup lang="ts">
import Button from '~/components/ui/button/Button.vue';


const { userName, logout }  = useAuth() // Достаем наш стейт

useHead({
  title: 'Личный кабинет',
})

</script>

<template>
    <h1>Личный кабинет</h1>
    <ClientOnly><span v-if="userName">Привет, {{ userName }}!</span></ClientOnly>
    
    <Button @click="logout">Выйти</Button>
</template>

<style>
</style>