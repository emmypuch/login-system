<template>
  <div class="">
    <div class="dashboard-wrapper">
      <div
        class="menu-list"
        :class="{ minimized: menuMinimized, expanded: !menuMinimized }"
      >
        <!-- <button class="toggle-btn" @click="toggleMenu">
          <span v-if="menuMinimized">+</span>
          <span v-else>-</span>
        </button> -->
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
          <router-link to="/DocumentUpload" class="upload-button">
            Upload Documents
          </router-link>
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
      menuMinimized: window.innerWidth <= 768,
    };
  },

  computed: {
    hasLogo() {
      return this.companyLogoUrl !== "";
    },
  },

  methods: {
    logout() {
      setTimeout(() => {
        this.$router.push("/");
      }, 500);
    },

    toggleMenu() {
      this.menuMinimized = !this.menuMinimized;
    },

    handleResize() {
      if (window.innerWidth <= 768) {
        this.menuMinimized = true;
      } else {
        this.menuMinimized = false;
      }
    },
  },

  mounted() {
    window.addEventListener("resize", this.handleResize);
  },

  // eslint-disable-next-line vue/no-deprecated-destroyed-lifecycle
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
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

.menu-list {
  background: #459185;
  color: #fff;
  padding: 20px;
  height: 100vh;
  overflow-y: auto;
  transition: width 0.3s ease;
  position: relative;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 60px;
}

.menu-list.expanded {
  width: 250px;
}

.menu-list p {
  margin-top: 12px;
  font-size: 18px;
  font-weight: bold;
}

.menu-list ul {
  list-style: none;
  padding: 15px;
  display: flex;
  flex-direction: column;
}

.menu-list li {
  margin-bottom: 10px;
  margin-top: 30px;
}

.menu-list li a {
  text-decoration: none;
  color: #fff;
  display: block;
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

.contents {
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

/* .toggle-btn {
  display: none;
}

.toggle-btn:hover {
  background-color: #367169;
} */

@media screen and (max-width: 768px) {
  .menu-list {
    width: 60px;
    justify-content: center;
  }

  .menu-list.expanded {
    width: 250px;
  }

  .menu-list ul {
    padding: 0;
    display: flex;
    align-items: center;
  }

  .menu-list li a {
    text-align: center;
  }

  .company-logo {
    flex-direction: column;
    display: flex;
  }

  .company-logo img {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo-placeholder {
    margin-left: 5px;
  }

  /* .toggle-btn {
    position: absolute;
    top: 20px;
    right: -50px;
    background: #459185;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 20px;
    transition: background-color 0.3s ease;
  } */
}
</style>
