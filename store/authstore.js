// /store/useAuthStore.js;
"use client";
import { create } from 'zustand';
import axios from 'axios';
import axiosinstance from '../axios/axiosinstance';
import { toast } from 'react-toastify';

const useAuthStore = create((set) => ({
  isSignIn: true,

  toggleAuthMode: () => set((state) => ({ isSignIn: !state.isSignIn })),
  setSignIn: () => set({ isSignIn: true }),
  setSignUp: () => set({ isSignIn: false }),

  handleLogin: async ({ email, password, router }) => {
    if (!email || !password) {
      toast.error("Please enter email and password.");
      return;
    }

    try {
      const res = await axiosinstance.post("user/login", { email, password });
      const data = res.data;
      localStorage.setItem("token", data.accessToken);
      localStorage.setItem("id", data.user.id);
      toast.success("Login successful!");
      router.push("/questions");
    } catch (error) {
      const message = error?.response?.data?.message || "Login failed.";
      toast.error(message);
    }
  },

  handleSignup: async ({ username, email, password, confirmPassword, router }) => {
    if (!username || !email || !password || !confirmPassword) {
      toast.error("Please fill out all fields.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      const res = await axios.post('http://localhost:6000/api/user/signup',{
        username:"jubin",
        email:"jjubbb@gmail.com",
       password:"11111111"
      });
      console.log(res);
      
      toast.success("Sign-up successful! Redirecting to login...");
      router.push("/Login");
    } catch (error) {
        console.log(error);
        
      const message = error?.response?.data?.message || "Sign-up failed.";
      toast.error(message);
    }
  },
}));

export default useAuthStore;
