<template>
  <div>
    <div class="dashboard-wrapper">
      <div
        @click="toggleMenu"
        class="menu-list"
        :class="{ minimized: menuMinimized }"
        :style="{ width: menuWidth }"
      >
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
            <router-link to="/" class="navbar-logo">Logout</router-link>
          </li>
        </ul>
      </div>
      <!-- <div class="toggle-menu-btn" @click="toggleMenu">X</div> -->
      <div class="contents">
        <h2>Welcome, {{ companyName }}</h2>
        <p>Main dashboard content goes here...</p>
        <router-link to="/DocumentUpload" class="upload-button"
          >Upload Documents</router-link
        >
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
      menuMinimized: false,
    };
  },

  computed: {
    hasLogo() {
      return this.companyLogoUrl !== "";
    },
    menuWidth() {
      return this.menuMinimized ? "60px" : "250px";
    },
  },

  methods: {
    toggleMenu() {
      this.menuMinimized = !this.menuMinimized;
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

.menu-list.minimized {
  width: 60px;
}

div.menu-list {
  background: #459185;
  color: #fff;
  padding: 20px;
  height: 100vh;
  overflow-y: auto;
  transition: width 0.3s ease;
  position: relative;
}

.toggle-menu-btn {
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  /* margin: auto; */
  /* background-color: #72aaa2; */
  color: red;
  padding: 10px;
  /* border-radius: 5px; */
  text-align: right;
  cursor: pointer;
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

.menu-list li:nth-child(5):hover {
  background-color: #72aaa2;
  color: #fff;
  font-weight: bold;
  border-radius: 5px;
  padding: 10px 30px;
  width: 150px;
  transition: background-color 0.3s ease;
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

@media screen and (max-width: 768px) {
  .menu-list {
    height: auto;
    padding-bottom: 20px;
    width: 250px;
  }

  .menu-list.minimized {
    width: 60px;
  }

  .toggle-menu-btn {
    position: absolute;
    top: 10px;
    left: 0;
    right: 0;
    margin: auto;
  }
}
</style>
