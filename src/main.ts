import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/theme-chalk/index.css";
import * as ELIcons from '@element-plus/icons-vue'




// createApp(App).use(router).use(ElementPlus).mount("#app");
const app = createApp(App);
for (const name in ELIcons) {
    app.component(name,(ELIcons as any)[name]);
}
app.use(router).use(ElementPlus).mount("#app");
