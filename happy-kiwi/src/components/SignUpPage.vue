<template>
  <div class="signup-container">
    <div class="left"></div>
    <div class="middle">
      <div>Sign Up</div>
      <form>
        <div class="form-group">
          <label for="inputUsername">Username:</label>
          <input
            type="username"
            class=""
            id="inputUsername"
            placeholder="Username"
          />
        </div>

        <div class="form-group">
          <label for="inputEmail1">email:</label>
          <input
            pattern="[A-Za-z0-9._+-]+@[A-Za-z0-9 -]+\.[a-z]{2,}"
            id="email"
            class=""
            placeholder="enter a valid email address"
          />
        </div>

        <div class="form-group">
          <label for="InputPassword1">Password:</label>
          <input
            pattern="[a-zA-Z0-9]{8,}"
            id="password"
            class=""
            placeholder="at least 8 characters"
          />
        </div>

        <div class="form-group">
          <label for="InputPassword1">Password:</label>
          <input
            type="password"
            class=""
            id="InputPassword"
            placeholder="confirm password"
          />
        </div>

        <div class="form-group">
          <label for="region">region:</label>
          <select name="region" id="">
            <option value="Auckland">Auckland</option>
            <option value="Wellington">Wellington</option>
            <option value="Nelson">Nelson</option>
            <option value="Canterbury">Canterbury</option>
            <option value="Otago">Otago</option>
          </select>
        </div>

        <div>
          <router-link to="/login">sign in</router-link>
          <span>forgot password</span>
        </div>

        <div>
          <button type="submit" class="btn">GO</button>
        </div>
      </form>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isEmailError: false,
    emailErrorMsg: "Email is already taken",
    signUpFormValues: {
      username: "",
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },

    computed: {
      passwordMatch() {
        return () =>
          this.formValues.password === this.verify || "Password must match";
      },
    },
    // method: {
    //   register() {
    //     let validform = this.$refs.registerForm.validate();
    //     if (validform) {
    //       // check email from database
    //       this.users.forEach((element) => {
    //         if (element.email == this.formValues.email) {
    //           this.isEmailError = true;
    //         }
    //       });

    //       if (!this.isEmailError) {
    //         fetch(apiUsers, {
    //           method: "POST",
    //           headers: { "Content-Type": "application/json" },
    //           body: JSON.stringify(this.formValues),
    //         })
    //           .then((response) => response.text())
    //           .then((data) => {
    //             console.log(data);
    //             this.dialog = false;
    //             this.loggedUser =
    //               this.formValues.firstname + " " + this.formValues.lastname;
    //             // localStorage
    //             localStorage.userId = data; // inserted document id
    //             localStorage.loggedUser = this.loggedUser;
    //             this.$emit("logged-user", this.loggedUser);
    //             document.location.reload(true); // force page reload to show admin table
    //           })
    //           .catch((err) => {
    //             if (err) throw err;
    //           });
    //       }
    //     }
    //   },
    // },
  }),
};
</script>

<style scoped>

   .main{
      width: 100vw;
      height: 100vh;
      background-image: url(../assets/Login_Page.jpg);
   }

</style>