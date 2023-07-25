"use client";

import useSWR from "swr";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const router = useRouter();
  const session = useSession();
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (session.status === "unauthenticated") {
      router?.push("/dashboard/login");
    }
  }, [session]);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      setSending(true);
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();
      e.target.reset();
    } catch (err) {
      console.log(err);
    } finally {
      setSending(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };

  if (session.status === "authenticated") {
    return (
      <div className="flex flex-col lg:flex-row lg:gap-14 gap-6 justify-between items-center mt-10 px-10">
        {data && data.length ? (
          <div className="flex-1 flex flex-col gap-8">
            {isLoading
              ? "loading"
              : data?.map((post) => (
                  <div
                    className="flex justify-start gap-3 items-center"
                    key={post._id}
                  >
                    <div className="w-40 lg:w-96 lg:h-60 h-28 relative">
                      <Image
                        src={post.img}
                        alt={post.title}
                        fill={true}
                        className="object-cover"
                      />
                    </div>
                    <h2 className="{styles.postTitle}">{post.title}</h2>
                    <span
                      className="cursor-pointer text-red-800"
                      onClick={() => handleDelete(post._id)}
                    >
                      X
                    </span>
                  </div>
                ))}
          </div>
        ) : (
          <div className="min-w-[50%] text-center border-2 py-20 rounded-md px-4">
            No posts yet. Please add new posts using the form.
          </div>
        )}
        <form
          className="flex-1 flex flex-col items-center lg:items-start gap-5"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl font-bold lg:text-4xl mb-2">Add New Post</h1>
          <input
            type="text"
            required
            placeholder="Title"
            className="bg-transparent px-4 py-2 border-2 rounded-md w-full"
          />
          <input
            type="text"
            required
            placeholder="Desc"
            className="bg-transparent px-4 py-2 border-2 rounded-md w-full"
          />
          <input
            type="text"
            required
            placeholder="Image"
            className="bg-transparent px-4 py-2 border-2 rounded-md w-full"
          />
          <textarea
            placeholder="Content"
            required
            className="bg-transparent px-4 py-2 border-2 rounded-md w-full"
            cols="30"
            rows="10"
          ></textarea>
          <button className="bg-[#bdc253] text-white font-bold py-3 rounded-md w-full">
            {sending ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    );
  }
};

export default Dashboard;
