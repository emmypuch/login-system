<template>
  <div class="wrapper">
    <NavLinks />
    <div class="hero-section">
      <div class="hero-title">
        <h1>
          Empower Your Business with <br />
          Secure Team Systems
        </h1>
        <div class="btn">
          <router-link to="/SignupPage" class="nav-signup-link"
            >Get Started</router-link
          >
        </div>
      </div>
      <div>
        <img src="@/assets/team.png" alt="Team Illustration" />
      </div>
    </div>
  </div>
</template>

<script>
import NavLinks from "./header/NavLinks.vue";
export default {
  components: {
    NavLinks,
  },
};
</script>

<style scoped>
div.hero-section {
  padding: 10px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

div.hero-section a {
  text-decoration: none;
  font-size: 20px;
  background-color: transparent;
  background-color: #fdd404;
  color: #68a79d;
  padding: 10px 30px;
  border-radius: 7px;
}

h1 {
  font-size: 40px;
  color: #459185;
  line-height: 1.3;
}

@media screen and (max-width: 768px) {
  div.hero-section {
    padding: 10px 30px;
    display: flex;
    flex-direction: column-reverse;
    margin-top: 60px;
  }

  img {
    width: 300px;
  }

  h1 {
    font-size: 23px;
    color: #459185;
    margin-top: 0px;
    text-align: center;
  }

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media screen and (max-width: 300px) {
  h1 {
    font-size: 20px;
  }
}
</style>
