import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import store from '@/store/index.js';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/About.vue'),
            meta: {
                authRequired: true
            }
        },
        {
            path: '/help',
            name: 'help',
            component: () => import('../views/Help.vue'),
        },
        {
            path: '/menu',
            name: 'menu',
            component: () => import('../views/Menu.vue')
        },
        {
            path: '/sign-in',
            name: 'signin',
            component: () => import('../views/Signin.vue')
        },
        {
            path: '/join',
            name: 'join',
            component: () => import('../views/Join.vue')
        },
        {
            path: '/create',
            name: 'create',
            component: () => import('../components/Create.vue')
          },
          {
            path: '/show',
            name: 'show',
            component: () => import('../views/Show.vue'),
            meta: {
                authRequired: true
            }
          },
          {
            path: '/edit/:id',
            name: 'edit',
            component: () => import('../components/Edit.vue')
          }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.authRequired)) {
        if (!store.state.isAuthenticated) {
            next({
                path: '/sign-in'
            });
        } else {
            next();
        }
    } else {
        next();
    }
});


export default router;