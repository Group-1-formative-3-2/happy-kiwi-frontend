<template>
  <div class="appContainer">
    <div class="header" v-show="switchSlide">
      <a href="/"
        ><img class="logoImg" src="./assets/official_logo.png" alt="#"
      /></a>
      <div class="router_links">
        <router-link to="/">Home</router-link>
        <router-link to="/explore">Explore</router-link>
        <router-link to="/login" @click="loginZindex">Login</router-link>
        <div class="switchSlideBtn" @click="switchSlide = false">View</div>
        <!-- ^^ for viewing screensaver on homepage -->
        <router-link to="/createpost" class="right">Create Post</router-link>
      </div>

      <div>
        <span>{{ loggedName }}</span>
        <span v-if="loggedName" @click="logOut" style="cursor: pointer"
          >👋</span
        >
      </div>

      <div @click="showHamburgerMenu" class="hamburger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>

      <!-- bind the login  -->
    </div>
    <router-view v-show="switchSlide"></router-view>
    <!-- switches the navbar and background image off -->

    <div class="SlideWrapper" v-show="!switchSlide">
      <transition-group name="fade" tag="div">
        <div v-for="i in [currentIndex]" :key="i">
          <div class="imgWrapper">
            <a class="closeBtn" href="/" v-show="!switchSlide"> <p>x</p> </a>

            <img class="slideShowImg" :src="currentImg" />
          </div>
        </div>
      </transition-group>
    </div>
    <!-- imagewrapper for slideshow -->

    <div class="footer" v-show="switchSlide">
      <a href="#">&copy Copyright 2022 - Happy Kiwi </a>
      <a href="https://zip.org.nz/" target="_blank">Zero Invasive Predators</a>
      <a href="https://www.doc.govt.nz/" target="_blank"
        >Department of Conservation</a
      >
    </div>
  </div>
</template>

<script>
  import Home from "./components/HomePage.vue";
  import ExplorePage from "./components/ExplorePage.vue";
  import LoginPage from "./components/LoginPage.vue";
  import SignUpPage from "./components/SignUpPage.vue";
  import CreatePostPage from "./components/CreatePostPage.vue";

  export default {
    name: "NavBar",
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
        loggedName: "",
        images: [
          "https://i.ibb.co/YpssfNw/cameron-witney-Y3-Ohm-Jb-Z-yw-unsplash.jpg",
          "https://i.ibb.co/qk4F49C/phil-botha-t-INX9-IIet-IQ-unsplash.jpg",
          "https://i.ibb.co/K2xVgSp/ray-aucott-x-B0e8b-DV4ww-unsplash.jpg",
          "https://i.ibb.co/PFFGgq1/luca-calderone-j-Vo0v-um-Ak4-unsplash.jpg",
          "https://i.ibb.co/mB4rFZL/cameron-witney-Zx-UFn-Ed-FZ8c-unsplash.jpg",
          "https://i.ibb.co/8xC0Kq8/james-bremer-Zz-N6e-BTb-4-unsplash.jpg",
          "https://i.ibb.co/MN79nsJ/kerin-gedge-9gga-Ad3e-Mx-Q-unsplash.jpg",
          "https://i.ibb.co/s67xrM8/advocator-sy-5-AVd-POR5c-BI-unsplash.jpg",
          "https://i.ibb.co/CQm16bj/andrea-lightfoot-Cg-Zlqo-Pz9hw-unsplash.jpg",
          "https://i.ibb.co/HG3WGP1/jen-milius-d-NAj-Kf-Bm8q0-unsplash.jpg",
          "https://i.ibb.co/MPDZDKY/sandy-millar-wv-C1va-Ip-LHM-unsplash.jpg",
          "https://i.ibb.co/qNYMyNm/pablo-heimplatz-PSF2-Rh-UBORs-unsplash.jpg",
          "https://i.ibb.co/yVNV4Yn/aneta-foubikova-a-Pk-P4t-KZRPg-unsplash.jpg",
          "https://i.ibb.co/pP1CSHD/cameron-witney-r-Ta-TKy-E3-Sb-A-unsplash.jpg",
          "https://i.ibb.co/RvVpRqW/advocator-sy-TG-w-UUm-E8ew-unsplash.jpg",
          "https://i.ibb.co/gdZ4TmZ/christine-ellsay-9-Ep-Hbo02-VXY-unsplash.jpg",
          "https://i.ibb.co/TWRF9hR/andrea-lightfoot-LFRme4yih-H0-unsplash.jpg",
          "https://i.ibb.co/k4S380r/joshua-harris-MNp-J8pyz-Zjk-unsplash.jpg",
          "https://i.ibb.co/qkm8S6T/mai-moeslund-2l-AWK0-An-Vog-unsplash.jpg",
          "https://i.ibb.co/Zmwtyyy/martina-vitakova-Zc-Ozv-Abu9-Y8-unsplash.jpg",
          "https://i.ibb.co/vmQ8B7Y/andrea-lightfoot-y-E8qo-Oy-AFv-M-unsplash.jpg",
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
      showHamburgerMenu() {
        console.log("dd");
        const loginForm = document.getElementById("loginForm");
        console.log(loginForm);
        const boxWrapper = document.getElementsByClassName("boxWrapper")[0];
        console.log(boxWrapper);

        loginForm.classList.add("zIndex0");
        loginForm.classList.remove("zIndex1");

        boxWrapper.classList.add("zIndex1");
        boxWrapper.classList.remove("zIndex0");

        // const hamburger = document.getElementsByClassName("hamburger")[0];
        // hamburger.classList.add("zIndex1");
        // hamburger.classList.remove("zIndex0");
        // const createPostContainer = document.getElementsByClassName(
        //   "createPostContainer"
        // )[0];
        // createPostContainer.classList.remove("zIndex0");
        // createPostContainer.classList.add("zIndexZ1");
      },
      loginZindex() {
        const loginForm = document.getElementById("loginForm");
        console.log(loginForm);
        const boxWrapper = document.getElementsByClassName("boxWrapper")[0];
        console.log(boxWrapper);

        loginForm.classList.add("zIndex1");
        loginForm.classList.remove("zIndex0");

        boxWrapper.classList.add("zIndex0");
        boxWrapper.classList.remove("zIndex1");
        // const loginForm = document.getElementById("loginForm");
        // console.log(loginForm);

        // console.log("login"); // createPostContainer
        // const boxWrapper = document.getElementsByClassName("boxWrapper")[0];
        // boxWrapper.classList.add("zIndex0");
        // const createPostContainer = document.getElementsByClassName(
        //   "createPostContainer"
        // )[0];
        // createPostContainer.classList.remove("zIndex1");
        // createPostContainer.classList.add("zIndex0");
      },
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
        localStorage.removeItem("loggedUser");
        this.loggedName = "";
      },
    },

    computed: {
      currentImg: function () {
        return this.images[Math.abs(this.currentIndex) % this.images.length];
      },
    },
  };
