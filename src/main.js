
import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'



const app = createApp(App)

// app.config.globalProperties.TopProducts = [, , 'cherry']
// app.config.globalProperties.Categories = [""]


app.use(router)
app.mount('#app')



const tracker = document.querySelector('.cards-tracker');
const btnLeft = document.querySelector('.carousel-btn.left');
const btnRight = document.querySelector('.carousel-btn.right');

const scrollAmount = 300; // 每次滑動的距離（px）

// 檢查並更新按鈕顯示狀態
function updateButtons() {
  // const scrollLeft = tracker.scrollLeft;
  // const maxScrollLeft = tracker.scrollWidth - tracker.clientWidth;

  // btnLeft.style.display = scrollLeft <= 0 ? 'none' : 'block';
  // btnRight.style.display = scrollLeft >= maxScrollLeft ? 'none' : 'block';
  const trackerRect = tracker.getBoundingClientRect();
  const lastCard = tracker.lastElementChild;
  const lastCardRect = lastCard.getBoundingClientRect();

  const tolerance = 5;

  // 左邊是否滑到底
  btnLeft.style.display = tracker.scrollLeft <= tolerance ? 'none' : 'block';

  // 右邊是否滑到底（比較最後一張卡片是否已進入視窗）
  btnRight.style.display = lastCardRect.right <= trackerRect.right + tolerance ? 'none' : 'block';
}



// 初始檢查
updateButtons();

btnLeft.addEventListener('click', () => {
  tracker.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

btnRight.addEventListener('click', () => {
  tracker.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

// 滾動事件（偵測使用者手動滑動）
tracker.addEventListener('scroll', updateButtons);





// 漢堡控制
// const toggleBtn = document.getElementById('menuToggle');
const toggleBtn = document.getElementsByClassName('navbar-toggler-open')[0];
const toggleCloseBtn = document.getElementsByClassName('navbar-toggler-close')[0];
const navLink = document.getElementsByClassName('nav-links')[0];

const intro = document.getElementsByClassName('intro-section');


toggleBtn.addEventListener('click', () => {
  document.startViewTransition(() => {
    // 這裡執行 DOM 更新，例如顯示或隱藏選單
    toggleBtn.classList.toggle('d-none');
    navLink.classList.toggle('d-none');
    toggleCloseBtn.classList.toggle('d-none');
    if(intro.length>0){
      intro[0].classList.toggle('d-none');
    }
  });
  // toggleBtn.classList.toggle('d-none');
  // navLink.classList.toggle('d-none');
  // toggleCloseBtn.classList.toggle('d-none');
});

toggleCloseBtn.addEventListener('click', () => {
  document.startViewTransition(() => {
    // 這裡執行 DOM 更新，例如顯示或隱藏選單
    toggleBtn.classList.toggle('d-none');
    navLink.classList.toggle('d-none');
    toggleCloseBtn.classList.toggle('d-none');
    if(intro.length>0){
      intro[0].classList.toggle('d-none');
    }
  });
  // toggleBtn.classList.toggle('d-none');
  // navLink.classList.toggle('d-none');
  // toggleCloseBtn.classList.toggle('d-none');
});