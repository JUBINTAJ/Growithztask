
'use client'

import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaApple } from "react-icons/fa";

import { Pacifico } from "next/font/google";
import { useRouter } from "next/navigation";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

export default function AuthModal({ isSignUpPage }) {
  const [isSignIn, setIsSignIn] = useState(!isSignUpPage);

  const Router=useRouter()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignIn) {
      Router.push("/");
    } else {
      Router.push("/Login"); 
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff8e7] relative overflow-hidden">
      <div className="absolute w-72 h-72 bg-[#b7f5e5] opacity-30 rounded-full top-0 left-10 blur-3xl"></div>
      <div className="absolute w-72 h-72 bg-[#b7f5e5] opacity-30 rounded-full top-10 right-10 blur-3xl"></div>
      <div className="absolute w-72 h-72 bg-[#f5d6d6] opacity-30 rounded-full bottom-10 left-10 blur-3xl"></div>
      <div className="absolute w-72 h-72 bg-[#f5d6d6] opacity-30 rounded-full bottom-0 right-10 blur-3xl"></div>

      <div className="relative bg-white rounded-2xl shadow-lg w-full max-w-md px-8 py-10 z-10">
        <div className="absolute w-5 h-5 bg-[#d6a676] rounded-sm top-[-10px] left-[-10px] rotate-45"></div>
        <div className="absolute w-5 h-5 bg-[#d6a676] rounded-sm bottom-[-10px] right-[-10px] rotate-45"></div>

        <div className="flex flex-col items-center mb-6">
          <h1 className={`text-3xl font-bold text-[#63a69f] ${pacifico.className}`}>
            Paws<span className="text-[#f4a261]">&</span>Tails
          </h1>
          <div className="text-2xl mt-1"><img src="/Vector.png" alt="" className="h-7" /></div>
        </div>

        <div className="flex justify-center mb-6">
          <button
            onClick={() => setIsSignIn(true)}
            className={`text-sm font-semibold pb-1 mr-4 ${
              isSignIn ? "border-b-2 border-black" : "text-gray-400 hover:text-black"
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setIsSignIn(false)}
            className={`text-sm font-semibold pb-1 ${
              !isSignIn ? "border-b-2 border-black" : "text-gray-400 hover:text-black"
            }`}
          >
            Sign Up
          </button>
        </div>

        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          {!isSignIn && (
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 rounded-md px-4 py-2 text-sm"
            />
          )}
          <input
            type="email"
            placeholder="your@email.com"
            className="border border-gray-300 rounded-md px-4 py-2 text-sm"
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-md px-4 py-2 text-sm"
          />
          {!isSignIn && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="border border-gray-300 rounded-md px-4 py-2 text-sm"
            />
          )}
          <button
            type="submit"
            className="bg-[#9be8e2] hover:bg-[#8dd8d2] text-white font-semibold py-2 rounded-md flex items-center justify-center gap-2"
          >
            <span>🔒</span> {isSignIn ? "Sign In" : "Sign Up"}

          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="mx-2 text-gray-400 text-sm">or continue with</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <div className="flex justify-center gap-6 mb-4">
          <button className="text-2xl">
            <FaFacebookF />
          </button>
          <button className="text-2xl">
            <FcGoogle />
          </button>
          <button className="text-2xl">
            <FaApple />
          </button>
        </div>

        <p className="text-center text-xs text-gray-500">
          {isSignIn ? "Don't have an account?" : "Already have an account?"}{" "}
          <span
            className="text-[#f4a261] font-semibold cursor-pointer"
            onClick={() => setIsSignIn(!isSignIn)}
          >
            {isSignIn ? "Sign Up" : "Sign In"}
          </span>
        </p>
      </div>
    </div>
  );
}
