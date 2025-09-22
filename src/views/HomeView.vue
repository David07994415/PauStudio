<script setup>
import BrandSlider from '@/components/BrandSlider.vue';
import CategoryImgCard from '../components/CategoryImgCard.vue'
import ContactInfo from '../components/ContactInfo.vue'
import IntroCard from '../components/IntroCard.vue'

import { TopProducts, Categories, LogoSlider_First, LogoSlider_Second } from '../assets/globalData'
import { routeLocationKey, RouterLink, RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'

const topProds = ref([...TopProducts]);
const categories = ref([...Categories]);
const isShowTopProds = ref(true);
const isShowLeftBtn = ref(false);
const isShowRightBtn = ref(true);
const tracker = ref(null);
const scrollAmount = 300;
const imgSrcsFirst = ref([])
const imgSrcsSecond = ref([])

function ShowTopProds() {
    isShowTopProds.value = true;
}

function ShowCategories() {
    isShowTopProds.value = false;
}

function ClickLeftBtn() {
    tracker.value?.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    updateButtons()
}

function ClickRightBtn() {
    tracker.value?.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    updateButtons()
}

function updateButtons() {
    const el = tracker.value;
    if (!el) return;

    const trackerRect = el.getBoundingClientRect();
    const lastCard = el.lastElementChild;
    const lastCardRect = lastCard?.getBoundingClientRect();

    const tolerance = 5;

    isShowLeftBtn.value = el.scrollLeft > tolerance;
    isShowRightBtn.value = lastCardRect?.right > trackerRect.right + tolerance;
}

function getLogoImagePath(name) {
    // const baseUrl = import.meta.url;
    return new URL(`../assets/logoImg/${name}`, import.meta.url).href;
}

onMounted(() => {
    updateButtons();
    tracker.value?.addEventListener('scroll', updateButtons);
    imgSrcsFirst.value = LogoSlider_First.map(item => getLogoImagePath(item))
    imgSrcsSecond.value = LogoSlider_Second.map(item => getLogoImagePath(item))

});

</script>

<template>
    <main class="container-fluid p-0 video-section-wrapper">
        <section class="video-section">
            <video autoplay muted loop playsinline>
                <source src="../assets/PAU_Studio_OP.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </section>
        <!-- <section class="intro-section d-flex flex-column justify-content-center align-items-start ps-5">
            <span class="fs-6">Out Now</span>
            <h2 class="fs-1 fw-bold mt-1">Pau Studio Pau Studio</h2>
            <p class="fs-6 mt-3 mt-sm-5 d-none d-lg-block">I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click
                “Edit Text” or double click me to add your own content and make changes to the font</p>
            <button class="mt-3 btn btn-secondary d-none d-lg-block">Learn More > </button>
        </section> -->
        <section class="cards-section d-flex flex-column justify-content-center gap-2 my-5 fade-in-effect "
            id="cards-section">
            <div class="cards-category d-flex justify-content-center align-items-center gap-2">
                <h3 @click="ShowTopProds" :class="{ 'fs-4': true, 'active': isShowTopProds }" id="title">精選作品</h3>
                <span class='fs-4'>|</span>
                <RouterLink to="/category">
                    <h3 :class="{ 'fs-4': true, 'active': !isShowTopProds }">作品分類</h3>
                </RouterLink>
            </div>
            <div class="cards-wrapper">
                <button @click="ClickLeftBtn" v-show="isShowLeftBtn" class="carousel-btn left">&#10094;</button>
                <div v-if="isShowTopProds" ref="tracker" class="cards-tracker">
                    <div v-for="(topProd,index) in topProds" :key="topProd.videoId" class="card-item">
                        <RouterLink
                            :to="{ path: '/product', query: { videoId: topProd.videoId, category: topProd.type } }">
                            <img :class="['card-image', {'custom-position': index === 7 }]" :src="`https://i.ytimg.com/vi/${topProd.videoId}/maxresdefault.jpg`"
                                alt="Image">
                        </RouterLink>
                    </div>
                </div>
                <div v-if="!isShowTopProds" ref="tracker" class="cards-tracker">
                    <div v-for="(category,index) in categories" :key="category.type" class="card-item">
                        <RouterLink :to="{ path: '/category', query: { type: category.type } }">
                            <CategoryImgCard :name-ch="category.nameCh" :name-en="category.nameEn"
                            :type="category.type"/>
                        </RouterLink>
                    </div>
                </div>
                <button @click="ClickRightBtn" v-show="isShowRightBtn" class="carousel-btn right">&#10095;</button>
            </div>
        </section>
        <section class="brands-section my-5 fade-in-effect">
            <div class="d-flex justify-content-center align-items-center section-title">
                <h3 class="fs-4">合作品牌</h3>
            </div>
            <BrandSlider :dir="'right'" :imgSrcs="imgSrcsFirst" />
            <BrandSlider :dir="'left'" :imgSrcs="imgSrcsSecond" />
        </section>

        <section class="contact-section my-5">
            <div class="d-flex flex-column justify-content-center align-items-start align-items-sm-center ">
                <div class="d-flex justify-content-center align-items-center section-title w-100">
                    <h3 class="fs-4">聯繫資訊</h3>
                </div>
                <ContactInfo />
            </div>
        </section>

    </main>
</template>


<style scoped>
.video-section-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    /* z-index: 10; */
}

