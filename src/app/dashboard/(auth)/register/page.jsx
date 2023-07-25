"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const Register = () => {
  const session = useSession();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      setLoading(true);
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      res.status === 201 &&
        router.push("/dashboard/login?success=Account has been created");
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5 py-8 px-6">
      <h1 className="text-2xl lg:text-4xl font-bold">Create an Account</h1>
      <h2 className="font-semibold">Please sign up to see the dashboard</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-8">
        <input
          type="text"
          placeholder="Username"
          required
          className="px-4 py-2 rounded-md border border-[#bbb] bg-transparent"
        />
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
          {loading ? "Registering..." : "Register"}
        </button>
        {error && "Something went wrong!"}
      </form>
      <span className="{styles.or}">- OR -</span>
      <Link className="{styles.link}" href="/dashboard/login">
        Login with an existing account?
      </Link>
    </div>
  );
};

export default Register;
