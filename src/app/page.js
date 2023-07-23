import React from "react";
import Link from "next/link";
import Image from "next/image";
import Hero from "public/hero.png";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="flex gap-1 items-center justify-center px-12 mt-12 lg:mt-16">
      <div className="flex-1 flex flex-col items-center lg:items-start lg:gap-10 gap-5 lg:pt-16">
        <h1 className="lg:text-7xl text-3xl font-bold bg-gradient-to-b from-[#4a4c19] to-[#bbb] bg-clip-text text-transparent lg:text-left text-center">
          Moments Frozen in Time
        </h1>
        <div className="lg:hidden w-4/5">
          <HeroImage />
        </div>
        <p className="lg:text-2xl text-lg text-center font-bold lg:text-left">
          Committed to delivering exceptional photography services that evoke
          emotions and preserve cherished memories for a lifetime.
        </p>
        <Button url="/portfolio" text="See Our Work" />
      </div>
      <div className="lg:block hidden flex-1">
        <HeroImage />
      </div>
    </div>
  );
}

const HeroImage = () => {
  return <Image src={Hero} alt="home photo" className="lg:w-2/3 mx-auto" />;
};
