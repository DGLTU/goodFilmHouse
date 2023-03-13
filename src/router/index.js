import { createRouter, createWebHistory } from 'vue-router';
import { getCookie } from '@/js/all';
import { useAuthStore } from '@/js/store/store';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/ticketSelect',
      name: 'ticketSelect',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TicketSelectView.vue'),
    },
    {
      path: '/seatsSelect',
      name: 'seatsSelect',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SeatsSelectView.vue'),
    },
    {
      path: '/orderConfirm',
      name: 'orderConfirm',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/OrderConfirm.vue'),
    },
    {
      path: '/orderComplete/:orderNumber(\\d+)',
      name: 'orderComplete',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/OrderComplete.vue'),
    },
    {
      path: '/movieIntro/:movieId',
      name: 'movieIntro',
      component: () => import('../views/MovieIntroView.vue'),
    },
    {
      path: '/today',
      name: 'today',
      component: () => import('../views/TodayView.vue'),
    },
    {
      path: '/signUp&In',
      name: 'sign',
      component: () => import('../views/SignView.vue'),
    },
    {
      path: '/newsHome/:articleId',
      name: 'news',
      component: () => import('../views/NewsView.vue'),
    },
    {
      path: '/newsHome',
      name: 'newsHome',
      component: () => import('../views/NewsHomeView.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  const store = useAuthStore();
  const isAuth = (!!getCookie('token'));
  const token = getCookie('token');
  const id = getCookie('id');
  const role = getCookie('role');
  store.$patch({
    isAuth,
    token,
    id,
    role,
  });
  if (to.name === 'ticketSelect' && !isAuth) {
    next({ name: 'sign' });
  } else {
    next();
  }
});
export default router;
