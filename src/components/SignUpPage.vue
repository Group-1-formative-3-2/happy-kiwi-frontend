<!-- CODED BY KAY, AMY FIXED A FEW VALIDATION ISSUES BASED ON TESTING -->
<template>
  <div class='createPostContainer'>
    <div id='bg'>
      <img class='back' src='../assets/Login_Page.jpg' alt='' />
    </div>
    <div class='boxWrapper'>
      <form class='post' @submit.prevent='signUp'>
        <div><h2 class='head centerContainer'>Sign Up</h2></div>
        <label for='username' class='title'>Name:</label>
        <div class='sigIn-input'>
          <input
            pattern='[a-zA-Z0-9]{2,}'
            type='firstname'
            class='createBox-signUp'
            id='inputFirstname'
            placeholder='Firstname'
            v-model='signUpFormValues.firstname'
          />
          <input
            pattern='[a-zA-Z0-9]{2,}'
            type='lasttname'
            class='createBox-signUp'
            id='inputLastname'
            placeholder='Surname'
            v-model='signUpFormValues.lastname'
          />
        </div>
        <br />
        <label for='inputEmail1' class='title'>E-mail:</label>
        <input
          pattern='^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$' 
          id='email'
          class='createBox'
          placeholder='Enter a valid email address'
          v-model='signUpFormValues.email'
        />
        <br />
        <label for='InputPassword1' class='title'>Password:</label>
        <p class="notes">Must include at least 8 characters, at least 1 capital letter and at least 1 number.</p>
        <input
          pattern='[a-zA-Z0-9]{8,}'
          id='password'
          type='password'
          class='createBox'
          placeholder='Password'
          v-model='signUpFormValues.password'
        />
        <br />
        <label for='InputPassword1' class='title'>Confirm Password:</label>
        <input
          type='password'
          class='createBox'
          id='InputPassword'
          placeholder='Confirm Password'
          v-model='confirmPassword'
        />
        <span class='notes'>{{ passwordMatch }}</span>

        <br />
        <label for='region' class='title'>Region:</label>
        <select name='region' id='' class='createBox'>
          <option value='Northland'>Northland</option>
          <option value='Auckland'>Auckland</option>
          <option value='Waikato'>Waikato</option>
          <option value='BayofPlenty'>Bay of Plenty</option>
          <option value='Gisborne'>Gisborne</option>
          <option value='Taranaki'>Taranaki</option>
          <option value='Wanganui'>Manawatu Wanganui</option>
          <option value='Hawke'>Hawke's Bay</option>
          <option value='Wellington'>Wellington</option>
          <option value='Tasman'>Tasman</option>
          <option value='Nelson'>Nelson</option>
          <option value='Auckland'>West Coast</option>
          <option value='WestCoast'>Marlborough</option>
          <option value='Canterbury'>Canterbury</option>
          <option value='Otago'>Otago</option>
          <option value='Southland'>Southland</option>
          <option value='chathamislands'>Chatham Islands</option>
        </select>
        <br />
        <div class='spaceContainer'>
          <router-link to='/login' class='signUpLink'>Login</router-link>
          <span class='passwordLink'>Forgot Password</span>
        </div>
        <br />

        <div class='centerContainer'>
          <input type='submit' class='postBtn' value='Go'  />
        </div>
        <br />
        <div class='centerContainer' v-if='isSignUp' >{{ ok2GoMessage }}</div>
        <div class='centerContainer' v-if='isEmailError'>{{ emailErrorMsg }}</div>
      </form>
    </div>
  </div>
</template>

<script>
const apiUsers = 'https://api-users-login.netlify.app/.netlify/functions/api';
export default {
  data() {
    return {
      isEmailError: false,
      emailErrorMsg: 'Email address is taken',
      isSignUp: true,
      confirmPassword: '',
      signUpFormValues: {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
      },
      isSignUp: false,
      ok2GoMessage: 'yippee! You can sign in to explore more',
    };
  },
  computed: {
    passwordMatch() {
      return this.signUpFormValues.password === this.confirmPassword
        ? ''
        : 'Passwords must match';
    },
  },
  methods: {
    signUp() {
      this.isEmailError = false;
      //checking email add from db
      this.users.forEach((user) => {
        if (user.email == this.signUpFormValues.email) {
          this.isEmailError = true;
        }
      });
      //add user to db
      if (!this.isEmailError) {
        fetch(apiUsers, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.signUpFormValues),
        })
          .then((response) => response.text())
          .then((data) => {
            alert("You are now signed up, you can now log in")
            window.location.replace('login');
          })
          .catch((err) => {
            if (err) throw err;
          });
      }
      else{
        console.log('test')
      }
    },
  },
  mounted() {
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
  .createBox-signUp {
    height: 30px;
    display: block;
    margin-left: 45px;
    margin-right: 45px;
    width: 40%;
  }

  .sigIn-input {
    display: flex;
    flex-direction: row;
  }

  .notes {
    margin-left: 45px;
    margin-right: 45px;
  }
</style>