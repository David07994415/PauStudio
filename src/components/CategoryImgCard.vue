<script setup>
import { defineProps, defineEmits } from 'vue';
const props = defineProps({
    type: { type: String, required: true },
    nameEn: { type: String, required: true },
    nameCh: { type: String, required: true },
})

function getImagePath(title) {
    return new URL(`../assets/categoryImg/${title}.jpg`, import.meta.url).href;
}

</script>

<template>
    <img class="" :src="getImagePath(type)" alt="Image">
    <div class="card-item-image-name-wrapper">
        <span class="card-item-image-name">{{ nameEn }}</span>
        <span class="card-item-image-name">{{ nameCh }}</span>
    </div>
</template>


<style scoped>

img {
    width: 100%;
}

.card-item-image-name-wrapper {
    position: absolute;
    color: var(--main-word-color);
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    justify-content: center;
    /* 水平置中 */
    align-items: center;
    /* 垂直置中 */
}
</style>