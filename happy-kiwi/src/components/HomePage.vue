<template>
  <div>
    <div class='homePage'>
      <div id='bg'>
        <img class='back' src='../assets/Homepage.jpg' alt='' />
      </div>

      <h1>Happy Kiwi</h1>
      <h3>
        New Zealands place to explore the <br />
        native wildlife of our country. Share <br />
        and view photos and interact with <br />
        your fellow nature obbsessed kiwis.
      </h3>

      <div class='buttons'>
        <button class='exploreBtn' @click='$router.push("/explore")'>
            Explore
        </button>
        <button class='signUpBtn'  @click='$router.push("/signup")'>
            Sign Up
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import SignUpPage from './SignUpPage.vue';
import ExplorePage from './ExplorePage.vue';
export default {
  name: 'HomePage',
  component: {
    ExplorePage,
    SignUpPage,
  },
};
</script>

<style scoped>
.homePage {
  text-align: right;
}
h1 {
  text-align: right;
  padding-right: 150px;
  font-size: 75px;
  font-weight: 900;
  color: white;
}
h3 {
  padding-right: 150px;
  text-align: right;
  font-size: 30px;
  font-weight: 700;
  line-height: 40px;
  color: white;
}
.buttons {
  margin-right: 150px;
  display: flex;
  flex-direction: row;
  justify-content: right;
  gap: 20px;

}
.exploreBtn {
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-weight: 900;
  font-size: larger;
  font-family: 'Ubuntu', sans-serif;
  background-color: #006e87;
  transition: border-color 0.25s;
  text-align: right;
}
.signUpBtn {
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-weight: 900;
  font-size: larger;
  font-family: 'Ubuntu', sans-serif;
  background-color: #f0742f;
  transition: border-color 0.25s;
  text-align: right;
}

button:hover {
  border-color: white;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

@media screen and (max-width: 700px) {
    .homePage{
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
  }

  h1 {
    text-align: center;
    padding-right: 0px;
    margin: 0;
  }
  h3 {
    padding-right: 0px;
    text-align: center;
  }

  .buttons {
    margin-right: 0px;
    
  }
  }
</style>
