"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Email and Password are required");
      return;
    }
    setError("");
    console.log("Login attempted with:", { email, password });
  };

  return (
    <>
      <header className="bg-green-700 shadow-md py-3 sticky top-0 z-30">
        <div className="w-full max-w-screen-xl mx-auto flex items-center px-4 md:px-8">
          <div className="flex items-center space-x-5 mr-auto">
            <Image
              src="/planttt.png"
              alt="Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-2xl font-bold text-white">Plant Co.</span>
          </div>
        </div>
      </header>

      <div className="min-h-screen bg-white flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Login</h2>
        <p className="text-gray-600 mb-6">
          Don't have an account yet?{" "}
          <Link href="/signup" className="text-indigo-600 hover:underline">
            Create account
          </Link>
        </p>

        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="w-full max-w-sm px-8">
          <div className="mb-4">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Email"
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Password"
            />
          </div>

          <div className="flex justify-between items-center mb-6">
            <Link
              href="/forgot-password"
              className="text-sm text-gray-600 hover:text-green-500"
            >
              Forgot your password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition duration-200"
          >
            SIGN IN
          </button>
        </form>

        <Link
          href="/"
          className="text-sm text-gray-600 mt-4 hover:text-green-500"
        >
          Return to Store
        </Link>
      </div>
    </>
  );
};

export default LoginPage;
