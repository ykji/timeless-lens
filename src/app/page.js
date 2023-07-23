import Link from "next/link";
import Image from "next/image";
import Hero from "public/hero.png";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="flex gap-12 items-center justify-between">
      <div className="flex-1 flex flex-col gap-10">
        <h1 className="text-7xl font-bold bg-gradient-to-b from-[#4a4c19] to-[#bbb] bg-clip-text text-transparent">
          Moments Frozen in Time
        </h1>
        <p className="text-2xl">
          Committed to delivering exceptional photography services that evoke
          emotions and preserve cherished memories for a lifetime.
        </p>
        <Button url="/portfolio" text="See Our Works" />
      </div>
      <div className="flex-1">
        <Image src={Hero} alt="home photo" className="w-2/3 h-96 mx-auto" />
      </div>
    </div>
  );
}
