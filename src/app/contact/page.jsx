import Image from "next/image";
import Button from "@/components/Button";

export const metadata = {
  title: "TimelessLens Contact Information",
  description: "This is Contact Page",
};

const Contact = () => {
  return (
    <div className="flex flex-col gap-6 mt-6 px-6 items-center w-full">
      <h1 className="lg:text-3xl text-2xl font-bold">
        {"Let's Keep in Touch"}
      </h1>
      <div className="flex flex-col lg:flex-row items-center gap-1 mt-10 px-20 w-full">
        <div className="flex-1">
          <Image
            src="/contact.png"
            alt="contact photo"
            width={400}
            height={400}
          />
        </div>
        <form className="flex-1 flex flex-col gap-3 px-6">
          <input
            type="text"
            placeholder="name"
            className="p-4 rounded-md text-lg mx-6 lg:mx-0"
          />
          <input
            type="text"
            placeholder="email"
            className="p-4 rounded-md text-lg mx-6 lg:mx-0"
          />
          <textarea
            className="p-4 rounded-md text-lg mx-6 lg:mx-0"
            placeholder="message"
            cols="30"
            rows="10"
          ></textarea>
          <Button url="#" text="Send" className="mx-6 lg:mx-0" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
