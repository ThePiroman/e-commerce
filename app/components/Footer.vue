<script setup lang="ts">
import { Copyright } from 'lucide-vue-next';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


</script>

<template>
    <footer class = "bg-[var(--footer-main-color)] absolute left-0 bottom-0 w-full -z-10 text-black">
        <div class="flex justify-center items-center gap-[25%] pt-[5px] pb-[5px]">
            <div>
                <span>Copyright <Copyright :size=14></Copyright> 2026 Некоммерческая организация. Все права защищены. Все совпадения случайны.</span>
            </div>
            <Dialog>
                <DialogTrigger class="text-black hover:text-[var(--footer-button-hover-color)] transition-colors duration-200 cursor-pointer">Контакты</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                    <DialogTitle>ThePiroman</DialogTitle>
                    <DialogDescription>
                        <a class = "modal__contact-link" href="https://github.com/ThePiroman">Github</a>
                        <a class = "modal__contact-link" href="https://t.me/ThePiromanl">Telegram</a>
                    </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    </footer>
</template>


<style>
</style>