<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    imgSrcs: { type: Array, required: true },
    dir: { type: String, required: true }
})
</script>

<template>
    <div class="brands-silder-wrapper fade-in-effect-brand ">
        <div :class="[props.dir === 'left' ? 'brands-slider-toleft' : 'brands-slider-toright']">
            <img v-for="(imgSrc, index) in props.imgSrcs" :key="index" :src="imgSrc">
        </div>
        <div :class="[props.dir === 'left' ? 'brands-slider-toleft' : 'brands-slider-toright']">
            <img v-for="(imgSrc, index) in props.imgSrcs" :key="index" :src="imgSrc">
        </div>
    </div>
</template>

<style scoped>
.brands-silder-wrapper {
    /* background-color: white; */
    overflow: hidden;
    padding: 2rem 0rem;
    margin: 0.5rem 0rem;
    white-space: nowrap;
    position: relative;
}

.brands-silder-wrapper::before,
.brands-silder-wrapper::after {
    position: absolute;
    content: "";
    top: 0;
    width: 15%;
    height: 100%;
    z-index: 2;
}

.brands-silder-wrapper::before {
    left: 0;
    background: linear-gradient(to left, rgba(255, 255, 255, 0), black);
}

.brands-silder-wrapper::after {
    right: 0;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), black);
}

.brands-slider-toright {
    display: inline-block;
    animation: 30s slide-toright infinite linear;
}

.brands-slider-toleft {
    display: inline-block;
    animation: 25s slide-toleft infinite linear;
}

@keyframes slide-toright {
    from {
        transform: translateX(-100%);
    }

    to {
        transform: translateX(0);
    }
}

@keyframes slide-toleft {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(-100%);
    }
}

/* .brands-silder-wrapper:hover .brands-slider {
    animation-play-state: paused;
} */


.brands-slider-toright img {
    height: 50px;
    margin: 0rem 1rem
}

.brands-slider-toleft img {
    height: 50px;
    margin: 0rem 1rem
}

.fade-in-effect-brand {
    animation: fadeIn linear both;
    animation-timeline: view(block);
    animation-range: cover 0% contain 30%;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

</style>