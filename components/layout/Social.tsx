import { instagramPost } from "@/Data/instagramPost";
import Image from "next/image";
import Button from "@/components/module/Button";

function Social() {
  return (
    <div className="w-[980px] mx-auto pb-14 mb-24 bg-gradient-to-b from-white to-[#E7F9FD]">
      <div className="flex flex-col justify-center py-14">
        <h1 className="text-4xl font-semibold text-center">
          Check out @foodieland on Instagram
        </h1>
        <p className=" mx-auto text-base font-normal text-center w-[706px] text-black/60 pt-5">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </p>
      </div>
      <div className="gap-5 flex items-center justify-center mx-auto">
        {instagramPost.map((post, index) => (
          <Image
            key={index}
            className="w-[200px] h-[400px]"
            alt="foodieland instagram"
            src={post.image}
            width={600}
            height={1000}
          />
        ))}
      </div>
      <div className="flex justify-center items-center pt-12">
        <Button text="Visit Our Instagram" />
      </div>
    </div>
  );
}

export default Social;
