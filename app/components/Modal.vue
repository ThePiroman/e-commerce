<script setup lang="ts">
import { X } from 'lucide-vue-next';

const props = defineProps({
    modalKey: String
})

let modalOpen = useState(props.modalKey, () => false);

function handleClick() {
    modalOpen.value = false;
}

</script>

<template>
    <div class = "modal" v-if="modalOpen" v-on:click="handleClick">
        <div class = "modal__window" @click.stop>
            <slot></slot>
        </div>
        <div class = "modal__close-button" v-on:click="handleClick">
            <X color="white"></X>
        </div>
    </div>
</template>


<style>

.modal {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 0;
}

.modal__window {
    background-color: grey;
    border-radius: 5%;
    text-align: center;
    width: 500px;
    height: 500px;
    padding-top: 50px;
}

.modal__close-button {
    background-color: grey;
    border-radius: 75%;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-left: 15px;
    margin-bottom: 450px;
}

.modal__close-button:hover {
    background-color: lightgrey;
}


</style>