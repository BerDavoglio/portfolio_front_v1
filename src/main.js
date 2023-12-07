/* eslint-disable camelcase */

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
  BiFacebook,
  BiInstagram,
  BiGithub,
  GiHamburgerMenu,
  IoCloseSharp,
} from 'oh-vue-icons/icons';

import { createI18n } from 'vue-i18n';
import { en } from './locales/en';

import router from './router';
import store from './store';

import './assets/tailwind.css';

import App from './App.vue';

const languages = {
  en,
};
const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
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
  .use(store)
  .use(router)
  .use(i18n)
  .mount('#app');
