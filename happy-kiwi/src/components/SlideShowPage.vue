<template>
   <div>
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
         <div class="imgWrapper">
            <button>x</button>
            <img class="slideShowImg" :src="currentImg" />
         </div>
      </div>
    </transition-group>
    <!-- <a class="prev" @click="prev" href="#">&#10094;</a>
    <a class="next" @click="next" href="#">&#10095;</a> -->
</div>
 </template>
 <script>
   export default {
     name: "Slider",
     data() {
       return {
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
            "https://i.ibb.co/vmQ8B7Y/andrea-lightfoot-y-E8qo-Oy-AFv-M-unsplash.jpg"
         ],
         timer: null,
         currentIndex: 0
       };
     },
   
     mounted: function() {
       this.startSlide();
     },
   
     methods: {
       startSlide: function() {
         this.timer = setInterval(this.next, 4000);
       },
   
       next: function() {
         this.currentIndex += 1;
       },
       prev: function() {
         this.currentIndex -= 1;
       }
     },
   
     computed: {
       currentImg: function() {
         return this.images[Math.abs(this.currentIndex) % this.images.length];
       }
     }
   };
   </script>

<style scoped>
   .fade-enter-active,
   .fade-leave-active {
      transition: opacity 3s ease;
   }

   .fade-enter-from,
   .fade-leave-to {
      opacity: 0;
   }

   .slideShowImg{
      height: 100vh;
      width: 100vw;
      object-fit: cover;
      z-index: 100;
      position:relative;
   }

   .imgWrapper button{
      z-index: 101;
      position:fixed;
      right: 10px;
      top: 10px;
      text-align:right;
   }
   
   .header{
      display: none;
   }

</style>