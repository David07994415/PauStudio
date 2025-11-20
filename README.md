## 開發框架：
### 前端：
![vue3](https://img.shields.io/badge/Vue.js-4FC08D?logo=vuedotjs&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
- **Vue3**：前端框架搭配 `pinia` 套件進行狀態管理
- **Boostrap**：`CSS 樣式`管理
- **Vite**：建構工具

### 後端 API：
![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white)
![YouTube](https://img.shields.io/badge/YouTube-FF0000?logo=youtube&logoColor=white)


- **Vercel**：`Severless API`部署平台
- **Express**：整合 Youtuber API 資訊
- **Youtube**：串接後台

### 前端部署：
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-181717?logo=github&logoColor=white)
- **Github Page**：串接 `正式DNS`

## 相關連結：
- **正式平台網址**：https://paustudio.net/
<div style="max-width:500px">
    <img src="public/Cover.png">
</div>

## 主要功能：
1. **前台**：提供使用者查閱 Studio 作品資訊
2. **API**：提供前台串接 Youtube 後台影片與 setting 資料

## 專案架構
```
├── eslint.config.js
├── index.html
├── jsconfig.json
├── package-lock.json
├── package.json
├── public
├── src
|  ├── App.vue
|  ├── assets
|  |  ├── base.css
|  |  ├── globalData.js
|  |  └── style.css
|  ├── components
|  |  ├── BrandSlider.vue
|  |  ├── BtnItem.vue
|  |  ├── CategoryImgCard.vue
|  |  ├── ContactInfo.vue
|  |  ├── Footer.vue
|  |  ├── Header.vue
|  |  ├── IconCard.vue
|  |  ├── icons
|  |  ├── IntroCard.vue
|  |  ├── Loading.vue
|  |  └── ToTop.vue
|  ├── main.js
|  ├── router
|  |  └── index.js
|  ├── stores
|  |  └── video.js
|  └── views
|     ├── CategoryView.vue
|     ├── ContactView.vue
|     ├── HomeView.vue
|     └── ProductView.vue
└── vite.config.js
```