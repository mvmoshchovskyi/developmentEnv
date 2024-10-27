import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/pages/MainPage.vue';
import PostPage from '@/pages/PostPage.vue';
import AboutPage from '@/pages/AboutPage.vue';
import SinglePostPage from '@/pages/SinglePostPage.vue';

const routes = [
  { path: '/', component: MainPage },
  { path: '/posts', component: PostPage },
  { path: '/about', component: AboutPage },
  { path: '/posts/:id', component: SinglePostPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
