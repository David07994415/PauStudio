<script setup>
import IntroCard from '../components/IntroCard.vue'
import BtnItem from '../components/BtnItem.vue'
import CategoryImgCard from '../components/CategoryImgCard.vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { ref, onMounted, watch } from 'vue'
// import { Categories } from '../assets/globalData'
import { useVideoStore } from '../stores/video'

const videoStore = useVideoStore()
const Categories = videoStore.Categories

const route = useRoute();
const router = useRouter()
const simplifiedCategories = Categories.map(({ type, nameEn, nameCh, desc }) => ({ type, nameEn, nameCh, desc }));

const videoId = ref('');
const category = ref('');
const categoryName = ref('');
const isShowOneCategory = ref(false);
const seletedCategoryProducts = ref([]);

function chooseCategory(item) {
    const checkeCategory = Categories.find(c => c.type === item.type);
    if (!checkeCategory) {
        isShowOneCategory.value = false;
        return;
    }

    isShowOneCategory.value = true;
    seletedCategoryProducts.value = checkeCategory.products;
    category.value = checkeCategory.type;
}


onMounted(() => {
    if (route.query.type) {
        const checkeCategory = Categories.find(item => item.type === route.query.type);
        if (!checkeCategory) {
            router.push('/');
        }
        isShowOneCategory.value = true;
        seletedCategoryProducts.value = checkeCategory.products;
        category.value = route.query.type;
    }
});

</script>

<template>
    <main class="container-fluid mt-5">
        <IntroCard :head="'Pau Studio - 泡創影音'" :title="'作品分類'" :content="'提供多元影音技術服務'" />
        <section v-if="isShowOneCategory"
            class="d-flex flex-column justify-content-center align-items-center my-5 fade-in-effect">
            <div class="d-flex flex-row flex-wrap justify-content-center align-items-start gap-sm-3 gap-1 my-3">
                <BtnItem v-for="cate in simplifiedCategories" :key="cate.type" @btnClick="chooseCategory(cate)"
                    :is-active="cate.type == category" :text="cate.nameCh" />
            </div>
            <div
                class="d-flex flex-column flex-wrap flex-sm-row justify-content-center align-items-start ps-0 ps-sm-5 gap-3 gap-sm-0">
                <div v-for="product in seletedCategoryProducts" :key="product"
                    class="card-item-wrapper-product d-flex flex-column justify-content-start align-items-starts col-12 col-sm-4">

                    <RouterLink :to="{ path: '/product', query: { videoId: product.videoId, category: category } }">

                        <div class="card-item-image-wrapper card-item-image-wrapper-border">
                            <img class="card-image" :src="`https://i.ytimg.com/vi/${product.videoId}/maxresdefault.jpg`"
                                alt="Image">
                            <div class="card-item-image-wrapper-overlay">
                                <span><i class="bi bi-play-circle"></i> Play Video</span>
                            </div>
                        </div>
                       
                        <!-- <p class="pt-2 card-name">{{ product }}</p> -->
                    </RouterLink>
                </div>
            </div>
        </section>
        <section v-if="!isShowOneCategory" class="row my-5 fade-in-effect">
            <div
                class="d-flex flex-column flex-wrap flex-sm-row justify-content-center align-items-center gap-0 gap-sm-0 p-0">
                <div v-for="category in simplifiedCategories" :key="category.type" @click="chooseCategory(category)"
                    class="card-item-wrapper-category d-flex flex-column justify-content-center  align-items-center col-12 col-sm-4">
                    <div class="card-item-image-wrapper">
                        <CategoryImgCard :name-ch="category.nameCh" :name-en="category.nameEn" :type="category.type" />
                    </div>
                    <!-- <p class="pt-2 card-name">{{ category.nameEn }}</p>
                    <p class="pt-1 card-desc">{{ category.desc }}</p> -->
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped>
.card-item-wrapper-product {
    padding: 1rem;
}

.card-item-wrapper-category {
    /* padding: 1rem; */
    overflow: hidden;
}

.card-item-image-wrapper {
    position: relative;
    max-width: 720px;
    scroll-snap-align: start;
    transition: all 0.5s ease-in-out;
}

.card-item-image-wrapper-border{
    border: 2px solid var(--main-word-color);
}

.card-item-image-wrapper-overlay{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color:var(--main-word-color);
  font-size: large;
  font-weight: 700;
}

.card-item-image-wrapper img {
    width: 100%;
}

.card-item-image-wrapper:hover {
    cursor: pointer;
    transform: scale(1.1);
    z-index: 10;
    font-size:larger;
    font-weight: 700;
}

.card-name {
    color: var(--main-word-color);
    font-weight: 700;
}

.card-desc {
    color: var(--sub-word-color);
}

</style>