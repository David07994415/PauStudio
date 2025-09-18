<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const isShowToggler = ref(true);

function togglerOpen(){
    isShowToggler.value= false;
}

function togglerClose(){
    isShowToggler.value= true;
}

</script>

<template>
    <header class="overlay-header">
        <div class="d-flex justify-content-between align-items-center px-2">
            <div class="d-none d-sm-block">Logo</div>
            <nav class="navbar p-sm-2">
                <button @click="togglerOpen" v-show="isShowToggler" class="navbar-toggler-open d-sm-none" type="button">☰</button>
                <button @click="togglerClose" v-show="!isShowToggler" 
                :class="{
                    'navbar-toggler-close': true,
                    'd-none': isShowToggler,
                    'd-sm-none': true
                }" type="button">X</button>

                <div :class="{
                    'nav-links': true,
                    'd-none': isShowToggler,
                    'd-flex': true,
                    'd-sm-flex': true, 
                    'flex-column': true,
                    'align-items-end': true, 
                    'flex-sm-row': true, 
                    'gap-4': true,
                    'gap-sm-3': true,
                }" >
                <!-- class="nav-links d-none d-flex d-sm-flex flex-column align-items-end flex-sm-row gap-4 gap-sm-3"> -->
                    <RouterLink to="/">Home</RouterLink>
                    <RouterLink to="/Category">Category</RouterLink>
                    <RouterLink to="/Contact">Contact</RouterLink>
                </div>
            </nav>
        </div>
    </header>
</template>