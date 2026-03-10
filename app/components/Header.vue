
<script setup lang="ts">
import { ShoppingBasket, TextAlignJustify, UserRound, X } from 'lucide-vue-next';

const headerSearchInput = ref<HTMLInputElement | null>(null);
const headerSearchButton = ref<HTMLButtonElement | null>(null);

function handleSearchInput() {
    if (headerSearchInput.value?.value) {
        headerSearchButton.value?.classList.add('header__clear-button--active');
    } else {
        headerSearchButton.value?.classList.remove('header__clear-button--active');
    }
}
</script>

<template>
    <header class = "header">
        <div class = "header__container">
            <div class = "header__logo">
                <NuxtLink to="/" class="header__logo-text">E-Commerce</NuxtLink>
            </div>
            <div class = "header__category">
                <button class = "header__category-button"><TextAlignJustify color="white" :size=44></TextAlignJustify></button>
            </div>
            <div class = "header__search">
                <input class = "header__search-input" type="text" autocomplete="off" placeholder="Поиск" ref="headerSearchInput" @input="handleSearchInput()">
                <button class = "header__search-button" ref="headerSearchButton" @click="() => {if (headerSearchInput) {headerSearchInput.value = ''; headerSearchButton?.classList.remove('header__clear-button--active'); headerSearchInput.focus()}}">
                    <X color="gray" :size=18></X>
                </button>
            </div>
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
}

.header__logo-text {
    text-decoration: none;
    font-family: "Oswald", sans-serif;
    font-size: 32px;
    color: white;
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
    border: none;
    outline: none;
}

.header__search-button {
    position: absolute;
    right: 0;
    cursor: pointer;
    background-color: transparent;
    border: none;
    display: none;
}

.header__clear-button--active {
    display: block;
}

.header__basket, .header__profile {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    cursor: pointer;
}

.header__basket-label, .header__profile-label {
    font-family: "Oswald", sans-serif;
    font-size: 14px;
    color: whitesmoke;
}

</style>