<template>
  <div class='createPostContainer'>
    <div id='bg'>
        <img class='back' src='../assets/Login_Page.jpg' alt=''>
    </div>
    <div class='boxWrapper'>
      <form class='post'>
      <div><h2 class='head centerContainer'>Sign Up</h2></div>
          <label for='inputUsername' class='title'>Username:</label>
          <input
            type='username'
            class='createBox'
            id='inputUsername'
            placeholder='Username'
          />
          <br>
          <label for='inputEmail1' class='title'>E-mail:</label>
          <input
            pattern='[A-Za-z0-9._+-]+@[A-Za-z0-9 -]+\.[a-z]{2,}'
            id='email'
            class='createBox'
            placeholder='enter a valid email address'
          />
          <br>
          <label for='InputPassword1' class='title'>Password:</label>
          <input
            pattern='[a-zA-Z0-9]{8,}'
            id='password'
            class='createBox'
            placeholder='at least 8 characters'
          />
          <br>
          <label for='InputPassword1' class='title'>Confirm Password:</label>
          <input
            type='password'
            class='createBox'
            id='InputPassword'
            placeholder='confirm password'
          />
          <br>
          <label for='region' class='title'>Region:</label>
          <select name='region' id='' class='createBox'>
            <option value='Auckland'>Auckland</option>
            <option value='Wellington'>Wellington</option>
            <option value='Nelson'>Nelson</option>
            <option value='Canterbury'>Canterbury</option>
            <option value='Otago'>Otago</option>
          </select>
          <br>
        <div class="spaceContainer">
          <router-link to='/login'>Sign In</router-link>
          <span>Forgot Password</span>
        </div>

        <br>

        <div class="centerContainer">
          <button type='submit' class='postBtn'>Go</button>
        </div>

      </form>
</div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isEmailError: false,
    emailErrorMsg: 'Email is already taken',
    signUpFormValues: {
      username: '',
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    },

    computed: {
      passwordMatch() {
        return () =>
          this.formValues.password === this.verify || 'Password must match';
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
    //           method: 'POST',
    //           headers: { 'Content-Type': 'application/json' },
    //           body: JSON.stringify(this.formValues),
    //         })
    //           .then((response) => response.text())
    //           .then((data) => {
    //             console.log(data);
    //             this.dialog = false;
    //             this.loggedUser =
    //               this.formValues.firstname + ' ' + this.formValues.lastname;
    //             // localStorage
    //             localStorage.userId = data; // inserted document id
    //             localStorage.loggedUser = this.loggedUser;
    //             this.$emit('logged-user', this.loggedUser);
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
</style>