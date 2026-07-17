<script setup lang="ts">
import Button from '~/components/ui/button/Button.vue';


const { user, logout, fetchUser } = useAuth() // Достаем наш стейт

console.log(user)

await fetchUser()

useHead({
  title: 'Личный кабинет',
})

</script>

<template>
    <h1>Личный кабинет</h1>
    <ClientOnly><span v-if="user">Привет, {{ user.name }}!</span></ClientOnly>
    
    <Button @click="logout">Выйти</Button>
</template>

<style>
</style>