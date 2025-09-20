<script setup>
import ContactInfo from '../components/ContactInfo.vue'
import IntroCard from '../components/IntroCard.vue'
import { ref,onMounted } from 'vue'

</script>

<template>
    <main class="container mt-5">
        <IntroCard :head="'Pau Studio - 泡創影音'" :title="'聯繫資訊'" />
        <section class="row">
            <ContactInfo class="offset-1" />
        </section>
    </main>
</template>