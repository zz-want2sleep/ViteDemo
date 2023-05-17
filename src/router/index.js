import { createRouter, createWebHistory} from 'vue-router'
import routes from './router.config'

export const router = createRouter({
    history: createWebHistory(), // 不带# ，带#则用createWebHashHistory
    routes
})