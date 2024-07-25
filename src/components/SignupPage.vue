<template>
  <div class="form-wrapper">
    <div class="form-container">
      <h2>Signup</h2>
      <p>
        Already have an account?
        <router-link to="/LoginPage" class="nav-login-link">Login</router-link>
      </p>
      <form @submit.prevent="signup">
        <div class="form-group">
          <label>Business Name:</label> <br />
          <input
            type="text"
            v-model="businessName"
            class="input-field"
            placeholder="Enter Business Name"
            required
          />
        </div>
        <div class="form-group">
          <label>Email:</label> <br />
          <input
            type="email"
            v-model="email"
            class="input-field"
            placeholder="Enter Email Address"
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
          <button type="submit" class="submit-button">Signup</button>
        </div>
        <div v-if="error" class="error-message">{{ error }}</div>
      </form>

      <!-- Loading spinner -->
      <div v-if="loading" class="loading-spinner">Loading...</div>

      <!-- Success modal -->
      <div v-if="showSuccessModal" class="success-modal">
        <div class="modal-content">
          <p>Signup successful!</p>
          <router-link to="/LoginPage" class="login-link"
            >Click here to login</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      businessNameName: "",
      email: "",
      password: "",
      formErrors: {
        businessName: "",
        email: "",
        password: "",
      },
      error: "",
      loading: false,
      showSuccessModal: false,
    };
  },
  methods: {
    signup() {
      this.clearErrors();
      if (!this.businessName || !this.email || !this.password) {
        if (!this.businessName)
          this.formErrors.businessName = "Business name is required.";
        if (!this.email) this.formErrors.email = "Email is required.";
        if (!this.password) this.formErrors.password = "Password is required.";
        return;
      }

      // Start loading spinner
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
        this.showSuccessModal = true;

        // Clear form fields after successful signup
        this.companyName = "";
        this.email = "";
        this.password = "";
      }, 4000);

      this.error = "Failed to signup. Please try again later.";
    },

    clearErrors() {
      this.formErrors.businessName = "";
      this.formErrors.email = "";
      this.formErrors.password = "";
      this.error = "";
    },
  },
};
</script>

<style scoped>
.loading-spinner {
  text-align: center;
  margin-top: 10px;
}

.success-modal {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.success-modal p {
  padding: 10px;
  text-align: center;
  font-size: 18px;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  text-align: center;
}

.login-link {
  color: #bb8c0a;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}

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

.nav-login-link {
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

.submit-button {
  width: 200px;
  padding: 10px;
  font-size: 18px;
  background-color: #459185;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
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
