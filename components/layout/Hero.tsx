import Image from "next/image";
import heroImage from "@/assets/image/Mask Group.png";
import recipTag from "@/assets/image/image 14.png";
import fork from "@/assets/image/ForkKnife.png";
import timer from "@/assets/image/Timer.png";
import profile from "@/assets/image/Ellipse 2.png";
import Button from "@/components/module/Button";

function Hero() {
  return (
    <div className="flex my-10 w-[980px] h-[475px] bg-[#E7FAFE] m-auto rounded-3xl">
      <div className="flex-col justify-between w-1/2 p-16">
        <div className="bg-white rounded-full flex justify-center items-center w-28 h-8 gap-3">
          <Image src={recipTag} alt="Hot Recipes" width={20} height={20} />
          <p className="text-[10px] font-bold text-black">Hot Recipes</p>
        </div>
        <p className="font-bold text-2xl mt-5">Spicy delicious chicken wings</p>
        <p className="text-[16px] text-black/60 mt-5">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
        </p>
        <div className="flex gap-3 mt-5">
          <div className="bg-slate-200 rounded-full flex justify-center items-center w-28 h-8 gap-3">
            <Image src={timer} alt="time" width={20} height={20} />
            <p className="text-[10px] font-bold text-black">30 Minutes</p>
          </div>
          <div className="bg-slate-200 rounded-full flex justify-center items-center w-24 h-8 gap-3">
            <Image src={fork} alt="fork" width={20} height={20} />
            <p className="text-[10px] font-bold text-black">Chicken</p>
          </div>
        </div>
        <div className="flex justify-between pt-28">
          <div className="flex">
            <Image
              className="m-2"
              src={profile}
              alt="profile"
              width={25}
              height={25}
            />
            <div>
              <p className="text-sm font-bold">John Smith</p>
              <p className="text-xs">15 March 2022</p>
            </div>
          </div>
          <Button text="View Recipes" />
        </div>
      </div>
      <div className="flex justify-end ">
        <Image src={heroImage} alt="hot-recipes" width={490} height={475} />
      </div>
    </div>
  );
}

export default Hero;
