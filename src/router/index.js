import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import longterm from '../views/longterm.vue'
import shortterm from '../views/shortterm.vue'
import device from '../views/device.vue'
// import gameFi from '../views/gameFi.vue'
// import question from '../views/question.vue'
// import software from '../views/software.vue'
// import blog from '../views/blog.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/longterm',
    name: 'longterm',
    component: longterm
  },
  {
    path: '/shortterm',
    name: 'shortterm',
    component: shortterm
  },
  {
    path: '/device',
    name: 'device',
    component: device
  },
//   {
//     path: '/gamefi',
//     name: 'gamefi',
//     component: gameFi
//   },
//   {
//     path: '/question',
//     name: 'question',
//     component: question
//   },
//   {
//     path: '/software',
//     name: 'software',
//     component: software
//   },
  // {
  //   path: '/blog',
  //   name: 'blog',
  //   component: blog
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
