/* eslint-disable camelcase */
import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
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
  BiFacebook,
  BiInstagram,
  BiGithub,
  GiHamburgerMenu,
  IoCloseSharp,
} from 'oh-vue-icons/icons';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/tailwind.css';

import { pt_BR } from './locales/pt_BR';
import { en } from './locales/en';

const languages = {
  pt_BR,
  en,
};
const i18n = createI18n({
  locale: 'pt_BR',
  fallbackLocale: 'pt_BR',
  messages: languages,
});

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
  BiFacebook,
  BiInstagram,
  BiGithub,
  GiHamburgerMenu,
  IoCloseSharp,
);

createApp(App).component('v-icon', OhVueIcon)
  .use(store).use(router)
  .use(i18n)
  .mount('#app');
