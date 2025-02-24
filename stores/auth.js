import { defineStore } from "pinia";
import { userService } from "@/services/userService";
import Swal from "sweetalert2";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: null,
    refreshToken: null,
    user: null,
  }),
  actions: {
    async login(email, password) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 4000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      try {
        // Call the API
        const response = await userService.login(email, password);

        if (!response.tokens || !response.tokens.access) {
          throw new Error("Invalid Credentials");
        }

        // Save tokens & user data
        this.setAuthData(
          response.tokens.access,
          response.tokens.refresh,
          response.user
        );

        navigateTo("/dashboard");
        Toast.fire({
            icon: "success",
            title: "Login Successful!",
          });
          
      } catch (error) {
        Toast.fire({
            icon: "error",
            title: "Confirm Email and Password",
          });      }
    },

    setAuthData(accessToken, refreshToken, user) {
      this.token = accessToken;
      this.refreshToken = refreshToken;
      this.user = user;

      // Store tokens in localStorage
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("user", JSON.stringify(user));
    },

    logout() {
      this.token = null;
      this.refreshToken = null;
      this.user = null;

      // Clear localStorage
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("user");

      alert("Logged out successfully");
    },

    loadAuthData() {
      // Load stored tokens & user data on app refresh
      this.token = localStorage.getItem("accessToken");
      this.refreshToken = localStorage.getItem("refreshToken");
      this.user = JSON.parse(localStorage.getItem("user")) || null;
    },
  },
});
