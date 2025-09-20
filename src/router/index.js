import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import ContactView from '../views/ContactView.vue'
import CategoryView from '../views/CategoryView.vue'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/product',
      name: 'product',
      component: ProductView,
      beforeEnter: (to, from, next) => {
        if (!to.query.videoId) {
          next('/');
        } else if(!to.query.category){
          next('/');
        }else {
          next();
        }
      }
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/category',
      name: 'category',
      component: CategoryView,
    },
  ],
})

// ✅ 加入 View Transition 的導航守衛
router.beforeEach((to, from, next) => {
  if (document.startViewTransition) {
    document.startViewTransition(() => next());
  } else {
    next();
  }
});

export default router
