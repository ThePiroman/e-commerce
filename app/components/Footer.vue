<script setup lang="ts">
import { Copyright } from 'lucide-vue-next';

const contactsModalOpen = useState("contactsModalOpen", () => false);
</script>

<template>
    <Modal modal-key="contactsModalOpen">
        <span class = "modal__title">Разработчики</span>
        <div class = "modal__contact">
            <div class = "modal__contact-name"><a class = "modal__contact-link" href="https://github.com/NikitaStarmoussov">NikitaStarmoussov</a></div>
        </div>
        <div class = "modal__contact">
            <div class = "modal__contact-name"><a class = "modal__contact-link" href="https://github.com/StarmousovMihail">StarmousovMihail</a></div>
        </div>
        <div class = "modal__contact">
            <div class = "modal__contact-name"><a class = "modal__contact-link" href="https://github.com/ThePiroman">ThePiroman</a></div>
        </div>
    </Modal>
    <footer class = "footer">
        <div class = "footer__copyright">
            <span class = "footer__copyright-text">Copyright <Copyright :size=14></Copyright> 2026 Некоммерческая организация. Все права защищены. Все совпадения случайны.</span>
        </div>
        <div class = "footer__contacts" v-on:click="contactsModalOpen = true">
            <span class = "footer__contacts-text">Контакты</span>
        </div>
    </footer>
</template>


<style>

.footer {
    background-color: gainsboro;
    display: flex;
    justify-content: center;
    gap: 25%;
    padding-top: 5px;
    padding-bottom: 5px;
}

.footer__contacts {
    cursor: pointer;
}

.footer__contacts:hover {
    color:rgb(125, 125, 125);
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
}

.modal__contact-link {
    text-decoration: underline;
    color:black;
}

.modal__contact-link:hover {
    color:rgb(60, 60, 60);
}

</style>