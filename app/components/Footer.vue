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
    <footer class = "footer text-black">
        <div class = "footer__container">
            <div class = "footer__copyright">
                <span class = "footer__copyright-text">Copyright <Copyright сдфыы :size=14></Copyright> 2026 Некоммерческая организация. Все права защищены. Все совпадения случайны.</span>
            </div>
            <Dialog>
                <DialogTrigger>Контакты</DialogTrigger>
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

.footer {
    background-color: var(--footer-main-color);
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: -1;
}

.footer__container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25%;
    padding-top: 5px;
    padding-bottom: 5px;
}

.footer__contacts {
    cursor: pointer;
}

.footer__contacts:hover {
    color: var(--footer-button-hover-color);
}

.modal__title {
    font-family: "SN Pro", sans-serif;
    font-size: 30px;
}

.modal__contact {
    margin-top: 100px;
}

.modal__contact-name {
    font-family: "Lato", sans-serif;
    display: flex;
    flex-direction: column;
}

.modal__contact-link {
    text-decoration: underline;
    color:black;
}

.modal__contact-link:hover {
    color: var(--modal-button-hover-color);
}

</style>