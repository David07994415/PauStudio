<script setup>
import { defineProps,defineEmits } from 'vue';
const props = defineProps({
    text: { type: String, required: true },
    isActive: { type: Boolean, required: false, default: false },
    isDisable: { type: Boolean, required: false, default: false },
    isInfor: { type: Boolean, required: false, default: false },
})

const emits = defineEmits(['btnClick']);

</script>

<template>
    <button v-if="!isInfor" :class="['btn btn-secondary fw-bold', { 'btn-non-active': !props.isActive }]" @click="emits('btnClick')">
        {{ props.text }}
    </button>
    <div v-if="isInfor" :class="['fw-bold btn-for-infor']">
        {{ props.text }}
    </div>
</template>

<style scoped>
.btn-non-active {
    background-color: var(--main-word-color);
    /* border-color: var(--sub-color);
    border-style: solid; */
    color: var(--sub-color);
    font-weight: 400;
}

.btn-for-infor {
    padding: 0.5rem 0 0.5rem 0.5rem;
    color: var(--main-word-color);
    font-weight: 700;
    border-left: 2px solid var(--sub-color);
}
</style>