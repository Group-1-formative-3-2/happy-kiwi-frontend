<template>
  <div class="container">
    <div class="middle">
      <div class="form-title">Login</div>
      <form>
        <div class="form-group">
          <label for="inputEmail1">email:</label>
          <input
            pattern="[A-Za-z0-9._+-]+@[A-Za-z0-9 -]+\.[a-z]{2,}"
            v-model="formValue.email"
            id="email"
            required
            type="email"
            class=""
            placeholder="enter a valid email address"
          />
        </div>

        <div class="form-group">
          <label for="InputPassword1">password:</label>
          <input
            pattern="[a-zA-Z0-9]{8,}"
            v-model="formValue.password"
            id="password"
            required
            type="password"
            class=""
            placeholder="at least 8 characters"
          />
        </div>

        <div>
          <router-link to="/register">sign up</router-link>
          <span>forgot password</span>
        </div>

        <div>
          <button type="submit">GO</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import SignUpPage from "./SignUpPage.vue";
const apiUsers =
  "https://curious-parfait-81c145.netlify.app/.netlify/functions/api/";
export default {
  data: () => ({
    users: [],
    loggedUser: "",
    formValue: {
      email: "",
      password: "",
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
          this.loggedUser = users.firstname + " " + users.lastname;
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
  display: flex;
  background: #2c2c2c;
  opacity: 0.3;
}

.form-group {
  display: grid;
  gap: 0.5rem;
  align-items: center;
}

input,
button {
  padding: 0.5rem 0.75rem;
}
</style>
