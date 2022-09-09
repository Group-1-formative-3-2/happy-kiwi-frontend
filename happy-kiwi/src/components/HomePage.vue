<template>

    <div>
    
        <h1>Happy Kiwi</h1>
        <h3>New Zealands place to explore the <br>
            native wildlife of our country. Share <br>
            and view photos and interact with <br>
            your fellow nature obbsessed kiwis.</h3>

        <button><router-link to="/explore"  style="color: #000;">Explore</router-link></button>
        <button><router-link to="/signup"  style="color: #000;">Sign Up</router-link> </button>
        
    </div>
</template>

<script>
    import SignUpPage from './SignUpPage.vue'
    import ExplorePage from './ExplorePage.vue'


    export default {
    name: "HomePage", 
    component: {
    ExplorePage, 
    SignUpPage
    }
    }
</script>

<style scoped>
    body {
        background-image: url(../assets/Home_Page.jpg);
        background-repeat: no-repeat;
        background-size: cover;

    }
    
    h1 {
        text-align: right;
    }

    h3{
        /* width: 500px; */
        text-align: right;
    }
</style>

