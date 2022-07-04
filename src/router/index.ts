import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import App from '../../src/App.vue'

import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import Dashboard from '../pages/Dashboard.vue'


const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: "home",
        component: App
    },
    {
        path: '/dashboard',
        name: "dashboard",
        component: Dashboard
    },
    {
        path: '/login',
        name: "login",
        component: Login
    },
    {
        path: '/register',
        name: "register",
        component: Register
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;