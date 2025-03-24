import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './locales/i18n';
import ElementPlus from 'element-plus';

import 'element-plus/dist/index.css';
import '@/style/index.css';
import { Icon } from '@iconify/vue';
import { ElLoading, ElMessage, ElMessageBox } from 'element-plus';
const app = createApp(App);
app.use(i18n);
app.use(router);
app.use(store);

app.component('Icon', Icon);
app.use(ElementPlus);

app.provide('$loading', ElLoading);
app.mount('#app');
// 将 ElMessage 和 ElMessageBox 挂载到 window 对象
window.$message = ElMessage;
window.$messageBox = ElMessageBox;

app.directive('animate', {
  mounted: function (el, binding) {
    binding.addClass = () => {
      const { top } = el.getBoundingClientRect();
      const h = document.documentElement.clientHeight || document.boby.clientHeight;
      if (top < h) {
        if (el.className.indexOf(binding.value.class) == -1) {
          setTimeout(() => {
            el.classList.remove('animation_hide');
          }, binding.value.delay);
          el.classList.add(binding.value.class);
        }
        if (binding.addClass) {
          window.removeEventListener('scroll', binding.addClass);
        }
      }
    };
    window.addEventListener('scroll', binding.addClass, true);
    binding.addClass();
  },
  beforeUnmount: function (el, binding) {
    if (binding.addClass) {
      window.removeEventListener('scroll', binding.addClass);
    }
  },
});
