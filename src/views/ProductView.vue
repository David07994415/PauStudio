<script setup>
import IntroCard from '../components/IntroCard.vue'
import ContactInfo from '../components/ContactInfo.vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import axios from 'axios';
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
const videoTitle = ref('');
const videoDesc = ref('');
const videoPubTime = ref('');

async function getYoutubeData(videoId) {
    try {
        const apiRootUrl = 'https://project-vercel-gules-kappa.vercel.app'
        const payload = { "videoId": videoId }
        const response = await axios.post(`${apiRootUrl}/api/video`, payload)
        if (response.status == 200) {
            videoTitle.value = response.data.title ?? '';
            videoDesc.value = response.data.description ?? '';
            videoPubTime.value = response.data.publishedAt ?? '';
            return true;
        } else {
            console.error('error:', '')
            return false;
        }
    } catch (error) {
        console.error('error:', error)
        return false;
    }
}


onMounted(async () => {
    videoId.value = route.query.videoId;
    category.value = route.query.category;
    const checkCategory = Categories.find(item => item.type === category.value);

    console.log(checkCategory)
    if (!checkCategory) {
        router.push('/');
    }

    categoryName.value = checkCategory.nameEn + ' ' + checkCategory.nameCh;

    const checkVideo = checkCategory.products.find(item => item.videoId === videoId.value);
    if(!checkVideo){
        router.push('/');
    }else{
        videoTitle.value = checkVideo.title ?? '';
        videoDesc.value = checkVideo.desc ?? '';
    }

    // let result = await getYoutubeData(videoId.value);
    // if(result==false){
    //     router.push('/');
    // }
});
</script>

<template>
    <main class="container-fluid mt-5">
        <section class="back-section row">
            <div class="offset-1 col-11 justify-content-start align-items-center gap-1 p-0">
                <RouterLink to="/">< Back to Home</RouterLink>
                <span> / </span>
                <RouterLink :to="{ path: '/category', query: { type: category } }">{{ categoryName }}</RouterLink>
            </div>
        </section>
        <section
            class="offset-1 iframe-section d-flex justify-content-start align-items-start flex-sm-row flex-column my-4 gap-3">
            <div class="p-0 col-10 col-sm-6">
                <!-- <h2 class="fs-3 fw-bold" id="title">{{videoTitle}}</h2> -->
                <div class="iframe-wrapper mt-2 ratio ratio-16x9">
                    <!-- width="560" height="315" -->
                    <iframe :src="`https://www.youtube.com/embed/${videoId}`" title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
            <div class="info-text-wrapper col-10 col-sm-4 fade-in-effect">
                <h3 class="fs-5 fw-bold" id="title">{{videoTitle}}</h3>
                <p class="fs-6 mt-3 line-breaker">{{ videoDesc }}</p>
            </div>
        </section>

        <section class="contact-section my-5">
            <div class="d-flex flex-column justify-content-center align-items-start align-items-sm-center">
                <div class="d-flex justify-content-center align-items-center section-title w-100">
                    <h3 class="fs-4">聯繫資訊</h3>
                </div>
                <ContactInfo />
            </div>
        </section>
    </main>
</template>


<style scoped>
.iframe-wrapper {
    max-width: 1080px;
}

.info-text-wrapper {
    position: relative;
    padding-left: 1rem;
}

.info-text-wrapper:after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 2px;
    content: "";
    border-left: 2px solid var(--main-word-color);
    animation: line-draw 1.5s forwards;
}

@keyframes line-draw {
    from {
        height: 0;
    }

    to {
        height: 100%;
    }

}

.section-title {
    padding: 1rem;
    font-weight: 700;
    margin-bottom: 0.5rem
}


.line-breaker{
    white-space: pre-line;
}
</style>