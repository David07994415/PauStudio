<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const isShowToggler = ref(true);

function togglerOpen() {
    if (document.startViewTransition) {
        document.startViewTransition(() => {
            isShowToggler.value = false;;
        });
    } else {
        isShowToggler.value = false;
    }
}

function togglerClose() {
    if (document.startViewTransition) {
        document.startViewTransition(() => {
            isShowToggler.value = true;
        });
    } else {
        isShowToggler.value = true;
    }
}
</script>

<template>
    <header class="overlay-header">
        <div class="d-flex justify-content-between align-items-center px-2">
            <div class="logo-wrapper">
                <RouterLink to="/">
                    <img src="../assets/PAU STUDIO LOGO_white.png">
                </RouterLink>
            </div>
            <nav class="navbar p-sm-2">
                <button @click="togglerOpen" v-show="isShowToggler" class="navbar-toggler-open d-sm-none"
                    type="button">☰</button>
                <button @click="togglerClose" v-show="!isShowToggler" :class="{
                    'navbar-toggler-close': true,
                    'd-none': isShowToggler,
                    'd-sm-none': true
                }" type="button">X</button>

                <div :class="['nav-links d-flex d-sm-flex flex-column align-items-end flex-sm-row gap-4 gap-sm-3', {
                    'd-none': isShowToggler,
                }]">
                    <RouterLink @click="togglerClose" to="/">Home</RouterLink>
                    <RouterLink @click="togglerClose" to="/category">Category</RouterLink>
                    <RouterLink @click="togglerClose" to="/contact">Contact</RouterLink>
                </div>
            </nav>
        </div>
    </header>
</template>

<style scoped>
.overlay-header {
    width: 100%;
    z-index: 15;
    position: relative;

    background: linear-gradient(to bottom, var(--main-color-overlap), rgba(0, 0, 0, 0));
    background-color: var(--main-color-overlap);
    text-align: center;
    padding: 1rem;
}

.navbar-toggler-open,
.navbar-toggler-close {
    color: var(--sub-word-color);
}

.nav-links {
    font-weight: 700;
    font-size: 1.5rem;
}

.logo-wrapper {
    max-width: 150px;
}

.logo-wrapper img {
    width: 100%;
}



/* 手機尺寸（小於 576px） */
@media (max-width: 575.98px) {
    .logo-wrapper {
        max-width: 100px;
    }

    .overlay-header {
        background-color: transparent;
    }

    /* 漢堡標示 */
    .navbar-toggler-open {
        position: fixed;
        font-size: 2rem;
        right: 1rem;
        top: 0.5rem;
        padding: 0.5rem 0.5rem;
        margin: 0;
        border: 0;
        background-color: transparent;
    }

    .navbar-toggler-close {
        position: fixed;
        font-size: 2rem;
        right: 1rem;
        top: 1rem;
        padding: 0.5rem 0.5rem;
        margin: 0;
        border: 0;
        background-color: transparent;
        z-index: 40;
    }

    /* 手機版本 nav */
    .nav-links {
        position: fixed;
        font-size: 1.5rem;
        right: 0rem;
        top: 0rem;
        width: 80%;
        padding: 4rem 2rem 2rem 2rem;
        margin: 1rem 0rem 0rem 0rem;
        border: 2px solid var(--main-word-color);
        border-right: none;
        border-top: none;
        background-color: var(--main-color-overlap-deep);
        border-radius: 1rem 0 0 1rem;
        z-index: 30;
    }

    .nav-links a {
        position: relative;
        width: 50%;
        text-align: right;
        padding-bottom: 0.5rem;
        color: var(--main-word-color);
    }

    .nav-links a::after {
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 2px;
        background-color: var(--sub-color);
        transform: scaleX(0);
        /* 初始為 0 寬度 */
        transform-origin: right;
        /* 從右邊開始展開 */
        transition: transform 0.3s ease;
        /* 動畫效果 */
    }

    .nav-links a:hover::after {
        transform: scaleX(1);
        /* 滑鼠移入時展開到底線全長 */
    }
}
</style>