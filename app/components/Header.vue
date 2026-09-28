
<script setup lang="ts">
import { ShoppingBasket, TextAlignJustify, UserRound } from 'lucide-vue-next';

import { Button } from '@/components/ui/button';
import { Field } from '@/components/ui/field';
import { Input } from '@/components/ui/input';

import { FetchError } from 'ofetch';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';



const headerSearchValue = shallowRef('');
const step = shallowRef(1);
const phone = shallowRef('');
const otpCode = shallowRef('');
const loading = shallowRef(false);
const errorMessage = shallowRef('');
const name = shallowRef('');

const otpShow = shallowRef('');


const router = useRouter();

const { isAuthenticated, user, userName } = useAuth();


function handleSubmit() : void {
  if (!headerSearchValue.value) {
    return;
  }

  useRouter().push(`search/queryParam?${translit(headerSearchValue.value.toLowerCase())}`);
        
}

const tokenCookie = useCookie('auth_token', { maxAge: 60 * 60 * 24 * 7 });

function goToProfile() {
  useRouter().push('profile');
}

const requestOtp = async () => {
  loading.value = true;
  errorMessage.value = '';
  try {
    const response = await $fetch('/api/auth/send_otp', {
      method: 'POST',
      body: { phone: phone.value }
    });


    otpShow.value = response.code;

    step.value = 2;
  } catch (err) {
    if (err instanceof FetchError) {
      errorMessage.value = err.statusMessage || 'Ошибка отправки кода';
    }
  } finally {
    loading.value = false;
  }
};

const verifyOtp = async () => {
  loading.value = true;
  errorMessage.value = '';
  try {
    const response = await $fetch('/api/auth/verify_otp', {
      method: 'POST',
      body: { phone: phone.value, code: otpCode.value }
    });

    const nameResponse = await $fetch('/api/auth/verify_name', {
      method: 'POST',
      body: { phone: phone.value }
    });

    
    if (nameResponse.success && response.success) {

      authorize(response);

    } else {

      step.value = 3; 
      
    }

    
  } catch (err) {

    if (err instanceof FetchError) {

      errorMessage.value = String(err.statusMessage) || 'Неверный код';

    }
    
  } finally {
    loading.value = false;
  }
};

const setName = async() => {
  errorMessage.value = '';
  try {

    const response = await $fetch('/api/auth/set_name', {
      method: 'POST',
      body: { phone: phone.value, name: name.value }
    });

    authorize(response);

  } catch (err) {
    if (err instanceof FetchError) {

      errorMessage.value = String(err.statusMessage) || 'Ошибка при подтверждении имени';
    }
  }
};

function authorize(response : ResponseUser) {
  tokenCookie.value = response.token;

  user.value = response.user;

  userName.value = response.user.name;

  step.value = 1;

  router.push('profile');
}

</script>

<template>
    <header class = "bg-header">
        <div class = "flex justify-center items-center gap-[20px] pt-[10px]">

            <NuxtLink to="/" class="mb-[10px] no-underline font-header text-[32px] text-color-logo">E-Commerce</NuxtLink>

            <div>
                <button class = "cursor-pointer bg-transparent"><TextAlignJustify color="white" :size=44></TextAlignJustify></button>
            </div>

            <Field orientation="horizontal" class = "w-128">

                <Input v-model="headerSearchValue" @keydown.enter="handleSubmit" type="search" placeholder="Поиск..." />
                <Button  @click="handleSubmit">Поиск</Button>

            </Field>

            <div class = "flex flex-col text-center items-center cursor-pointer">

                <ShoppingBasket color="white" :size=32></ShoppingBasket>
                <span class = "font-header text-[14px] text-header-label">Корзина</span>

            </div>

            <Dialog v-if="!isAuthenticated">

                <DialogTrigger>

                    <div class = "flex flex-col font-center items-center cursor-pointer">

                        <UserRound color="white" :size=32></UserRound>
                        <span class = "font-header text-[14px] text-header-label">Личный кабинет</span>

                    </div>

                </DialogTrigger>

                <DialogContent>

                    <DialogHeader>

                        <DialogTitle>Вход и регистрация</DialogTitle>

                        <DialogDescription>

                            <form class="flex flex-col items-center pt-5 gap-5" @submit.prevent="requestOtp" v-if="step === 1">

                                <input class="bg-footer text-black" v-model="phone" type="tel" placeholder="+7 (999) 000-00-00" required/>
                                <Button size="sm" type="submit" :disabled="loading">Получить код</Button>

                            </form>

                            <form class="flex flex-col items-center pt-5 gap-5" @submit.prevent="verifyOtp" v-if="step === 2">

                                <p>Код отправлен на {{ phone }}</p>
                                <p>Код: {{ otpShow }}</p>
                                <input class="bg-footer text-black" v-model="otpCode" type="text" placeholder="1234" required />
                                
                                <Button size="sm" type="submit" :disabled="loading">Потвердить</Button>

                                <Button size="sm" type="button" @click="step = 1">Изменить номер</Button>
                                

                            </form>

                            <form class="flex flex-col items-center pt-5 gap-5" @submit.prevent="setName" v-if="step === 3">

                              <input class="bg-footer text-black" v-model="name" type="text" placeholder="Имя" required/>
                              <Button size="sm" type="submit" :disabled="loading">Потвердить</Button>

                            </form>
                                
                            <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

            <div v-else @click="goToProfile" class = "flex flex-col text-center items-center cursor-pointer">

                <UserRound color="white" :size=32></UserRound>
                <span class = "font-header text-[14px] text-header-label">{{ userName }}</span>

            </div>
        </div>
    </header>
</template>

<style>
</style>