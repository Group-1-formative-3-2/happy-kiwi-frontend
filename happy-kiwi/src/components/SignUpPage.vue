
<template>
  
<div class="signup-container">
    <div class="left"></div>
      <div class="middle">
        <div>Sign Up</div>
        <form>
          
          <div class="form-group">
            <label for="inputUsername">Username:</label><br>
            <input
              type="username"
              class=""
              id="inputUsername"
              placeholder="Username"
            />
          </div>
          
          <div class="form-group">
            <label for="InputPassword1">Password:</label><br>
            <input
              type="password"
              class=""
              id="InputPassword"
              placeholder="Password"
            />
          </div>

          <div class="form-group">
            <label for="InputPassword1">Password:</label><br>
            <input
              type="password"
              class=""
              id="InputPassword"
              placeholder="Password"
            />
          </div>

          <div class="form-group">
            <label for="region">region:</label><br>
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

}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
}

</style>