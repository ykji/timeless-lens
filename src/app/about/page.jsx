import React from "react";
import Image from "next/image";
import Button from "@/components/Button";

const About = () => {
  return (
    <div className="mt-5 flex flex-col gap-10 h-full px-10">
      <div className="w-full h-[40vh] relative">
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt="cover photo"
          className="grayscale"
        />
        <div className="absolute bg-[#bdc253] p-6 text-white font-bold left-[2vw] bottom-[2vh] opacity-80 z-">
          <h1 className="lg:text-2xl text-lg">Digital Storytellers</h1>
          <h2 className="lg:text-lg text-sm hidden lg:block font-semibold">
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex-1 px-7 flex flex-col gap-5">
          <h1 className="font-bold text-2xl">Who Are We?</h1>
          <p className="text-base text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
        </div>
        <div className="flex-1 px-7 flex flex-col gap-5">
          <h1 className="font-bold text-2xl">What We Do?</h1>
          <p className="text-base text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            {/* <br /> */}
            <br /> - Fast and Handy
            {/* <br /> */}
            <br /> - Mobile Apps
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
