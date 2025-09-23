import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios';

export const useVideoStore = defineStore('video', () => {
    const TopProducts = ref([])
    const Categories = ref([])
    const isLoading = ref(false)

    async function fetchVideo() {
        isLoading.value = true
        try {
            const apiRootUrl = 'https://project-vercel-gules-kappa.vercel.app'
            const payload = {}
            const response = await axios.post(`${apiRootUrl}/api/playlist`, payload)
            if (response.status == 200) {
                let dataSet = response.data;
                dataSet.forEach(data => {
                    if (data.isTop) {
                        let newTopItem = {
                            videoId: data.videoId,
                            type: data.type,
                            position: data.position,
                            topOrder: data.topOrder
                        };
                        TopProducts.value.push(newTopItem)
                    }

                    let targetCategory = Categories.value.find(x => x.type == data.type);
                    if (!targetCategory) {
                        let newCategoryItem = {
                            type: data.type,
                            nameEn: data.name_en,
                            nameCh: data.name_ch,
                            desc: "類型描述",
                            products: [
                                {
                                    videoId: data.videoId,
                                    title: data.title,
                                    desc:data.description,
                                }
                            ]
                        };
                        Categories.value.push(newCategoryItem);
                    } else {
                        let newVideo = {
                            videoId: data.videoId,
                            title: data.title,
                            desc:data.description,
                        }
                        targetCategory.products.push(newVideo)
                    }

                });

                // reorder;
                TopProducts.value.sort((a, b) => a.topOrder - b.topOrder)
            } else {
                console.error('error:', '')
            }
        } catch (error) {
            console.error('error:', error)
        } finally {
            isLoading.value = false
        }
    }

    return { TopProducts, Categories, isLoading, fetchVideo }
})