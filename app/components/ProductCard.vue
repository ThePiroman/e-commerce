<script setup lang="ts">
const props = defineProps<{
    productId: string,
    name: String | undefined, // adding undefined fixes errors when using on pages
    price: number | undefined,
    image: string | undefined
}>()

</script>

<template>
    <div class="card">
        <div class="card__favorite">
            <button class="card__button">
                <img src = ~/assets/favorite.svg>
            </button>
        </div>
        <a class="card__image">
            <img :src=image>
        </a>
        <h1 class="card__price">{{price}} $</h1>
        <p class="card__name">
            <NuxtLink class ="card__link" :to="{name: 'id', params: {id: productId}}">{{ name }}</NuxtLink>
        </p>
        <div class="card__footer">
            <span class="card__rating"><img src = ~/assets/rating.svg>5.0</span>
            <span class="card__reviews"><img src = ~/assets/review.svg>2525</span>
        </div>
    </div>
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Roboto:ital,wght@0,100..900;1,100..900&family=Tiny5&display=swap');
@import url('https://fonts.googleapis.com/css2?family=SN+Pro:ital,wght@0,200..900;1,200..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=SN+Pro:ital,wght@0,200..900;1,200..900&display=swap');

.card {
    position: relative;
    background-color: whitesmoke;
    width: 256px;
    height: auto;
}

.card__image img {
    width: 256px;
    height: 256px;
}

.card__price {
    font-family: "Oswald", sans-serif;
    font-weight: 500;
    margin-top: 0;
    margin-bottom: 0;
}

.card__name {
    font-size: xx-large;
    font-family: "SN Pro", sans-serif;
    font-weight: 300;
    margin-top: 0;
    margin-bottom: 20px;
}

.card__link {
    text-decoration: none;
    color:inherit;
}

.card__favorite {
    position: absolute;
    left: 215px;
    top: 5px;
}

.card__button {
    border: none;
    background-color: rgba(255, 255, 255, 0);
    cursor: pointer;
}

.card__button img {
    width: 32px;
    height: 32px;
}

.card__footer {
    display: inline-flex;
    gap: 32px;
    text-align: left;
    font-family: "Lato", sans-serif;
}

.card__rating img {
    width: 16px;
    height: 16px;
}

.card__reviews img {
    width: 14px;
    height: 14px;
}


</style>