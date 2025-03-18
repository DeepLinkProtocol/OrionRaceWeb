import { createI18n } from 'vue-i18n' //引入vue-i18n组件
import messages from './index'
let browserlanguage = (
  (navigator.language ? navigator.language : navigator.userLanguage) || "en"
).toLowerCase();
let language = browserlanguage.split("-")[0]
if ( language == 'en' || language == 'ko' || language == 'zh' || language == 'ja' || language == 'ru' || language == 'vn' || language == 'fr' || language == 'de' || language == 'tr') {
  language = language
} else {
  language = 'en'
}
const i18n = createI18n({
  fallbackLocale: 'en',
  globalInjection: true,
  legacy: false, // you must specify 'legacy: false' option
  locale: localStorage.getItem('lan') || language || "en",
  messages
});

export const changeLan = (lan)=>{
  i18n.global.locale = lan
}


export default i18n