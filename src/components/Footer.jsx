import Image from "next/image";

const Footer = () => {
  const date = new Date();

  return (
    <div className="flex flex-col lg:flex-row gap-2 text-xs justify-between items-center py-3 lg:px-10 px-2 mt-10">
      <div>{`© ${date.getFullYear()} TimelessLens. All rights reserved.`}</div>
      <div className="flex gap-3">
        <Image
          src="/1.png"
          alt="facebook account"
          width={16}
          height={16}
          className="opacity-60 cursor-pointer"
        />
        <Image
          src="/2.png"
          alt="twitter account"
          width={16}
          height={16}
          className="opacity-60 cursor-pointer"
        />
        <Image
          src="/3.png"
          alt="instagram account"
          width={16}
          height={16}
          className="opacity-60 cursor-pointer"
        />
        <Image
          src="/4.png"
          alt="youtube account"
          width={16}
          height={16}
          className="opacity-60 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Footer;
