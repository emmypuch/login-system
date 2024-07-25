import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HomePage.vue";
import LoginPage from "./components/LoginPage.vue";
import SignupPage from "./components/SignupPage.vue";
import DocumentUpload from "./components/DocumentUpload.vue";
import DashboardPage from "./components/DashboardPage.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/LoginPage",
    name: "Login",
    component: LoginPage,
  },
  {
    path: "/SignupPage",
    name: "Signup",
    component: SignupPage,
  },
  {
    path: "/DocumentUpload",
    name: "DocumentUpload",
    component: DocumentUpload,
  },
  {
    path: "/DashboardPage",
    name: "DashboardPage",
    component: DashboardPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
