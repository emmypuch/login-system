<template>
  <div class="form-wrapper">
    <div class="grid-layout">
      <div class="form-grid">
        <h3>
          Welcome, <br />
          Let's get you on board!
        </h3>
      </div>
      <div class="form-container">
        <h2>Sign Up</h2>
        <p>
          Already have an account?
          <router-link to="/LoginPage" class="nav-login-link"
            >Log In</router-link
          >
        </p>
        <form @submit.prevent="signup">
          <div class="form-group">
            <label>Business Name</label> <br />
            <input
              type="text"
              v-model="businessName"
              class="input-field"
              placeholder="Enter Business Name"
              required
            />
          </div>
          <div class="form-group">
            <label>Email</label> <br />
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
            <label>Password</label> <br />
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
            <button type="submit" class="submit-button" :disabled="loading">
              <span v-if="loading">Loading...</span>
              <span v-else>Sign Up</span>
            </button>
          </div>
        </form>

        <!-- Success modal -->
        <div v-if="showSuccessModal" class="success-modal">
          <div class="modal-content">
            <img src="@/assets/success.png" alt="" />
            <p>Sign up successful!</p>
            <router-link to="/LoginPage" class="login-link"
              >Click here to log in</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import confetti from "canvas-confetti";

export default {
  data() {
    return {
      businessName: "",
      email: "",
      password: "",
      formErrors: {
        businessName: "",
        email: "",
        password: "",
      },
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

      // Loading spinner inside button
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
        this.showSuccessModal = true;

        // Clear form fields after successful signup
        this.businessName = "";
        this.email = "";
        this.password = "";

        this.triggerConfetti();
      }, 4000);
    },

    triggerConfetti() {
      // eslint-disable-next-line no-unused-vars
      const width = window.innerWidth;
      // eslint-disable-next-line no-unused-vars
      const height = window.innerHeight;

      confetti({
        particleCount: 200,
        spread: 200,
        origin: { y: 0.6 },
        colors: ["#bb8c0a", "#459185", "#1c0267", "#9ca3af", "fff"],
        disableForReducedMotion: true,
      });
    },

    clearErrors() {
      this.formErrors.businessName = "";
      this.formErrors.email = "";
      this.formErrors.password = "";
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
  text-align: center;
  font-size: 18px;
}

.success-modal img {
  width: 60px;
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

.grid-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.form-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #459185;
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

.nav-login-link {
  text-decoration: none;
  color: #bb8c0a;
  font-weight: bold;
}

div.form-group {
  margin-bottom: 20px;
}

input {
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

.submit-button {
  width: 100%;
  padding: 10px;
  font-size: 18px;
  background-color: #459185;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
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
