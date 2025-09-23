<script setup>
import { ref,onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import HeaderPart from './components/Header.vue'
import Loading from './components/Loading.vue'
import { useVideoStore } from './stores/video'

const videoStore = useVideoStore()
const isLoading = ref(true);

onMounted(async () => {
  videoStore.fetchVideo()
  // .then(res=>{
  //   console.log(res)
  // })
  // console.log(fetchResult)
  // isLoading.value = fetchResult.isLoading;

})


</script>

<template>
  <Loading :is-loading="videoStore.isLoading"/>
  <HeaderPart />
  <RouterView />
</template>

<style scoped>

</style>
