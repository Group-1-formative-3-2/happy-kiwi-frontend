<template>
  <div>
    <div class="header">
   <a href="/"><img class="logoImg" src="./assets/official_logo.png" alt=""></a>
   <div class="router_links">
     <router-link to="/">Home</router-link>
     <router-link to="/explore">Explore</router-link> 
     <router-link to="/login">Login</router-link>
     <router-link to="/slideshow">View</router-link>
     <router-link to="/createpost" class="right">Create Post</router-link>
    </div>
 </div>
 <router-view></router-view>
    <div class="footer">
      <a href="#">Copyright - Happy Kiwi 2022 </a>
      <a href="https://zip.org.nz/" target="_blank">Zero Invasive Predators</a>
      <a href="https://www.doc.govt.nz/" target="_blank">Department of Conservation</a>
    </div>
  </div>
</template>

<script>
import Home from './components/HomePage.vue'
import ExplorePage from './components/ExplorePage.vue'
import LoginPage from './components/LoginPage.vue'
import SlideShowPage from './components/SlideShowPage.vue'
import SignUpPage from './components/SignUpPage.vue'
import CreatePostPage from './components/CreatePostPage.vue'

export default {
 name: "NavBar", 
 component: {
   Home, 
   ExplorePage, 
   LoginPage, 
   SlideShowPage, 
   SignUpPage,
   CreatePostPage
 }
}
</script>

<style>
    router-view {
    width: 100vw;
    height: 100vh;
    background-image: url(../assets/Explore_Page.jpg);
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 30px;
    background-color: rgba(44, 44, 44, 0.33);
    backdrop-filter: blur(27px) ;
    color: white;

  }

  .logoImg{ 
    height: 80px;
    margin-top: 20px;
    margin-left: 50px;
    margin-bottom: 20px;
    
  
  }

  .router_links{
    display: flex;
    gap: 80px;
    font-size: 1.5em;
  }

.header a{
  color: white;
  font-family:  'Ubuntu', sans-serif;
}

  .header a:active {
    text-decoration: underline;
  }

  .right {
    float: right;
  }

  .footer {
    background-color: #7DA057;
    height: 25px;
    padding: 15px;

    
  }

  .footer a {
    text-decoration: underline;
    text-align: center;
    padding-right: 50px;
   
  }

  router-view {
    background-image: url(../src/assets/Home_Page.jpg);
    width: 100vw;
    height: 100vh;
  } 
</style>
