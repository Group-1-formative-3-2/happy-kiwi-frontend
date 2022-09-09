<template>
   <div>
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img class="slideShowImg" :src="currentImg" />
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
            "https://i.ibb.co/PFFGgq1/luca-calderone-j-Vo0v-um-Ak4-unsplash.jpg"
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

<style>
   .fade-enter-active,
   .fade-leave-active {
   transition: opacity 1s ease;
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
      position:fixed;
   }

</style>