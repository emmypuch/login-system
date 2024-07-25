<template>
  <div class="form-wrapper">
    <div class="grid-layout">
      <div class="form-grid">
        <h3>You're almost there!</h3>
      </div>
      <div class="form-container">
        <h2>Log In</h2>
        <p>
          Don't have an account?
          <router-link to="/SignupPage" class="nav-signup-link"
            >Sign Up</router-link
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
            <button type="submit" class="login-button">Log In</button>
          </div>
          <div v-if="error" class="error-message">{{ error }}</div>
        </form>
      </div>
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

      this.$router.push({
        path: "/DashboardPage",
        query: { transition: "fade" },
      });
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.form-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #459185;
}

.grid-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.form-grid {
  background-color: #feefc7;
  border-top-left-radius: 10px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 0px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-grid h3 {
  color: #459185;
  font-size: 25px;
}

div.form-container {
  background-color: #fff;
  padding: 10px 30px;
  border-top-left-radius: 0px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  padding: 30px;
}

::placeholder {
  color: #9ca3af;
  font-size: 13px;
  font-weight: lighter;
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
  width: 92%;
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
  width: 100%;
  padding: 10px;
  font-size: 18px;
  background-color: #459185;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: #2c6e49;
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

  .grid-layout {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .form-grid {
    display: none;
  }

  div.form-container {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
}
</style>
