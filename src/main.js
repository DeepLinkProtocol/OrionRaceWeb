import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './locales/i18n';
import {
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElDialog,
  ElCarousel,
  ElCarouselItem,
  ElDrawer,
  ElScrollbar,
  ElSelect,
  ElOption,
  ElLoading,
} from 'element-plus';
import 'element-plus/dist/index.css';
import '@/style/index.css';
import { Icon } from '@iconify/vue';

const app = createApp(App);
app.use(i18n);
app.use(router);
app.use(store);
app.component(ElDialog.name, ElDialog);
app.component(ElSelect.name, ElSelect);
app.component(ElOption.name, ElOption);
app.component(ElDropdown.name, ElDropdown);
app.component(ElDropdownMenu.name, ElDropdownMenu);
app.component(ElDropdownItem.name, ElDropdownItem);
app.component(ElCarousel.name, ElCarousel);
app.component(ElCarouselItem.name, ElCarouselItem);
app.component(ElDrawer.name, ElDrawer);
app.component(ElScrollbar.name, ElScrollbar);
app.component('Icon', Icon);

app.provide('$loading', ElLoading);
app.mount('#app');

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
