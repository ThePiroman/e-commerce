<script setup lang="ts">
import { useRoute } from 'vue-router';
import { Star } from 'lucide-vue-next';
import type { Image } from '@commercetools/platform-sdk';

const route = useRoute()

const { data: product } = await useFetch(`/api/${route.params.id}`)

useHead({
  title: `Купить`,
})

let images = <string[]>[];

product.value?.images.forEach((element: Image) => {
    images.push(element.url)
})


</script>

<template>
    <h2>Товар</h2>
    <div class = "product">
        <Carousel :images=images :img-height=512 :img-width=512></Carousel>
        <div class = "product__details">
            <h1 class = "product__name">{{ product?.name }}</h1>
            <span class="product__rating"><Star :size="16"></Star>5.0</span>
            <div class = "product__specifics">
                <h2 class = "product__specifics-title">Характеристики</h2>
                <div class = "product__specifics-container">
                    <div v-for="att in product?.attributes" class = "product__spec product__spec--border">
                        <span class = "product__spec-name">{{att.name}}</span>
                        <span class = "product__spec-details">{{att.value}}</span>
                    </div>
                    <div v-for="att in product?.variantAttributes" class = "product__spec product__spec--border">
                        <span class = "product__spec-name">{{att.name}}</span>
                        <span class = "product__spec-details">{{att.value}}</span>
                    </div>
                </div>
            </div>
            <div class = "product__description">
                <h2 class = "product__description-title">Описание</h2>
                <p class = "product__description-paragraph">{{ product?.description }}</p>
            </div>
        </div>
        <div class = "product__order">
            <h2 class = "product__price">{{ product?.price?.centAmount }}$</h2>
            <div class = "product__order-actions">
                <button class = "product__order-button">Заказать</button>
            </div>
        </div>
    </div>
    <LinkHolder>
        <NuxtLink class="testroute__link" to="testroute">To test route</NuxtLink>
    </LinkHolder>
</template>

<style>
.product {
    background-color: rgb(255, 241, 214);
    display: flex;
    gap: 5%;
    margin-left: 5%;
}

.product__details {
    margin-left: 0%;
}

.product__name {
    font-size: xx-large;
    font-family: "SN Pro", sans-serif;
    font-weight: 300;
}

.product__rating {
    text-align: left;
    font-family: "Lato", sans-serif;
}

.product__order {
    background-color: wheat;
    width: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.product__order-button {
    border-radius: 20px;
    font-weight: 600;
    border: none;
    background-color: darkslategrey;
    color: white;
    cursor: pointer;
    width: 100%;
    height: 50px;
}

.product__order-button:hover {
    background-color: rgb(36, 59, 59);
}

.product__order-actions {
    width: 50%;
    height: 100%;
}

.product__price {
    font-family: "Oswald", sans-serif;
    font-weight: 500;
}

.product__specifics-container {
    width: 125%;
    height: 125%;
}

.product__spec {
    margin-bottom: 50px;
}

.product__spec--border {
    border-top: .5px dashed;
}

.product__spec-name {
    margin-right: 100px;
}

.product__description {
    width: 512px;
}

.product__description-paragraph {
    line-break: anywhere;
}


</style>