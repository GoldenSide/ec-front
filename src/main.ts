import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import "@/styles/index.scss";
import "@/assets/css/icon.css";
import 'vite-plugin-svg-icons/register';
import svgIcon from '@/components/svgicon.vue'
import tableComponent from "@/components/table/tableComponent.vue";
let app = createApp(App);
app.component('svg-icon', svgIcon)
app.component('tableComponent', tableComponent)
app
  .use(ElementPlus, { size: "small", zIndex: 3000 })
  .use(router).mount('#app')



