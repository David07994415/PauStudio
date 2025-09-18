<script setup>
import { TopProducts,Categories} from '../assets/globalData'
import { RouterLink, RouterView } from 'vue-router'
import { ref,onMounted } from 'vue'

const topProds = ref([...TopProducts]);
const categories = ref([...Categories]);
const isShowTopProds = ref(true);
const isShowLeftBtn = ref(false);
const isShowRightBtn = ref(true);
const tracker = ref(null);
const scrollAmount = 300;

function ShowTopProds(){
    isShowTopProds.value = true;
}

function ShowCategories(){
    isShowTopProds.value = false;
}

function ClickLeftBtn(){
    tracker.value?.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
}

function ClickRightBtn(){
    tracker.value?.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}

function updateButtons() {
  const el = tracker.value;
  console.log(el);
  if (!el) return;

  const trackerRect = el.getBoundingClientRect();
  const lastCard = el.lastElementChild;
  const lastCardRect = lastCard?.getBoundingClientRect();

  const tolerance = 5;

  isShowLeftBtn.value = el.scrollLeft > tolerance;
  isShowRightBtn.value = lastCardRect?.right > trackerRect.right + tolerance;
}

onMounted(() => {
  updateButtons();

  tracker.value?.addEventListener('scroll', updateButtons);
});



</script>

<template>
  <main class="container-fluid p-0">
        <section class="video-section">
            <video autoplay muted loop playsinline>
                <source src="../assets/PAU_Studio_OP.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </section>
        <section class="intro-section d-flex flex-column justify-content-center align-items-start ps-5">
            <span class="fs-6">Out Now</span>
            <h2 class="fs-1 fw-bold mt-1">Pau Studio Pau Studio</h2>
            <p class="fs-6 mt-3 mt-sm-5 d-none d-lg-block">I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click
                “Edit Text” or double click me to add your own content and make changes to the font</p>
            <button class="mt-3 btn btn-secondary d-none d-lg-block">Learn More > </button>
        </section>
        <section class="cards-section d-flex flex-column justify-content-center gap-2 my-5" id="cards-section">
            <div class="cards-category d-flex justify-content-center align-items-center gap-2">
                <h3 @click="ShowTopProds" 
                    :class="{'fs-4':true,'active':isShowTopProds}" 
                    id="title"
                    >精選作品</h3>
                <span>|</span>
                <h3 @click="ShowCategories" 
                    :class="{'fs-4':true,'active':!isShowTopProds}" 
                    >作品分類</h3>
            </div>
            <div class="cards-wrapper">
                <button @click="ClickLeftBtn" v-show="isShowLeftBtn" class="carousel-btn left">&#10094;</button>
                <div v-if="isShowTopProds" ref="tracker" class="cards-tracker">
                    <div v-for="topProd in topProds" :key="topProd" class="card-item">
                        <RouterLink to="/product">
                             <img class="card-image" :src="`https://i.ytimg.com/vi/${topProd}/maxresdefault.jpg`" alt="Image">
                        </RouterLink>
                    </div>
                </div>
                <div v-if="!isShowTopProds" ref="tracker" class="cards-tracker">
                    <div v-for="category in categories" :key="category" class="card-item">
                        <RouterLink to="/category">
                            <img class="card-image" src="../assets/image2.png" alt="Image">
                             <!-- <img class="card-image" :src="`https://i.ytimg.com/vi/${topProd}/maxresdefault.jpg`" alt="Image"> -->
                        </RouterLink>
                    </div>
                </div>
                <button  @click="ClickRightBtn" v-show="isShowRightBtn"  class="carousel-btn right">&#10095;</button>
            </div>
        </section>
    </main>
</template>
