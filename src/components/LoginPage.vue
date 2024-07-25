<template>
  <div class="form-wrapper">
    <div class="form-container">
      <h2>Login</h2>
      <p>
        Don't have an account?
        <router-link to="/SignupPage" class="nav-signup-link"
          >Signup</router-link
        >
      </p>
      <form @submit.prevent="login">
        <div class="form-group">
          <label>Email:</label> <br />
          <input
            type="email"
            v-model="email"
            class="input-field"
            placeholder="Enter Email"
            required
          />
          <div v-if="formErrors.email" class="">
            {{ formErrors.email }}
          </div>
        </div>
        <div class="form-group">
          <label>Password:</label> <br />
          <input
            type="password"
            v-model="password"
            class="input-field"
            placeholder="Enter Password"
            required
          />
          <div v-if="formErrors.password" class="">
            {{ formErrors.password }}
          </div>
        </div>
        <div class="btn">
          <router-link to="/DashboardPage" class="login-button"
            >Login</router-link
          >
          <!-- <button type="submit" class="login-button">Login</button> -->
        </div>
        <div v-if="error" class="error-message">{{ error }}</div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      formErrors: {
        email: "",
        password: "",
      },
      error: "",
    };
  },
  methods: {
    login() {
      this.clearErrors();
      if (!this.email || !this.password) {
        if (!this.email) this.formErrors.email = "Email is required.";
        if (!this.password) this.formErrors.password = "Password is required.";
        return;
      }

      console.log("Logging in with:", this.email, this.password);
      this.error = "Invalid email or password. Please try again.";
    },
    clearErrors() {
      this.formErrors.email = "";
      this.formErrors.password = "";
      this.error = "";
    },
  },
};
</script>

<style scoped>
.form-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #459185;
}

div.form-container {
  background-color: #fff;
  padding: 10px 30px;
  border-radius: 3px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 600px;
}

::placeholder {
  color: #9ca3af;
  font-size: 15px;
}

label {
  color: #9ca3af;
  font-size: 18px;
}

h2 {
  color: #459185;
  font-size: 25px;
  margin-bottom: 20px;
  margin-top: 0px;
}

p {
  color: #459185;
  font-size: 18px;
}

.nav-signup-link {
  text-decoration: none;
  color: #bb8c0a;
  font-weight: bold;
}

div.form-group {
  margin-bottom: 20px;
}

.input-field {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 7px;
  color: #1c0267;
  outline-color: #9ca3af;
}

div.btn {
  display: flex;
  justify-content: flex-end;
}

.login-button {
  width: 200px;
  padding: 10px;
  font-size: 18px;
  background-color: #459185;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
}

.error-message {
  color: red;
  font-size: 14px;
  margin-top: 5px;
}

@media screen and (max-width: 768px) {
  div.form-container {
    width: 300px;
  }
}
</style>
