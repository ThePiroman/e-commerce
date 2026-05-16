
<script setup lang="ts">
import { Search, ShoppingBasket, TextAlignJustify, UserRound, X } from 'lucide-vue-next';

import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"


const headerSearchValue = shallowRef('');

function handleSubmit() : void {
    if (!headerSearchValue.value) {
        return;
    }

    useRouter().push(`search/queryParam?${translit(headerSearchValue.value.toLowerCase())}`);
        
}

</script>

<template>
    <header class = "bg-[var(--header-main-color)]">
        <div class = "flex justify-center items-center gap-[20px] pt-[10px]">
            <NuxtLink to="/" class="mb-[10px] no-underline font-[var(--header-main-font)] text-[32px] text-[var(--header-logo-color)]">E-Commerce</NuxtLink>
            <div>
                <button class = "cursor-pointer bg-transparent"><TextAlignJustify color="white" :size=44></TextAlignJustify></button>
            </div>
            <Field orientation="horizontal" class = "w-128">
                <Input v-model="headerSearchValue" @keydown.enter="handleSubmit" type="search" placeholder="Поиск..." />
                <Button  @click="handleSubmit">Поиск</Button>
            </Field>
            <div class = "flex flex-col text-center items-center cursor-pointer">
                <ShoppingBasket color="white" :size=32></ShoppingBasket>
                <span class = "text-[var(--header-main-font)] text-[14px] text-[var(--header-label-color)]">Корзина</span>
            </div>
            <div class = "flex flex-col text-center items-center cursor-pointer">
                <UserRound color="white" :size=32></UserRound>
                <span class = "text-[var(--header-main-font)] text-[14px] text-[var(--header-label-color)]">Личный кабинет</span>
            </div>
        </div>
    </header>
</template>

<style>
</style>