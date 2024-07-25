<template>
  <div class="">
    <div class="dashboard-wrapper">
      <button class="hamburger-menu" @click="toggleSidebar">
        <span v-if="isSidebarVisible">☰</span>
        <span v-else>×</span>
      </button>
      <div class="menu-list" :class="{ 'sidebar-hidden': !isSidebarVisible }">
        <div class="company-logo">
          <img v-if="hasLogo" :src="companyLogoUrl" :alt="companyName" />
          <div v-else class="logo-placeholder">{{ initials }}</div>
          <p>{{ companyName }}</p>
        </div>
        <ul>
          <li class="active-menu-item"><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Notifications</a></li>
          <li><a href="#">Settings</a></li>
          <li @click="logout">
            <router-link to="/" class="navbar-logo">Log Out</router-link>
          </li>
        </ul>
      </div>
      <div class="contents">
        <div class="center">
          <h2>Welcome, {{ companyName }}</h2>
          <p>Hello happy team, let's get you started</p>
          <router-link to="/DocumentUpload" class="upload-button"
            >Upload Documents</router-link
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
      companyName: "Teams Company",
      companyLogoUrl: "",
      initials: "TC",
      isSidebarVisible: true,
    };
  },

  computed: {
    hasLogo() {
      return this.companyLogoUrl !== "";
    },
  },

  methods: {
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible;
    },

    logout() {
      setTimeout(() => {
        this.$router.push("/");
      }, 500);
    },
  },
};
</script>

<style scoped>
.dashboard-wrapper {
  display: grid;
  grid-template-columns: auto 1fr;
  position: relative;
}

.hamburger-menu {
  display: none;
  font-size: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1000;
  transition: color 0.3s ease;
  color: #866304;
}

.hamburger-menu span {
  display: inline-block;
  font-size: 35px;
}

.company-logo {
  margin-bottom: 20px;
  text-align: center;
  display: flex;
  gap: 10px;
  margin-top: 15px;
}

.company-logo img {
  max-width: 50px;
  max-height: 50px;
  border-radius: 50%;
}

.center {
  text-align: center;
}

.logo-placeholder {
  width: 50px;
  height: 50px;
  background-color: #fff;
  color: #367169;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

.menu-list p {
  margin-top: 12px;
  font-size: 18px;
  font-weight: bold;
}

div.menu-list {
  background: #459185;
  color: #fff;
  padding: 20px;
  height: 100vh;
  overflow-y: auto;
  transition: width 0.3s ease;
  position: relative;
  top: 0;
  left: 0;
  transform: translateX(0);
  z-index: 999;
}

.menu-list.sidebar-hidden {
  transform: translateX(0);
}

.menu-list ul {
  list-style: none;
  padding: 15px;
}

.menu-list li {
  margin-bottom: 10px;
  margin-top: 30px;
}

.menu-list li a {
  text-decoration: none;
  color: #fff;
}

.active-menu-item {
  background-color: #72aaa2;
  color: #fff;
  font-weight: bold;
  border-radius: 5px;
  padding: 10px 30px;
  width: 150px;
}

div.contents {
  background-color: #f0f0f0;
  padding: 20px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

h2 {
  color: #459185;
}

.upload-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #459185;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 10px;
}

.upload-button:hover {
  background-color: #367169;
}

.contents p {
  color: #367169;
}

@media screen and (max-width: 768px) {
  .dashboard-wrapper {
    display: block;
  }

  div.menu-list {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 999;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }

  .menu-list.sidebar-hidden {
    transform: translateX(0);
  }

  .hamburger-menu {
    display: block;
  }

  .company-logo {
    margin-top: 40px;
  }
}
</style>
