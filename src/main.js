import { createApp } from 'vue'
import './assets/scss/style.scss'
import { createPinia } from "pinia"
import App from './App.vue'
import { createWebHistory, createRouter } from "vue-router"
import { routes } from "./router"

// 各画面のルーティング情報からルーターを作成
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

createApp(App)
  .use(router)
  .use(createPinia())
  .mount('#app');