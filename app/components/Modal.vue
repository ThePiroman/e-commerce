<script setup lang="ts">
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
    <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
            </DialogDescription>
            </DialogHeader>
        </DialogContent>
    </Dialog>
</template>


<style>

.modal {
    display: flex;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    justify-content: center;
    align-items: center;
}

.modal__backdrop {
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 1;
}

.modal__dialog {
    background-color: var(--modal-main-color);
    border-radius: 5%;
    text-align: center;
    width: 500px;
    height: 500px;
    padding-top: 50px;
    z-index: 2;
}

.modal__close-button {
    background-color: var(--modal-main-color);
    border-radius: 75%;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-left: 15px;
    margin-bottom: 450px;
    z-index: 2;
}

.modal__close-button:hover {
    background-color: var(--modal-close-button-hover-color);
}


</style>