import { createApp } from 'vue';
import './assets/scss/style.scss';
import { createPinia } from "pinia";
import App from './App.vue';
import { createWebHistory, createRouter } from "vue-router";


// ルーティングするページを読み込む
import TopPage from "./components/HelloWorld.vue";
import GardenPage from "./views/Garden/index.vue";

// 各画面のルーティング情報を記述する
const routes = [
  {
    path: "/",
    name: "TopPage",
    component: TopPage,
  },
  {
    path: "/test",
    name: "GardenPage",
    component: GardenPage,
  },
];

// 各画面のルーティング情報からルーターを作成する
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

createApp(App)
  .use(router)
  .use(createPinia())
  .mount('#app');