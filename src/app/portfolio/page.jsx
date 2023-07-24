import React from "react";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className="mt-5 flex flex-col items-center lg:items-start">
      <h1 className="lg:text-3xl text-xl font-bold">Choose a gallery</h1>
      <div className="flex lg:flex-row flex-col gap-10 mt-6">
        <div
          href="/portfolio/illustrations"
          className="border-2 relative border-white h-96 w-72 lg:hover:text-green-400 bg-[url('/illustration.png')] bg-cover"
        >
          <span className="absolute bottom-3 right-3 text-3xl font-bold ">
            Illustrations
          </span>
        </div>
        <div
          href="/portfolio/videos"
          className="border-2 relative border-white h-96 w-72 lg:hover:text-green-400 bg-[url('/videos.jpg')] bg-cover"
        >
          <span className="absolute bottom-3 right-3 text-3xl font-bold ">
            Videos
          </span>
        </div>
        <div
          href="/portfolio/product-photography"
          className="border-2 relative border-white h-96 w-72 lg:hover:text-green-400 bg-[url('/product.jpg')] bg-cover"
        >
          <span className="absolute bottom-3 right-3 text-3xl font-bold ">
            Product
          </span>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
