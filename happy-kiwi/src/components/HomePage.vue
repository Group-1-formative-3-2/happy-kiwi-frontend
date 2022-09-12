<template>

    <div>
        <div class="homePage">
            <div id='bg'>
            <img class='back' src='../assets/Homepage.jpg' alt=''>
        </div>
    
            <h1>Happy Kiwi</h1>
            <h3>New Zealands place to explore the <br>
                native wildlife of our country. Share <br>
                and view photos and interact with <br>
                your fellow nature obbsessed kiwis.</h3>

            <div class="buttons">
                <button class="exploreBtn"><router-link to="/explore" >Explore</router-link></button>
                <button class="signUpBtn"><router-link to="/signup" >Sign Up</router-link> </button>
            </div>
        </div>

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

#bg {
  position: fixed;
  z-index: -2; 
  top: -40%; 
  left: -40%; 
  width: 200%; 
  height: 200%;
}
#bg img {
  position: absolute; 
  z-index: -2;
  top: 0; 
  left: 0; 
  right: 0; 
  bottom: 0; 
  margin: auto; 
  min-width: 50%;
  min-height: 50%;
}

    body {
        background-image: url(../assets/homepage.jpg);


    }

    .homePage {
        text-align: right;
        
    }
    
    h1 {
        text-align: right;
        padding-right: 150px;
        font-size: 75px;
        font-weight: 900;
    }

    h3{
        padding-right: 150px;
        text-align: right;
        font-size: 30px;
        font-weight: 700;
        line-height: 40px;
    }

    .buttons { 
        margin-right: 150px;
    }
    .exploreBtn  {
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-weight: 900;
        font-size: larger;
        font-family:  'Ubuntu', sans-serif;
        background-color: #006E87;
        transition: border-color 0.25s;
        margin: 20px;
        text-align: right;
    }

    .signUpBtn  {
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-weight: 900;
        font-size: larger;
        font-family:  'Ubuntu', sans-serif;
        background-color: #F0742F;
        transition: border-color 0.25s;
        margin: 20px;
        text-align: right;
    }
    button:hover {
        border-color: white;
    }
    button:focus,

    button:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
    }

</style>

