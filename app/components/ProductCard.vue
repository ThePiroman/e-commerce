<script setup lang="ts">
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Heart, Star, MessageCircle } from 'lucide-vue-next'

defineProps<{
  productId: string | number
  image: string
  price: number
  name: string
}>()
</script>

<template>
  <Card class="w-[256px] relative bg-[var(--product-card-color)] text-black">
    
    <!-- Favorite -->
    <div class="absolute right-3 top-3 z-10">
      <Button variant="ghost" size="icon">
        <Heart class="size-8" />
      </Button>
    </div>

    <!-- Image -->
    <NuxtLink :to="{ name: 'id', params: { id: productId } }">
      <NuxtImg
        :src="image"
        width="256"
        height="256"
        class="aspect-square w-full object-cover rounded-t-xl"
      />
    </NuxtLink>

    <CardContent class="pt-4 space-y-2">
      <h2 class="text-2xl font-semibold">
        {{ price }} $
      </h2>

      <p class="text-muted-foreground line-clamp-2">
        <NuxtLink :to="{ name: 'id', params: { id: productId } }">
          {{ name }}
        </NuxtLink>
      </p>
    </CardContent>

    <CardFooter class="flex justify-between text-sm text-muted-foreground">
      <span class="flex items-center gap-1">
        <Star class="w-4 h-4" />
        5.0
      </span>

      <span class="flex items-center gap-1">
        <MessageCircle class="w-4 h-4" />
        2525
      </span>
    </CardFooter>
  </Card>
</template>