</script>

<style lang="scss">
  .zIndexN1 {
    z-index: -1 !important;
  }
  .zIndex1 {
    z-index: -1 !important;
  }
  .zIndex0 {
    z-index: 0 !important;
  }
  #bg {
    position: fixed;
    z-index: -2;
    top: -40%;
    left: -50%;
    width: 200%;
    height: 200%;

    img {
      position: absolute;
      z-index: -2;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      min-width: 50%;
      min-height: 50%;
      object-fit: cover;
    }
  }

  a {
    font-weight: 500;
    color: var(--white);
    text-decoration: inherit;
  }

  a:hover {
    text-decoration: underline;
    color: var(--white);
  }

  a:active {
    text-decoration: underline;
    color: var(--white);
  }

  .hamburger {
    display: none;
    cursor: pointer;
  }

  .bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: var(--white);
  }

  /* Fade in images on App page start */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 3s ease-in-out;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .slideShowImg {
    height: 100vh;
    width: 100vw;
    object-fit: cover;
    position: absolute;
    z-index: 1;
  }

  .closeBtn {
    position: absolute;
    z-index: 10;
    right: 45px;
    padding: 30px;
    cursor: pointer;
    background-color: transparent;

    p {
      font-size: 2em;
      color: var(--white);
      font-weight: 900;
    }
  }

  .exploreBtn {
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-weight: 900;
    font-size: larger;
    font-family: "Ubuntu", sans-serif;
    background-color: var(--buttonGreen);
    transition: border-color 0.25s;
    text-align: right;
    color: white;
  }

  .signUpBtn {
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-weight: 900;
    font-size: larger;
    font-family: "Ubuntu", sans-serif;
    background-color: var(--buttonOrange);
    transition: border-color 0.25s;
    text-align: right;
    color: white;
  }

  button:hover {
    border-color: white;
  }

  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  .SlideWrapper {
    z-index: 100;
  }
  /* Fade in images on App page end */

  .appContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 30px;
    background-color: var(--boxBackground);
    backdrop-filter: blur(27px);
    color: var(--white);

    a {
      color: var(--white);
      font-family: "Ubuntu", sans-serif;
    }

    a:active {
      text-decoration: underline;
    }
  }

  .logoImg {
    height: 80px;
    margin-top: 20px;
    margin-left: 50px;
    margin-bottom: 20px;
  }

  .router_links {
    display: flex;
    gap: 80px;
    font-size: 1.5em;

    .router_link {
      font-weight: 900;
      color: var(--white);
      text-decoration: inherit;
    }
    .router_link:hover {
      text-decoration: underline;
      color: var(--white);
    }

    .router_link:active {
      text-decoration: underline;
      color: var(--white);
    }
  }

  .switchSlideBtn {
    color: var(--white);
    font-weight: 500;
    font-family: "Ubuntu", sans-serif;
    cursor: pointer;

    .switchSlideBtn:hover {
      color: #fff;
      text-decoration: underline;
      font-family: "Ubuntu", sans-serif;
    }

    .switchSlideBtn:active {
      color: var(--white);
      text-decoration: underline;
      font-family: "Ubuntu", sans-serif;
    }
  }

  .footer {
    background-color: var(--footerGreen);
    height: 25px;
    padding: 15px 50px;

    a {
      text-decoration: underline;
      text-align: center;
      padding-right: 50px;
    }
  }

  // shared styles start
  .createPostContainer {
    display: flex;
    justify-content: center;
  }

  .boxWrapper {
    width: 672px;
    padding: 40px 40px;
    margin-top: 100px;
    margin-bottom: 100px;
    background-color: var(--boxBackground);
    display: flex;
    justify-content: center;
    backdrop-filter: blur(27px);
    overflow-y: scroll;
  }

  .post {
    width: 700px;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
  }

  .postDisplay {
    align-content: center;
  }

  input,
  button {
    padding: 0.5rem 0.75rem;
    border-style: none;
  }

  .postBtn {
    background-color: var(--buttonGreen);
    color: var(--white);
    font-family: "Open Sans", sans-serif;
    font-size: larger;
    font-weight: 900;
    width: 190px;
    height: 49px;
    border-style: none;
    padding: 0.5rem 0.75rem;
  }
  .postBtn:hover {
    border-style: solid;
    border-color: var(--white);
  }
  .postBtn:focus,
  .postBtn:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  .createBox {
    height: 30px;
    display: block;
    margin-left: 45px;
    margin-right: 45px;
  }

  .centerContainer {
    display: flex;
    justify-content: center;
  }

  .spaceContainer {
    display: flex;
    justify-content: space-between;
    padding: 0 50px 0 50px;

    .spaceContainer span {
      color: var(--white);
      font-weight: 900;
    }

    .passwordLink {
      font-weight: 900;
    }

    .signUpLink {
      font-weight: 900;
    }
  }
  .spaceContainer span:hover {
    text-decoration: underline;
  }

  .desBox {
    margin-left: 45px;
    margin-right: 45px;
    height: 90px;
    display: block;
    padding: 0.5rem 0.75rem;
  }

  .title {
    font-family: "Ubuntu", sans-serif;
    font-weight: 400;
    font-size: 20px;
    color: var(--white);
    text-align: left;
    margin-left: 3rem;
    margin-bottom: 5px;
  }

  @media screen and (max-width: 1500px) {
    .router_links {
      display: flex;
      flex-direction: row;
      font-size: 1.4em;
      gap: 40px;
    }
  }

  @media screen and (max-width: 700px) {
    .header {
      display: flex;
      justify-content: space-between;
      padding-right: 50px;
    }

    .exploreBtn {
      text-align: center;
    }

    .boxWrapper {
      width: 376px;
      margin-left: 2rem;
      margin-right: 2rem;
      z-index: -1;
    }

    .footer {
      height: 45px;
      padding: 20px 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;

      a {
        text-decoration: underline;
        text-align: center;
        padding-right: 0px;
      }
    }

    .hamburger {
      display: block;
      cursor: pointer;
    }

    .hamburger.active .bar:nth-child(2) {
      opacity: 0;
    }

    .hamburger.active .bar:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }

    .hamburger.active .bar:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }

    .router_links {
      position: fixed;
      left: -100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 40px;
      width: 100%;
      margin-top: 486.49px;
      padding: 50px 0;
      background-color: var(--navBackground);
      backdrop-filter: blur(27px);
      color: var(--white);
      transition: 0.5s ease-in-out;
    }

    .router_links.active {
      left: 0;
    }

    .logoImg {
      height: 60px;
      margin-top: 20px;
      margin-left: 40px;
      margin-bottom: 20px;
    }

    .boxWrapper {
      width: 376px;
      margin-left: 2rem;
      margin-right: 2rem;
    }

    .post {
      width: 600px;
    }
  }
</style>