.video-section {
    width: 100%;
    position: relative;
}

.video-section video {
    width: 100%;
    height: auto;
    object-fit: contain;
}

.video-section::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 15%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
    pointer-events: none;
    z-index: 2;
}


/* Section Card  */
.cards-category h3,
span {
    color: var(--main-word-color);
}

.cards-category .active {
    color: var(--sub-color);
    font-weight: bold;
}

.cards-category h3:hover {
    cursor: pointer;
    color: var(--sub-color);
    font-weight: bold;
}

.cards-wrapper {
    position: relative;
    /* overflow: hidden; */
}

.card-item {
    padding: 1rem;
    flex: 0 0 auto;
    /* 不縮放、不撐滿，保持原始寬度 */
    max-width: 400px;
    /* 或你想要的固定寬度 */
    scroll-snap-align: start;
    /* 搭配 scroll-snap 對齊 */
    transition: all 0.5s ease-in-out;
    position: relative;
    aspect-ratio: 4 / 5;
    /* 設定容器為 4:5 比例 */
    overflow: hidden;
}

@media (max-width: 575.98px) {
    .card-item {
        padding: 0.1rem;
        max-width: 120px;
    }
}

.card-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* 裁切圖片以填滿容器 */
    object-position: center;
    /* 可調整裁切位置 */
}


.custom-position{
    object-position: right !important;
}

.card-item:hover {
    cursor: pointer;
    transform: scale(1.1);
}

.cards-tracker {
    display: flex;
    gap: 0rem;
    margin: 0rem 0rem;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    /* 隱藏滾動條 */
    scrollbar-width: none;
    /* Firefox */
    -ms-overflow-style: none;
    /* IE 10+ */
    /* 手機 滑動 */
    -webkit-overflow-scrolling: touch;
    touch-action: pan-x;
}

.cards-tracker::-webkit-scrollbar {
    display: none;
    /* Chrome, Safari */
}

.carousel-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: var(--main-color-overlap);
    border: none;
    color: white;
    font-size: 2rem;
    padding: 2rem 1rem;
    cursor: pointer;
    z-index: 20;
}

.carousel-btn:hover {
    color: var(--main-color);
}

.carousel-btn.left {
    left: 0px;
}

.carousel-btn.right {
    right: 0px;
}

/* Section Card  */


/* Section Brand */
.section-title {
    padding: 1rem;
    font-weight: 700;
    margin-bottom: 0.5rem
}

/* Section Brand */
</style>
