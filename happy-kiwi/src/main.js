import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import './style.css'
import './assets/css/normalize.css'
import App from './App.vue'

import Home from './components/HomePage.vue'
import ExplorePage from './components/ExplorePage.vue'
import LoginPage from './components/LoginPage.vue'
import SlideShowPage from './components/SlideShowPage.vue'
import SignUpPage from './components/SignUpPage.vue'

const router = createRouter({
   history: createWebHistory(), 
   routes: [
      {path: '/', name: 'Home', component: Home},
      {path: '/explore', name: 'Explore', component: ExplorePage},
      {path: '/login', name: 'Login', component: LoginPage}, 
      {path: '/slideshow', name: 'SlideShow', component: SlideShowPage}, 
      {path: '/signup', name: 'SignUp', component: SignUpPage},

   ]
})

createApp(App)
.use(router)
.mount('#app')
