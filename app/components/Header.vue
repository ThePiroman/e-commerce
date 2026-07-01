
<script setup lang="ts">
import { Search, ShoppingBasket, TextAlignJustify, UserRound, X } from 'lucide-vue-next';

import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { useRouter } from 'vue-router';


const headerSearchValue = shallowRef('');
const step = shallowRef(1)
const phone = shallowRef('')
const otpCode = shallowRef('')
const loading = shallowRef(false)
const errorMessage = shallowRef('')
const router = useRouter()

function handleSubmit() : void {
    if (!headerSearchValue.value) {
        return;
    }

    useRouter().push(`search/queryParam?${translit(headerSearchValue.value.toLowerCase())}`);
        
}

// Используем useCookie для SSR-совместимого хранения сессии
const tokenCookie = useCookie('auth_token', { maxAge: 60 * 60 * 24 * 7 }) // 7 дней

const requestOtp = async () => {
  loading.value = true
  errorMessage.value = ''
  try {
    await $fetch('/api/auth/send_otp', {
      method: 'POST',
      body: { phone: phone.value }
    })
    step.value = 2
  } catch (err) {
    errorMessage.value = err.data?.statusMessage || 'Ошибка отправки кода'
  } finally {
    loading.value = false
  }
}

const verifyOtp = async () => {
  loading.value = true
  errorMessage.value = ''
  try {
    const response = await $fetch('/api/auth/verify_otp', {
      method: 'POST',
      body: { phone: phone.value, code: otpCode.value }
    })
    
    // Сохраняем токен в куки
    tokenCookie.value = response.token
    
    // Перенаправляем на главную страницу или в профиль
    router.push('profile')
  } catch (err) {
    errorMessage.value = err.data?.statusMessage || 'Неверный код'
  } finally {
    loading.value = false
  }
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
            <Dialog>
                <DialogTrigger>
                    <div class = "flex flex-col text-center items-center cursor-pointer">
                        <UserRound color="white" :size=32></UserRound>
                        <span class = "text-[var(--header-main-font)] text-[14px] text-[var(--header-label-color)]">Личный кабинет</span>
                    </div>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                    <DialogTitle>Вход и регистрация</DialogTitle>
                    <DialogDescription>
                        <form @submit.prevent="requestOtp" v-if="step === 1">
                            <input 
                                v-model="phone" 
                                type="tel" 
                                placeholder="+7 (999) 000-00-00" 
                                required
                            />
                            <button type="submit" :disabled="loading">
                                Получить код
                            </button>
                            </form>

                            <form @submit.prevent="verifyOtp" v-else>
                            <p>Код отправлен на {{ phone }}</p>
                            <input 
                                v-model="otpCode" 
                                type="text" 
                                placeholder="123456" 
                                required 
                            />
                            <button type="submit" :disabled="loading">
                                Подтвердить
                            </button>
                            <button type="button" @click="step = 1">Изменить номер</button>
                            </form>
                            
                            <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
                    </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    </header>
</template>

<style>
</style>