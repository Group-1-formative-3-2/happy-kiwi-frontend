<template>
   <div class="header">
    <a href="/"><img src="./assets/Happy Kiwi Logo-full.png" alt=""></a>
    <div class="router_links">
      <router-link to="/"  style="color: #fff;">Home</router-link>
      <router-link to="/explore"  style="color: #fff;">Explore</router-link>
      <router-link to="/login"  style="color: #fff;">Login</router-link>
      <router-link to="/slideshow"  style="color: #fff;">View</router-link>
      
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './components/HomePage.vue'
import ExplorePage from './components/ExplorePage.vue'
import LoginPage from './components/LoginPage.vue'
import SlideShowPage from './components/SlideShowPage.vue'
import SignUpPage from './components/SignUpPage.vue'

export default {
  name: "NavBar", 
  component: {
    Home, 
    ExplorePage, 
    LoginPage, 
    SlideShowPage, 
    SignUpPage
  }
}
</script>