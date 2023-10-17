import { createRouter, createWebHistory } from "vue-router'";

import Login from './components/Login.vue';
import Register from './components/Register.vue';

const routes = [
    {
        path: '/Login',
        component: Login,
        meta: {public: true} //mark this route as public
    },
    {
        path: '/Register',
        component: Register,
        meta: {public: true} //mark this route as public
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('token');
  
  if(!to.meta.public && !isAuthenticated) {
    next({name: 'Login'});
  } else {
    next();
  }
});

export default router;