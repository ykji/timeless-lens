import React from "react";
import Link from "next/link";
import Image from "next/image";

const Blog = async () => {
  return (
    <div className="mt-5 px-6 flex flex-col gap-8">
      {[...Array(5)].map((_, index) => (
        <div
          className="flex flex-col lg:flex-row lg:gap-10 gap-6 items-center"
          key={index}
        >
          <div className="min-w-fit">
            <Image
              src="https://images.pexels.com/photos/3932228/pexels-photo-3932228.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="blog-1"
              width={400}
              height={250}
              className="object-cover"
            />
          </div>
          <div className="text-center lg:text-start">
            <h1 className="text-4xl font-bold">Test Title</h1>
            <p className="mt-3 font-semibold text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              repellat aspernatur sed excepturi adipisci architecto, molestias
              veniam doloribus labore, facere eius a, expedita mollitia optio.
              Totam aliquam eos mollitia natus ab? Praesentium saepe architecto
              nesciunt sunt esse dignissimos nobis quo assumenda eligendi
              impedit fugiat, fuga ullam, quaerat maiores culpa alias reiciendis
              quas modi deserunt nostrum ex et. Distinctio sint, id ab cumque
              iure tempore. Quas beatae nulla voluptatem praesentium, dolorem
              atque excepturi. Velit eius vero quod nisi, perspiciatis
              reiciendis itaque eaque fuga iste incidunt maxime. Quaerat vero,
              praesentium, nemo accusantium similique corporis molestias saepe
              nobis neque impedit, provident eum quidem?
            </p>
          </div>
          <div className="lg:hidden w-full h-1 border-b border-gray-700"></div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
