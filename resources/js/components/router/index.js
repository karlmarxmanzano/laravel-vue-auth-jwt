import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import SignIn from '../views/SignIn'
import SignUp from '../views/SignUp'
import Dashboard from '../views/Dashboard'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/signin',
        name: 'signin',
        component: SignIn
    },
    {
        path: '/signup',
        name: 'signup',
        component: SignUp
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        beforeEnter: (to, from, next) => {
            if (!store.getters['authenticated']) {
                next({
                    name: 'home'
                })
            }

            next();
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router