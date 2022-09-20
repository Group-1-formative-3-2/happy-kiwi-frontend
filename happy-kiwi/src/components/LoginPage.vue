<template>
  <div class="createPostContainer">
    <div id="bg">
      <img class="back" src="../assets/Login_Page.jpg" alt="" />
    </div>
    <div class="boxWrapper">
      <form class="post" v-if="isLogin" @submit.prevent="login">
        <div><h2 class="head centerContainer">Login</h2></div>

        <label for="inputEmail1" class="title">E-mail:</label>
        <input
          class="createBox"
          pattern="[A-Za-z0-9._+-]+@[A-Za-z0-9 -]+\.[a-z]{2,}"
          v-model="formValue.email"
          id="email"
          required
          type="email"
          placeholder="Enter a valid email address"
        />
        <br />

        <label for="InputPassword1" class="title">Password:</label>
        <input
          class="createBox"
          pattern="[a-zA-Z0-9]{8,}"
          v-model="formValue.password"
          id="password"
          required
          type="password"
          placeholder="At least 8 characters"
        />
        <br />

        <div class="spaceContainer">
          <router-link to="/signup" class="signUpLink">Sign Up</router-link>
          <span class="passwordLink">Forgot Password</span>
        </div>
        <br />

        <div class="centerContainer">
          <!-- <button type='submit' class='postBtn'>Go</button> -->
          <input type="submit" class="postBtn" value="Go" />
        </div>
        <br />
        <div class="centerContainer">{{ errorMessage }}</div>
      </form>
    </div>
  </div>
</template>

<script>
import SignUpPage from "./SignUpPage.vue";
const apiUsers = "https://api-users-login.netlify.app/.netlify/functions/api";
export default {
  data() {
    return {
      users: [],
      loggedUser: "",
      isLogin: true,
      formValue: {
        email: "",
        password: "",
      },
      errorMessage: "",
    };
  },

  components: {
    SignUpPage,
  },

  methods: {
    login() {
      console.log("go");
      this.users.forEach((users) => {
        if (
          users.email == this.formValue.email.toLowerCase() &&
          users.password == this.formValue.password
        ) {
          this.loggedUser = users.firstname + " " + users.lastname;
          this.isLogin = true;
          // localStorage.userId = users._id;
          localStorage.loggedUser = this.loggedUser;
          window.location.replace("explore");
        }
      });
      if (!this.isLogin )
        {
          this.errorMessage = "Email and password must be match!";
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

<style lang="scss" scoped>
/* Login Page */
.container {
  background-color: var(--boxBackground);
  display: flex;
  justify-content: center;
  backdrop-filter: blur(27px);
  overflow-y: scroll;
  color: var(--white);
  z-index: 0;
}
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


.centerContainer {
  display: flex;
  justify-content: center;
}

.createBox {
  height: 30px;
  display: block;
  margin-left: 45px;
  margin-right: 45px;
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

input,
button {
  padding: 0.5rem 0.75rem;
  border-style: none;
}

.signUpLink {
  font-weight: 900;
}


.createBox {
  height: 30px;
  display: block;
  margin-left: 45px;
  margin-right: 45px;
}

.spaceContainer {
  display: flex;
  justify-content: space-between;
  padding: 0 50px 0 50px;  
}

.spaceContainer span:hover {
  text-decoration: underline;
}

.desBox {
  height: 90px;
  display: block;
  margin-left: 45px;
  margin-right: 45px;
  width: 82%;
}


.spaceContainer span {
  color: var(--white);
  font-weight: 900;
}



</style>
