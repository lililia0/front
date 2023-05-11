import { createRouter, createWebHistory } from 'vue-router'
import AboutUs from '@/components/AboutUs.vue'
import MainPage from '@/components/MainPage.vue'
import UserPage from "@/components/UserPage.vue"
import SignIn from "@/components/SignIn.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/MainPage',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/about-us',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/userpage',
      name:'UserPage',
      component: UserPage
    },
    {
      path:'/',
      name:'SignIn',
      component:SignIn
    }

  ]
})

export default router
