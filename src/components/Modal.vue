<template>
    <div class="modal flex justify-center items-center z-50 absolute w-full h-full top-0 bg-black bg-opacity-90">
        <div class="modal-content flex flex-col justify-center rounded-lg w-80 py-10 px-8 bg-gray-200">
            <p class="text-center">{{ this.modalMessage }}</p>
            <button class=" self-center text-white bg-black rounded-full px-10 py-3 w-full max-w-sm" @click="closeModal">Luk</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ["modalMessage"],
    methods: {
        closeModal() {
            this.$emit("close-modal");
        },
    },
};
</script>