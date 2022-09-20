<template>
  <div class='appContainer'>
    <div class='header' v-show='switchSlide'>
      <a href='/'
        ><img class='logoImg' src='./assets/official_logo.png' alt='#'
      /></a>
      <div class='router_links'>
        <router-link to='/'>Home</router-link>
        <router-link to='/explore'>Explore</router-link>
        <router-link to='/login'>Login</router-link>
        <div class='switchSlideBtn' @click='switchSlide = false'>View</div>
        <!-- ^^ for viewing screensaver on homepage -->
        <router-link to='/createpost' class='right'>Create Post</router-link>
      </div>

      <div>
        <span>{{ loggedName }}</span>
        <span v-if='loggedName' @click='logOut'>out</span>
      </div>

      <div class='hamburger'>
        <span class='bar'></span>
        <span class='bar'></span>
        <span class='bar'></span>
      </div>

      <!-- bind the login  -->

    </div>
    <router-view v-show='switchSlide'></router-view>
    <!-- switches the navbar and background image off -->

    <div class='SlideWrapper' v-show='!switchSlide'>
      <transition-group name='fade' tag='div'>
        <div v-for='i in [currentIndex]' :key='i'>
          <div class='imgWrapper'>
            <a class='closeBtn' href='/' v-show='!switchSlide'> <p>x</p> </a>

            <img class='slideShowImg' :src='currentImg' />
          </div>
        </div>
      </transition-group>
    </div>
    <!-- imagewrapper for slideshow -->

    <div class='footer' v-show='switchSlide'>
      <a href='#'>&copy Copyright 2022 - Happy Kiwi </a>
      <a href='https://zip.org.nz/' target='_blank'>Zero Invasive Predators</a>
      <a href='https://www.doc.govt.nz/' target='_blank'
        >Department of Conservation</a
      >
    </div>
  </div>
</template>

<script>
import Home from './components/HomePage.vue';
import ExplorePage from './components/ExplorePage.vue';
import LoginPage from './components/LoginPage.vue';
import SignUpPage from './components/SignUpPage.vue';
import CreatePostPage from './components/CreatePostPage.vue';

export default {
  name: 'NavBar',
  component: {
    Home,
    ExplorePage,
    LoginPage,
    CreatePostPage,
    SignUpPage,
  },
  //  slideshow images and code below.
  data() {
    return {
      loggedName: '',
      images: [
        'https://i.ibb.co/YpssfNw/cameron-witney-Y3-Ohm-Jb-Z-yw-unsplash.jpg',
        'https://i.ibb.co/qk4F49C/phil-botha-t-INX9-IIet-IQ-unsplash.jpg',
        'https://i.ibb.co/K2xVgSp/ray-aucott-x-B0e8b-DV4ww-unsplash.jpg',
        'https://i.ibb.co/PFFGgq1/luca-calderone-j-Vo0v-um-Ak4-unsplash.jpg',
        'https://i.ibb.co/mB4rFZL/cameron-witney-Zx-UFn-Ed-FZ8c-unsplash.jpg',
        'https://i.ibb.co/8xC0Kq8/james-bremer-Zz-N6e-BTb-4-unsplash.jpg',
        'https://i.ibb.co/MN79nsJ/kerin-gedge-9gga-Ad3e-Mx-Q-unsplash.jpg',
        'https://i.ibb.co/s67xrM8/advocator-sy-5-AVd-POR5c-BI-unsplash.jpg',
        'https://i.ibb.co/CQm16bj/andrea-lightfoot-Cg-Zlqo-Pz9hw-unsplash.jpg',
        'https://i.ibb.co/HG3WGP1/jen-milius-d-NAj-Kf-Bm8q0-unsplash.jpg',
        'https://i.ibb.co/MPDZDKY/sandy-millar-wv-C1va-Ip-LHM-unsplash.jpg',
        'https://i.ibb.co/qNYMyNm/pablo-heimplatz-PSF2-Rh-UBORs-unsplash.jpg',
        'https://i.ibb.co/yVNV4Yn/aneta-foubikova-a-Pk-P4t-KZRPg-unsplash.jpg',
        'https://i.ibb.co/pP1CSHD/cameron-witney-r-Ta-TKy-E3-Sb-A-unsplash.jpg',
        'https://i.ibb.co/RvVpRqW/advocator-sy-TG-w-UUm-E8ew-unsplash.jpg',
        'https://i.ibb.co/gdZ4TmZ/christine-ellsay-9-Ep-Hbo02-VXY-unsplash.jpg',
        'https://i.ibb.co/TWRF9hR/andrea-lightfoot-LFRme4yih-H0-unsplash.jpg',
        'https://i.ibb.co/k4S380r/joshua-harris-MNp-J8pyz-Zjk-unsplash.jpg',
        'https://i.ibb.co/qkm8S6T/mai-moeslund-2l-AWK0-An-Vog-unsplash.jpg',
        'https://i.ibb.co/Zmwtyyy/martina-vitakova-Zc-Ozv-Abu9-Y8-unsplash.jpg',
        'https://i.ibb.co/vmQ8B7Y/andrea-lightfoot-y-E8qo-Oy-AFv-M-unsplash.jpg',
      ],
      timer: null,
      currentIndex: 0,
      switchSlide: true,
    };
  },

  mounted: function () {
    this.startSlide();
    this.loggedName = localStorage.loggedUser; 
  },

  methods: {
    startSlide: function () {
      this.timer = setInterval(this.next, 4000);
    },

    next: function () {
      this.currentIndex += 1;
    },
    prev: function () {
      this.currentIndex -= 1;
    },
    logOut() {
      localStorage.removeItem('loggedUser');
      this.loggedName = ''; 
    },
  },

  computed: {
    currentImg: function () {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    },
  },
};
</script>

<style scoped >
  
</style>
