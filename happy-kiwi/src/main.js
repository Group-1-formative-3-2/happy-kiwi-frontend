import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import './assets/css/normalize.css'
import App from './App.vue'

import Home from './components/HomePage.vue'
import ExplorePage from './components/ExplorePage.vue'
import LoginPage from './components/LoginPage.vue'
import SignUpPage from './components/SignUpPage.vue'
import CreatePostPage from './components/CreatePostPage.vue'

const router = createRouter({
   history: createWebHistory(),
   routes: [
      { path: '/', name: 'Home', component: Home },
      { path: '/explore', name: 'Explore', component: ExplorePage },
      { path: '/login', name: 'Login', component: LoginPage },
      { path: '/signup', name: 'SignUp', component: SignUpPage },
      { path: '/createpost', name: 'CreatePost', component: CreatePostPage },

   ]
})

createApp(App)
   .use(router)
   .mount('#app')


const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.router_links')

hamburger.addEventListener('click', () => {
   hamburger.classList.toggle('active')
   navMenu.classList.toggle('active')
})

document.querySelectorAll('.router_links').forEach(n => n.addEventListener('click', ()=> {
   hamburger.classList.remove('active')
   navMenu.classList.remove('active')
}))