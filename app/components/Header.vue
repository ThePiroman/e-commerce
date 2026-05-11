
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

    useRouter().push(`search/queryParam?${translit(headerSearchValue.value)}`);
        
}

function handleClear() : void {
    headerSearchValue.value = "";
}

</script>

<template>
    <header class = "header">
        <div class = "header__container">
            <NuxtLink to="/" class="header__logo">E-Commerce</NuxtLink>
            <div class = "header__category">
                <button class = "header__category-button"><TextAlignJustify color="white" :size=44></TextAlignJustify></button>
            </div>
            <Field orientation="horizontal">
                <Input v-model="headerSearchValue" @keydown.enter="handleSubmit" type="search" placeholder="Search..." />
                <Button  @click="handleSubmit">Search</Button>
            </Field>
            <!-- <div class = "header__search">
                <input class = "header__search-input text-black" type="text" autocomplete="off" placeholder="Поиск" v-model="headerSearchValue" @keydown.enter="handleSubmit">
                <button class = "header__search-clear-button" :class="{ 'header__search-clear-button--hidden': headerSearchValue.length <= 0 }" @click="handleClear">
                    <X color="gray" :size=18></X>
                </button>
                <button class = "header__search-search-button" @click="handleSubmit">
                    <Search color="gray" :size=18></Search>
                </button>
            </div> -->
            <div class = "header__basket">
                <ShoppingBasket color="white" :size=32></ShoppingBasket>
                <span class = "header__basket-label">Корзина</span>
            </div>
            <div class = "header__profile">
                <UserRound color="white" :size=32></UserRound>
                <span class = "header__profile-label">Личный кабинет</span>
            </div>
        </div>
    </header>
</template>

<style>
.header {
    background-color: rgb(61, 102, 102);
}

.header__container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding-top: 10px;
}

.header__logo {
    margin-bottom: 10px;
    text-decoration: none;
    font-family: var(--header-main-font);
    font-size: 32px;
    color: var(--header-logo-color);
}

.header__category-button {
    cursor: pointer;
    background-color: transparent;
    border: none;
}

.header__search {
    position: relative;
    display: flex;
    align-items: center;
}

.header__search-input {
    width: 512px;
    height: 25px;
    background-color: white;
}

.header__search-clear-button {
    position: absolute;
    right: 0;
    margin-right: 25px;
    cursor: pointer;
    background-color: transparent;
    border: none;
    display: block;
}

.header__search-clear-button--hidden {
    display: none;
}

.header__search-search-button {
    position: absolute;
    right: 0;
    cursor: pointer;
    background-color: transparent;
    border: none;
}

.header__basket, .header__profile {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    cursor: pointer;
}

.header__basket-label, .header__profile-label {
    font-family: var(--header-main-font);
    font-size: 14px;
    color: var(--header-label-color);
}

</style>