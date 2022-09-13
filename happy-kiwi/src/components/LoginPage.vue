<template>
  <div class='createPostContainer'>
    <div class='boxWrapper'>
      <div class='post'>
        <div><h2 class='head centerContainer'>Login</h2></div>
      
          <label for='inputEmail1' class='title'>E-mail:</label>
          <input
          class='createBox'
            pattern='[A-Za-z0-9._+-]+@[A-Za-z0-9 -]+\.[a-z]{2,}'
            v-model='formValue.email'
            id='email'
            required
            type='email'
            placeholder='enter a valid email address'
          />
          <br>
          <label for='InputPassword1' class='title'>Password:</label>
          <input
          class='createBox'
            pattern='[a-zA-Z0-9]{8,}'
            v-model='formValue.password'
            id='password'
            required
            type='password'
            placeholder='at least 8 characters'
          />
<br>
        <div class='spaceContainer'>
          <router-link to='/signup'>Sign Up</router-link>
          <span>Forgot Password</span>
        </div>
<br>
        <div class='centerContainer'>
          <button type='submit' class='postBtn'>Go</button>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
import SignUpPage from './SignUpPage.vue';
const apiUsers =
  'https://curious-parfait-81c145.netlify.app/.netlify/functions/api/';
export default {
  data: () => ({
    users: [],
    loggedUser: '',
    formValue: {
      email: '',
      password: '',
    },
  }),

  components: {
    SignUpPage,
  },

  method: {
    login() {
      this.users.forEach((users) => {
        if (
          users.email == this.formValue.email &&
          users.password == this.formValue.password
        ) {
          this.loggedUser = users.firstname + ' ' + users.lastname;
          localStorage.userId = users._id;
          localStorage.loggedUser = this.loggedUser;
        }
      });
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

<style scoped>
.container {
  background-color:rgba(44, 44, 44, 0.33);
  display: flex;
  justify-content: center;
  backdrop-filter: blur(27px);
  overflow-y: scroll;
  color: white;
}
.form-title{
  font-size: var(--title-size);
  /* font-size: 25px; */
}

input,
button {
  padding: 0.5rem 0.75rem;
}

@media screen and (max-width: 1600px){
  .postContainer{
    grid-template-columns: 1fr 1fr;
    gap: 50px;
  }
 }
 @media screen and (max-width: 900px){
  .postContainer{
    grid-template-columns: 1fr;
    gap: 50px;
  }
 }

</style>
