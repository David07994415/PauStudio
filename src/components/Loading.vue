<script setup>
import { ref, defineProps } from 'vue'
const props = defineProps({
    isLoading: { type: Boolean, required: true, default: false },
})
</script>

<template>
    <div class="loading" v-if="props.isLoading">
        <div class="img_wrapper">
            <img class="spinner" src="../assets/PAU STUDIO LOGO_white_spin.png">
        </div>
        <div class="img_wrapper">
            <img class="" src="../assets/PAU STUDIO LOGO_white_spin_word.png">
        </div>
    </div>
</template>

<style scoped>
.loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    gap:0;
    z-index: 500;
}

.img_wrapper {
    max-width: 200px;
}

.img_wrapper img {
    max-width: 100%;
}

.spinner {
    animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>