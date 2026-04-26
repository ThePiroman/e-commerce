
<script setup lang="ts">
import { Search, ShoppingBasket, TextAlignJustify, UserRound, X } from 'lucide-vue-next';
import { translit } from '#imports';
import { postUserPhone } from '~~/server/api/userFetching';

const headerSearchButton = shallowRef<HTMLButtonElement | null>(null);
const headerSearchValue = shallowRef('');

function handleSubmit() : void {
    if (!headerSearchValue.value) {
        return;
    }

    useRouter().push(`search/queryParam?${translit(headerSearchValue.value)}`);
        
}

function handleClear() : void {
    if (headerSearchValue) {
        headerSearchValue.value = ''; 
    }
    
    headerSearchButton.value?.classList.remove('header__search-clear-button--active');

}

const registerModalOpen = useState("registerModalOpen", () => false);
const registerModalValue = shallowRef('');

function handleAuth() : void {
    if (registerModalValue) {
        let successs = postUserPhone(registerModalValue.value);
        console.log(successs)
    }
}


</script>

<template>
    <Modal modal-key="registerModalOpen">
        <span class = "modal__title">Войти или создать профиль</span>
        <div class = "modal__auth">
            <input class = "modal__auth-input" type="text" autocomplete="off" placeholder="+7 777 777 7777" v-model="registerModalValue" @keydown.enter="handleAuth">
            <button class = "modal__auth-button" @click="handleAuth">Получить код</button>
        </div>
    </Modal>
    <header class = "header">
        <div class = "header__container">
            <NuxtLink to="/" class="header__logo">E-Commerce</NuxtLink>
            <div class = "header__category">
                <button class = "header__category-button"><TextAlignJustify color="white" :size=44></TextAlignJustify></button>
            </div>
            <div class = "header__search">
                <input class = "header__search-input" type="text" autocomplete="off" placeholder="Поиск" v-model="headerSearchValue" @keydown.enter="handleSubmit">
                <button class = "header__search-clear-button" :class="{ 'header__search-clear-button--active': headerSearchValue && headerSearchValue.length > 0 }" ref="headerSearchButton" @click="handleClear">
                    <X color="gray" :size=18></X>
                </button>
                <button class = "header__search-search-button" @click="handleSubmit">
                    <Search color="gray" :size=18></Search>
                </button>
            </div>
            <div class = "header__basket">
                <ShoppingBasket color="white" :size=32></ShoppingBasket>
                <span class = "header__basket-label">Корзина</span>
            </div>
            <div class = "header__profile" v-on:click="registerModalOpen = true">
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

.header__search-clear-button {
    position: absolute;
    right: 0;
    margin-right: 25px;
    cursor: pointer;
    background-color: transparent;
    border: none;
    display: none;
}

.header__search-search-button {
    position: absolute;
    right: 0;
    cursor: pointer;
    background-color: transparent;
    border: none;
}

.header__search-clear-button--active {
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

.modal__title {
    font-family: "SN Pro", sans-serif;
    font-size: 30px;
}

.modal__auth {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 25%;
}

.modal__auth-input {
    width: 50%;
}

.modal__auth-button {
    margin-top: 25%;
    border-radius: 20px;
    font-weight: 600;
    border: none;
    background-color: darkslategrey;
    color: white;
    cursor: pointer;
    width: 50%;
    height: 50px;
}

</style>