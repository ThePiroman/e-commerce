<script setup lang="ts">
import { useRoute } from 'vue-router';
import { Star } from 'lucide-vue-next';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const route = useRoute();

const fetchResult = await fetchSingleProduct(route.params.id);
const product = fetchResult.product;

useHead({
  title: `${product.value?.name ?? ''} купить быстро недорого`
});

</script>

<template>
    <h2>Товар</h2>
    <div class = "flex gap-[5%] bg-product-page text-black">
        <Carousel class="w-125 ml-25">
            <CarouselContent>
                <CarouselItem v-for="(img, index) in product?.images" :key="index">
                    <NuxtImg class = "size-128" :src=img></NuxtImg>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
        <div class = "ml-[0%]">
            <h1 class = "product__name">{{ product?.name }}</h1>
            <span class="text-left font-product-footer"><Star :size="16"></Star>5.0</span>
            <div>
                <h2>Характеристики</h2>
                <div class = "w-[125%] h-[125%]">
                    <div v-for="(att, index) in product?.attributes" :key="index" class = "mb-[50px] border-t border-dashed">
                        <span class="mr-[25%]">{{att.name}}</span>
                        <span>{{att.value}}</span>
                    </div>
                </div>
            </div>
            <div class = "w-[512px]">
                <h2>Описание</h2>
                <p>{{ product?.desc }}</p>
            </div>
        </div>
        <div class = "bg-product-order w-[15%] flex flex-col items-center">
            <h2 class = "product__price">{{ product?.price }}$</h2>
            <div class = "w-[50%] h-full">
                <button class = "rounded-[20px] font-[600] border-none bg-body text-white cursor-pointer w-full h-[50px] bg-product-order-button-hover transition-colors duration-200">Заказать</button>
            </div>
        </div>
    </div>
    <LinkHolder>
        <NuxtLink class="text-none text-inherit bg-[aliceblue]" to="testroute">To test route</NuxtLink>
    </LinkHolder>
</template>

<style lang="scss">

.product__name {
    @include product-card-title;
}


.product__price {
    @include product-card-price;
}



</style>