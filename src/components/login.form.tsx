import React from "react";

export default function login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-pink-100 to-yellow-100">
      <span className="w-full max-w-md bg-[#f0f8ff] p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-black mb-6">
          Login
        </h1>

        <form className="flex flex-col items-center gap-4">
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-center outline-none focus:border-amber-200 focus:ring-1 focus:ring-amber-200"
            type="username"
            id="username"
            placeholder="username"
            required
          />

          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-center outline-none focus:border-amber-200 focus:ring-1 focus:ring-amber-200"
            type="password"
            id="password"
            placeholder="password"
            required
          />

          <button
            type="submit"
            className="w-full bg-amber-200 text-[#1a1a1a] py-2 rounded-lg font-semibold transition hover:bg-amber-100 active:scale-95 shadow-md cursor-pointer"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?
          <a href="#" className="text-[#C1AC74] hover:underline pl-2">
            Sign up
          </a>
        </p>
      </span>
    </div>
  );
}
