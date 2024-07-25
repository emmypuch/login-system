<template>
  <div class="wrapper">
    <NavLinks />
    <div class="hero-section">
      <div class="hero-title">
        <h4>
          Welcome! <br />
          Make your difference with <br />
          systems for teams.
        </h4>
        <router-link to="/SignupPage" class="nav-signup-link"
          >Connect & Grow</router-link
        >
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
  props: {},
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

h4 {
  font-size: 40px;
  color: #459185;
}

@media screen and (max-width: 768px) {
  div.hero-section {
    padding: 10px 30px;
    display: flex;
    flex-direction: column-reverse;
    margin-top: 45px;
  }

  img {
    width: 300px;
  }

  h4 {
    font-size: 25px;
    color: #459185;
    margin-top: 0px;
  }
}
</style>
