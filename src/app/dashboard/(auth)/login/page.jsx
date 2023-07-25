"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getProviders, signIn, useSession } from "next-auth/react";

const Login = ({ url }) => {
  const session = useSession();
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setError(params.get("error"));
    setSuccess(params.get("success"));
  }, [params]);

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      setLoading(true);
      signIn("credentials", {
        email,
        password,
      });
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5 py-8 px-6">
      <h1 className="text-2xl lg:text-4xl font-bold">
        {success ? success : "Welcome Back"}
      </h1>
      <h2 className="font-semibold">Please log in to see the dashboard.</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-8">
        <input
          type="email"
          placeholder="Email"
          required
          className="px-4 py-2 rounded-md border border-[#bbb] bg-transparent"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="px-4 py-2 rounded-md border border-[#bbb] bg-transparent"
        />
        <button className="bg-[#bdc253] rounded-md text-white py-2 font-bold">
          {loading ? "Login..." : "Login"}
        </button>
        {error && error}
      </form>
      <button
        onClick={() => {
          signIn("google");
        }}
        className='{styles.button + " " + styles.google}'
      >
        Login with Google
      </button>
      <span className="{styles.or}">- OR -</span>
      <Link className="{styles.link}" href="/dashboard/register">
        Create new account
      </Link>
    </div>
  );
};

export default Login;
