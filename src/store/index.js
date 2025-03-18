import { createStore } from 'vuex'

let browserlanguage = (
  (navigator.language ? navigator.language : navigator.userLanguage) || "en"
).toLowerCase();
let language = browserlanguage.split("-")[0]

if (language == 'en' || language == 'ko' || language == 'zh' || language == 'ja' || language == 'ru' || language == 'vn' || language == 'fr' || language == 'de' || language == 'tr') {
  language = language
} else {
  language = 'en'
}

export default createStore({
  state: {
    lan: localStorage.getItem('lan') || language || 'en',
    path: localStorage.getItem('path') || '/'
  },
  mutations: {
    changeLan(state, data) {
      state.lan = data
    },
    changePath(state, data) {
      state.path = data
    }
  }
})