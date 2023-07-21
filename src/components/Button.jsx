import React from "react";
import Link from "next/link";

const Button = ({ text, url }) => {
  return (
    <Link href={url}>
      <button className="bg-[#bdc253] font-bold w-max text-xs text-white px-6 py-3 rounded-md">
        {text}
      </button>
    </Link>
  );
};

export default Button;
