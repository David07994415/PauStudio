<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

</script>

<template>
    <div class="mt-5">  <p>&nbsp;</p></div>
    <main class="container mt-5">
        <section class="back-section row">
            <RouterLink class="col-2 offset-1" to="/">&#10094; Back to Home</RouterLink>
            <!-- <a class="col-2 offset-1" href="index.html#cards-section">&#10094; Back to Home</a> -->
        </section>
        <section class="info-section row my-4">
            <div class="col-6 offset-1">
                <h2 class="fs-3 fw-bold" id="title">Video Title</h2>
                <div class="info-image-card-wrapper mt-2">
                     <!-- <img class="info-image" src="../assets/image2.png" alt="Image 2"> -->
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/uIatCAvom6Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
            <div class="col-1 d-flex justify-content-center align-items-center">
                <div class="info-border h-100"></div>
            </div>
            <div class="info-text col-2">
                <h3 class="fs-5 fw-bold">Description</h3>
                <p class="fs-6 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas tempore praesentium incidunt eum provident libero, enim aspernatur sapiente et odit est quasi esse veniam explicabo. Eum nihil sed modi quasi.</p>
            </div>
        </section>
    </main>
</template>