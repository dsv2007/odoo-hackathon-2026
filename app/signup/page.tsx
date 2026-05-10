"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  "https://ihorydenwhwgcsoevori.supabase.co";

const supabaseAnonKey =
   "sb_publishable_o7_uzK2XYm9uQFmsO1cynA_TtYdQRPC";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      console.log(data);
      console.log(error);

      if (error) {
        alert(error.message);
        return;
      }

      alert("Signup successful!");
    } catch (err) {
      console.error(err);
      alert("Connection error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-zinc-900 p-8 rounded-2xl w-[400px]">
        <h1 className="text-3xl font-bold mb-6">Create Account</h1>

        <input
          className="w-full p-3 mb-4 rounded bg-zinc-800"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full p-3 mb-4 rounded bg-zinc-800"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSignup}
          className="w-full bg-green-500 p-3 rounded-xl font-semibold"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}