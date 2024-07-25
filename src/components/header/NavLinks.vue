<template>
  <div class="wrapper">
    <!-- Hamburger Menu for Small Screens -->
    <div class="navbar">
      <router-link to="/" class="navbar-logo">SafeSign</router-link>
      <button class="navbar-toggle" @click="toggleMenu">
        <span class="icon-bar" :class="{ open: isMenuOpen }"></span>
        <span class="icon-bar" :class="{ open: isMenuOpen }"></span>
        <span class="icon-bar" :class="{ open: isMenuOpen }"></span>
      </button>
    </div>

    <!-- Collapsible Menu -->
    <div class="menu" :class="{ 'menu-open': isMenuOpen }">
      <ul>
        <li>
          <router-link to="/LoginPage" class="nav-login-link"
            >Login</router-link
          >
        </li>
        <li>
          <router-link to="/SignupPage" class="nav-signup-link"
            >Signup</router-link
          >
        </li>
      </ul>
    </div>

    <!-- Desktop Navbar (Hidden on Small Screens) -->
    <nav class="navbar-desktop">
      <router-link to="/" class="navbar-logo">SafeSign</router-link>
      <ul>
        <li>
          <router-link to="/LoginPage" class="nav-login-link"
            >Login</router-link
          >
        </li>
        <li>
          <router-link to="/SignupPage" class="nav-signup-link"
            >Signup</router-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
.wrapper {
  padding: 10px 30px;
}

.navbar {
  display: none;
}

.navbar-desktop {
  display: flex;
  justify-content: space-between;
}

.navbar-desktop ul {
  display: flex;
}

.navbar-desktop ul li {
  list-style: none;
  margin-left: 20px;
}

.navbar-desktop ul li .nav-signup-link {
  background-color: #459185;
  padding: 10px 30px;
  border-radius: 7px;
  color: #fff;
}

.navbar-desktop ul li .nav-login-link {
  color: #459185;
  border: 1px solid #459185;
  padding: 10px 30px;
  border-radius: 7px;
}

.navbar-logo {
  color: #459185;
  font-size: 17px;
  font-weight: bolder;
  text-decoration: none;
}

.navbar-toggle {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.navbar-toggle span {
  display: block;
  width: 25px;
  height: 3px;
  background-color: #459185;
  margin-bottom: 5px;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

.navbar-toggle:hover span {
  background-color: #367169;
}

.menu {
  display: none;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

.menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu li {
  padding: 10px;
  text-align: center;
}

.menu-open {
  display: block;
}

.nav-login-link,
.nav-signup-link {
  text-decoration: none;
  color: #459185;
}

@media screen and (max-width: 768px) {
  .wrapper {
    padding: 0;
  }

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px;
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .navbar-desktop {
    display: none;
  }

  .navbar-toggle {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 1000;
  }

  .navbar-toggle span {
    display: block;
    width: 25px;
    height: 3px;
    background-color: #459185;
    margin-bottom: 5px;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  }

  .navbar-toggle:hover span {
    background-color: #367169;
  }

  .menu {
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    z-index: 1000;
    display: none;
    /* transform: translateY(-100%);
    opacity: 0; */
  }

  .menu-open {
    display: block;
    padding: 15px;
    /* transform: translateY(0);
    opacity: 1; */
  }

  .menu-open ul {
    animation: fadeInDown 0.5s ease forwards;
  }

  .navbar-toggle .icon-bar {
    display: block;
    width: 25px;
    height: 3px;
    background-color: #459185;
    margin-bottom: 5px;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  }

  .navbar-toggle .icon-bar.open:nth-child(1) {
    transform: translateY(8px) rotate(-45deg);
  }

  .navbar-toggle .icon-bar.open:nth-child(2) {
    opacity: 0;
  }

  .navbar-toggle .icon-bar.open:nth-child(3) {
    transform: translateY(-8px) rotate(45deg);
  }
}
</style>
