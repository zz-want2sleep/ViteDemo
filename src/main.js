import { createApp } from 'vue'
import './style.css'
// antdv样式
import 'ant-design-vue/dist/antd.css';

import layout from './components/layout.vue';

// 路由
import { router } from './router'

// Vuex
import store from './store'

createApp(layout)
    .use(router)
    .use(store)
    .mount('#app')
