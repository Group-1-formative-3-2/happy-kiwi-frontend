<template>
  <div class='createPostContainer'>
    <div id='bg'>
      <img class='back' src='../assets/Login_Page.jpg' alt='' />
    </div>
    <div class='boxWrapper'>
      <form class='post' v-if='showLoginForm' @submit.prevent='login'>
        <div><h2 class='head centerContainer'>Login</h2></div>

        <label for='inputEmail1' class='title'>E-mail:</label>
        <input
          class='createBox'
          v-model='formValue.email'
          id='email'
          required
          type='email'
          placeholder='Enter a valid email address'
        />
        <br />

        <label for='InputPassword1' class='title'>Password:</label>
        <input
          class='createBox'
          v-model='formValue.password'
          id='password'
          required
          type='password'
          placeholder='At least 8 characters'
        />
        <br />

        <div class='spaceContainer'>
          <router-link to='/signup' class='signUpLink'>Sign Up</router-link>
          <span class='passwordLink'>Forgot Password</span>
        </div>
        <br />

        <div class='centerContainer'>
          <!-- <button type='submit' class='postBtn'>Go</button> -->
          <input type='submit' class='postBtn' value='Go' />
        </div>

      </form>
    </div>
  </div>
</template>

<script>
import SignUpPage from './SignUpPage.vue';
const apiUsers = 'https://api-users-login.netlify.app/.netlify/functions/api';
export default {
  data() {
    return {
      users: [],
      loggedUser: '',
      isLogin: false,
      showLoginForm: true,
      formValue: {
        email: '',
        password: '',
      },
      errorMessage: '',
    };
  },

  components: {
    SignUpPage,
  },

  methods: {
    login() {
      console.log("test")
      this.users.forEach((users) => {
        if (
          users.email == this.formValue.email.toLowerCase() &&
          users.password == this.formValue.password
        ) {
          this.loggedUser = users.firstname + ' ' + users.lastname;
          this.isLogin = true;
          localStorage.loggedUser = this.loggedUser;
          window.location.replace('explore');
        }
      });

      if (!this.isLogin )
        {
          alert("Email or Password incorrect")
        }
    },
  },

  mounted() {
    // check if user is logged-in, do not show login form
    if (localStorage.loggedUser) {
      this.user = false;
    }

    // get all users
    fetch(apiUsers)
      .then((response) => response.json())
      .then((data) => {
        this.users = data;
      })
      .catch((err) => {
        if (err) throw err;
      });
  },
};
</script>

<style scoped></style>
