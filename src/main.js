import { createApp } from 'vue';
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import {
  IoLogoJavascript,
  CoPhp,
  SiDart,
  CoFlutter,
  SiCplusplus,
  SiCsharp,
  CoLaravel,
  LaNodeJs,
  CoVueJs,
  CoReact,
  LaHtml5,
  LaCss3Alt,
  SiPowerbi,
  SiArduino,
  CoLinkedinIn,
} from 'oh-vue-icons/icons';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/tailwind.css';

addIcons(
  IoLogoJavascript,
  CoPhp,
  SiDart,
  CoFlutter,
  SiCplusplus,
  SiCsharp,
  CoLaravel,
  LaNodeJs,
  CoVueJs,
  CoReact,
  LaHtml5,
  LaCss3Alt,
  SiPowerbi,
  SiArduino,
  CoLinkedinIn,
);

createApp(App).component('v-icon', OhVueIcon).use(store).use(router)
  .mount('#app');
