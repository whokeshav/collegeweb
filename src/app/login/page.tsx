"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Signup success", response.data);
      router.push("/profile");
    } catch (error: any) {
      console.log("Signup failed", error.message);

      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 ">
      <div className="max-w-2xl mx-auto p-4 relative z-10 space-y-4 mt-4">
        <h1 className="text-lg md:text-1xl text-center font-sans font-bold mb-8 text-white">
          {loading ? "Processing" : "Login"}
        </h1>
        <hr />
        <label
          className="text-lg md:text-1xl text-center font-sans font-bold mb-8 text-white"
          htmlFor="email"
        >
          email
        </label>
        <input
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
          id="email"
          type="text"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="email"
        />
        <label
          className="text-lg md:text-1xl text-center font-sans font-bold mb-8 text-white"
          htmlFor="password"
        >
          password
        </label>
        <input
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="password"
        />
        <button
          onClick={onLogin}
          className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
        >
          {buttonDisabled ? "No Login" : "Login"}
        </button>
        <Link
          className="text-lg md:text-1xl pl-5 text-center font-sans font-bold mb-8 text-white"
          href="/signup"
        >
          Visit Signup page
        </Link>
      </div>
    </div>
  );
}
