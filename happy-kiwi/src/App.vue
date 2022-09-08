<template>
  <div>
    <div class="header">
   <a href="/"><img src="./assets/Happy Kiwi Logo-01.png" alt=""></a>
   <div class="router_links">
     <router-link to="/"  style="color: #000;">Home</router-link>
     <router-link to="/explore"  style="color: #000;">Explore</router-link>
     <router-link to="/login"  style="color: #000;">Login</router-link>
     <router-link to="/slideshow"  style="color: #000;">View</router-link>
     </div>
   
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

<style>
  .header{
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 30px;

  }

  img{
    height: 80px;
  }

  .router_links{
    display: flex;
    gap: 20px;
    font-size: 1.5em;
  }
</style>
