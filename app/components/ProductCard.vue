<script setup lang="ts">
import { Heart } from 'lucide-vue-next';
import { Star } from 'lucide-vue-next';
import { MessageCircle } from 'lucide-vue-next';

const props = defineProps<{
    productId: string,
    name?: String,
    price?: number,
    image?: string
}>()

</script>

<template>
    <div class="card">
        <div class="card__favorite">
            <button class="card__button">
                <Heart :size="28"></Heart>
            </button>
        </div>
        <NuxtLink class="card__image" :to="{name: 'id', params: {id: productId}}">
            <NuxtImg :width="256" :height="256" :src=image></NuxtImg>
        </NuxtLink>
        <h2 class="card__price">{{price}} $</h2>
        <p class="card__name">
            <NuxtLink class ="card__link" :to="{name: 'id', params: {id: productId}}">{{ name }}</NuxtLink>
        </p>
        <div class="card__footer">
            <span class="card__rating"><Star :size="16"></Star>5.0</span>
            <span class="card__reviews"><MessageCircle :size="16"></MessageCircle>2525</span>
        </div>
    </div>
</template>


<style lang="scss">

.card {
    position: relative;
    background-color: var(--product-card-color);
    width: 256px;
    height: auto;
}

.card__price {
    @include product-card-price;
    margin-top: 0;
    margin-bottom: 0;
}

.card__name {
    @include product-card-title;
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

.card__footer {
    display: inline-flex;
    gap: 32px;
    text-align: left;
    font-family: var(--product-footer-font);
}


</style>